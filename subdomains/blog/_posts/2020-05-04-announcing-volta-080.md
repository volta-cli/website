---
layout: post
title:  "Announcing Volta 0.8.0"
date:   2020-05-01 08:00:00 -0700
categories: update
author: Chuck Pierce
excerpt_separator: <!--more-->
---

The Volta team is happy to announce that Volta 0.8.0 is now available! This is a significant release, with several new features we're excited to share with you: Custom `npm` versions, `volta run`, and more!
<!--more-->

# What's New?

## Support for Custom npm

With Volta 0.8.0, you can now use custom versions of `npm` and are not tied to the version bundled with Node. Using the same commands you use to manage `yarn`, you can now also manage `npm` to select a custom version:

```bash
volta pin npm@latest
```

If you're using a custom `npm` version but want to switch back to using the version bundled with Node, no need to go searching for the specific version! You can use the `bundled` tag to switch back to the version that is bundled with your Node distribution:

```bash
volta pin npm@bundled
```

You can also manage your default version of `npm` using `volta install` in the same way.

## New Command – `volta run`

`volta run` is a new command that lets you run a one-off command with custom versions of your tools – _without_ needing to modify your pinned or default versions! Say you want to do a test run of your app with a new version of Node and Yarn, simply pass those versions to the `volta run` command:

```bash
volta run --node latest --yarn 1.19 yarn test
```

Volta will resolve the versions you selected, and automatically download any tools that aren't already available, then run your command using those tools. Any versions you don't set at the command-line will be filled using the pinned versions for your project or your defaults.

For full details on the options, see the [documentation](https://docs.volta.sh/reference/run).

## Human Formatter for `volta list`

We added `volta list` all the way back in Volta 0.6.2, to allow inspecting the tools and versions you have available. At the time, the only output format we supported was `plain`, which output the tools in a simple way, suitable for parsing in a script. In Volta 0.8.0, we added a new format – `human` – which is designed to be clearer and more user-friendly:

```bash
$ volta list
⚡️ Currently active tools:

    Node: v12.16.2 (default)
    npm: v6.14.4 (default)
    Yarn: v1.22.4 (default)
    Tool binaries available:
        ember (default)
```

The new format is the default when you run `volta list`, so you don't need to do anything special to see the new output.

## Bug Fixes and Experience Improvements

In addition to the big features, Volta 0.8.0 has a number of performance enhancements, UX improvements, and bug fixes. Including:

- More accurate installation - The Volta installer will now do a better job of ensuring that it is correctly configured on your system.
- Faster startup - We reduced some of the filesystem operations so that tools start up even faster than they did before.
- Error details are now always written to the terminal in CI environments.
- `volta list` correctly handles showing scoped packages.
- Node resolution now handles switching between internal and external repos more smoothly.
- Small typo fixes and improvements in the output formatting.

# Try it out!

To try Volta for the first time or upgrade your existing installation, follow the instructions on our [Getting Started](https://docs.volta.sh/guide/getting-started) page!

Finally, a huge amount of work went into making this release possible, and we would like to thank everyone who contributed ideas, feedback, bug reports, code, and moral support to the project.
