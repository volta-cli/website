---
layout: post
title:  "Global installs done right"
date:   2019-06-17 12:30:00 -0700
categories: update
author: Chuck Pierce and Dave Herman
excerpt_separator: <!--more-->
---

We built Volta to make managing, sharing, and using JavaScript command-line tools convenient and reliable. To make this work, we had to tackle the problem of global installs: a simple way to distribute command-line binaries but with issues that cause some developers to shy away from using them. **Volta makes global installs a first-class part of the JavaScript tooling experience**, making them both convenient and safe to use.
<!--more-->

So why do folks avoid global installs in the first place?

- Relying on global tools can make your project depend on something that isn’t listed in its `dependencies` or `devDependencies`, making it harder for other developers to contribute.
- Other developers could have different versions of the same global tools, leading to hard-to-identify bugs or inconsistencies in behavior.
- Unrelated projects on your own machine might depend on different versions of a tool, meaning you now have to manage those versions and switch between them when switching projects.

Some experts advocate including any tools your project depends on in your dependencies and then using the `scripts` hash in package.json to facilitate running those tools. This way any developer using your code will be able to easily run the same versions of the same tools that you do. This solution, while powerful, is not without its own issues:

- Requires the mental overhead of knowing what script to run to invoke a given tool (`npm test` vs `mocha`)
- Can make it tricky to customize the command, for example to run a single test from a test suite.
- Doesn’t work for tools that are used to bootstrap projects, like `create-react-app`.

Volta solves both of these sets of problems by providing smart proxies for any and all of your JS tools.

- By running `volta install mocha`, you let Volta know that you want `mocha` to be available everywhere in your terminal. Volta will download the latest version (or if you want you can specify a specific version) to use as the default.
- From that point forward, you’ll be able to run that default version of `mocha` directly in your terminal, just as if you had globally installed it with npm.
- However, if you run `mocha` in a project that has the `mocha` package as a dependency, Volta will automatically delegate to the local version installed in `node_modules`, without you having to change the command at all.

This proxy behavior lets you get all the usefulness of having tools directly available in your terminal, without having to worry about switching versions when switching projects. As a bonus, Volta will also pin a version of Node when installing each tool, so you don’t have to worry about having to re-install the tools if you update your default version of Node—they will all continue to work!

To learn more and try Volta for yourself, check out our home page <https://volta.sh>. You can also reach us on Twitter [@usevolta](https://twitter.com/usevolta) or join our Discord <https://discord.gg/hgPTz9A>
