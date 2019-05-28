---
title: Hooks
---

# Hooks

By default, Volta fetches Node, Yarn, and package binaries from public sources and registries (https://nodejs.org, https://yarnpkg.com, https://www.npmjs.com). However, depending on your environment, it may be necessary to tell Volta to instead download from a different source (e.g. npm Enterprise for internal tools). To accommodate that, Volta provides hooks into the download process.

## Where to specify hooks

Hooks are always set in a file named `hooks.json`. This file can be in one of two places, depending on the scope you want those hooks to have:

* Hooks specified in the Volta directory (`~/.volta/hooks.json` on Linux/MacOS, `%LOCALAPPDATA%\Volta\hooks.json` on Windows) will apply across the entire system.
* Hooks specified in a `.volta` subdirectory of a project (`<PROJECT ROOT>/.volta/hooks.json`) will only apply within that project. `<PROJECT ROOT>` here is defined as the location of the `package.json` for that project.

## Hooks file format

The contents of `hooks.json` must be an object, with optional keys for each type of tool (currently `node`, `yarn`, and `packages`). Each tool has 3 actions that can each have a hook applied to them:

* `index` Represents the URL used to determine the list of versions that are available to download for that tool. The response when accessing that URL must match the format of the public indexes for the selected tool.
* `latest` Represents the URL used to determine the latest version of that tool. For `node` and `package`, the response should be in the same format as `index`, making sure that the latest version is the first element in the list. For `yarn`, the response should be the raw version number string and nothing else.
* `distro` Represents the URL that is used to download the tool binaries. NOTE: `packages` currently does not support this action.

Finally, each action has 3 possible hooks (described below) that can be used (only one of which can be specified for each action at any time). An example `hooks.json` file is:

```json
{
    "node": {
        "index": {
            "bin": "/usr/local/node-lookup"
        },
        "latest": {
            "prefix": "http://example.com/node/"
        },
        "distro": {
            "template": "http://example.com/{% raw %}{{os}}{% endraw %}/{% raw %}{{arch}}{% endraw %}/node-{% raw %}{{version}}{% endraw %}.tar.gz"
        }
    },
    "yarn": {
        "index": {
            "template": "http://example.com/yarn/{% raw %}{{os}}{% endraw %}/{% raw %}{{arch}}{% endraw %}"
        },
        "latest": {
            "prefix": "http://example.com/yarnpkg/"
        },
        "distro": {
            "bin": "~/yarn-distro"
        }
    },
    "packages": {
        "index": {
            "prefix": "http://example.com/packages/"
        },
        "latest": {
            "bin": "/usr/local/latest-package"
        }
    }
}
```

## Hook types

### `prefix` Hooks

The `prefix` hook is a straightforward URL replacement. The URL will be built using the specified prefix, followed by the public file name for that action. For example, using the above `hooks.json`, we have a `prefix` hook specified for determining the latest yarn version. By default, Volta would fetch the latest version by making a request to `https://yarnpkg.com/latest-version`. Using the hook, Volta would instead try to access `http://example.com/yarnpkg/latest-version`, appending `latest-version` onto the specified prefix of `http://example.com/yarnpkg/`.

### `template` Hooks

The `template` hook allows you to specify the template for a URL, with wildcards that will be replaced. The available wildcards are:

* `{% raw %}{{os}}{% endraw %}` will be replaced by `darwin`, `linux`, or `win`, depending on the operating system
* `{% raw %}{{arch}}{% endraw %}` will be replaced by `x86` or `x64`, depending on the architecture of the system
* `{% raw %}{{version}}{% endraw %}` (Only available to `distro` actions) will be replaced by the specific version of the tool that Volta is trying to download.

Using the `node.distro` hook from the example above, when fetching `node@10.15.3` on a 64-bit Linux system, Volta would attempt to download the tarball from: `http://example.com/linux/x64/node-10.15.3.tar.gz`

### `bin` Hooks

The `bin` hook is an all-purpose hook that will call out to an external script to determine the URL. The value is a path to an executable script that will be called, and the URL will be read from the `stdout` of that script. For `distro` action hooks, the requested version of the tool will be passed as the first argument to that script.

Using the `yarn.distro` hook from the example `hooks.json`, when fetching `yarn@1.13.0`, Volta will call `~/yarn-distro "1.13.0"` and attempt to download the tarball from the URL that is returned by that hook.
