var request = require('request-promise');
var semver = require('semver');
var _ = require('lodash');

async function githubReleases(org, repo) {
    return await request({
        uri: "https://api.github.com/repos/" + org + "/" + repo + "/releases",
        headers: { 'user-agent': 'node.js' }
    });
}

async function githubVersions(org, repo) {
    let releases = JSON.parse(await githubReleases(org, repo));
    return releases.map(release => release.tag_name)
        .filter(x => x)
        .map(version => semver.parse(version.substring(1)))
        .filter(x => x);
}

async function typescriptVersions() {
    return await githubVersions('Microsoft', 'TypeScript');
}

async function yarnVersions() {
    return await githubVersions('yarnpkg', 'yarn');
}

async function nodeVersions() {
    let releases = JSON.parse(await request('https://nodejs.org/dist/index.json'));
    return releases.map(release => semver.parse(release.version.substring(1)));
}

function groupByMajor(versions) {
    // Group the flat list of versions by major version:
    let groups = _.groupBy(versions, version => version.major);

    // Extract the major version numbers, sorted from most recent:
    let majors = _.sortBy(Object.keys(groups), version => version.major).reverse();

    // Sort each major version's version list, sort from most recent:
    for (major of majors) {
        groups[major] = groups[major].sort(semver.rcompare);
    }

    return { groups, majors };
}

function groupByMinor(versions) {
    let groups = _.groupBy(versions, version => version.minor);
    let minors = _.sortBy(Object.keys(groups), version => version.minor).reverse();
    for (minor of minors) {
        groups[minor] = groups[minor].sort(semver.rcompare);
    }
    return { groups, minors };
}

function isOdd(x) {
    return x % 2 == 1;
}

function extractExamples(stable, recent) {
    return {
        "stable": {
            "major": stable.major,
            "full": stable.version
        },
        "recent": {
            "major": recent.major,
            "partial": recent.major + "." + recent.minor,
            "full": recent.version
        }
    };
}

function extractExamplesFromGroups(all, stableMajor, recentMajor) {
    return extractExamples(all.groups[stableMajor][0], all.groups[recentMajor][0]);
}

async function main() {
    // Node
    let nodeAll = groupByMajor(await nodeVersions());
    let activeLTS = _.dropWhile(nodeAll.majors, version => isOdd(+version))[0];
    let recentLTS = activeLTS - 2;
    let node = extractExamplesFromGroups(nodeAll, activeLTS, recentLTS);

    // TypeScript
    let tsAll = groupByMajor(await typescriptVersions());
    let stableTS = tsAll.majors[0];
    let recentTS = tsAll.majors[1];
    let typescript = extractExamplesFromGroups(tsAll, stableTS, recentTS);

    // Yarn
    let yarnAll = (await yarnVersions()).sort(semver.rcompare);
    let stableYarn = yarnAll[0];
    let recentYarn =  yarnAll[4];
    let yarn = extractExamples(stableYarn, recentYarn);

    let data = { node, typescript, yarn };

    console.log(JSON.stringify(data, null, 2));
}

main();
