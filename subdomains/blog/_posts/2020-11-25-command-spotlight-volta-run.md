---
layout: post
title:  "Command Spotlight: volta run"
date:   2020-11-23 08:00:00 -0700
categories: [spotlight, commands]
author: Chuck Pierce
excerpt_separator: <!--more-->
---

Volta's context detection is designed to be invisible: You type a command—like `npm start`—and Volta automatically detects and runs the correct version of that command. Sometimes, however, you need to take direct control over the tool versions that are used. Maybe you are trying to reproduce reported bug or testing how your project works with different tool versions. Whatever the reason, **`volta run` lets you run any command while specifying the Node, npm, and Yarn versions right at the command line**
<!--more-->

[`volta run`](https://docs.volta.sh/reference/run) has a few sets of command-line flags that let you define your tool versions. For any tool that _doesn't_ have a version set in the command line flags, Volta will use its normal context resolution to determine the appropriate version (from `package.json` or your default versions, as needed). The flags that you can set are:

- `--node <version>` controls the Node version for the command. `<version>` here can be an exact version—like `14.15.1`—or a partial version—such as `12`. You can even use `latest` or `lts` to resolve the appropriate Node version.
- `--npm <version>` and `--bundled-npm` allow you to set the npm version. Just like for Node, `<version>` can be an exact or partial version. `--bundled-npm` tells Volta to ignore any specific `npm` settings in the project or defaults and instead use the version bundled with Node (whichever Node you are using).
- `--yarn <version>` and `--no-yarn` similarly allow you to set the Yarn version. Since it isn't bundled, `--no-yarn` tells Volta to ignore any settings and omit Yarn from the final environment entirely.
- `--env NAME=VALUE` lets you set an environment variable for the command as well. This can be set multiple times to set multiple different environment variables.

That's a lot of words, how about some examples?

```
volta run --node lts --npm 7 npm start
```

This will run the command `npm start` using the most recent LTS Node version and major version 7 of npm.

```
volta run --yarn 1.22.1 yarn add typescript
```

This will run `yarn add typescript` using Yarn 1.22.1 and whichever Node version Volta would normally find (probably from your `package.json` file).

```
volta run --node latest --bundled-npm --env NPM_CONFIG_LOGLEVEL=silly npm install
```

This will run `npm install` using the latest Node, the npm version bundled with that Node, and with the environment variable `NPM_CONFIG_LOGLEVEL` set to `silly`.

As is the case with any Volta command, if one of the versions you set at the command line hasn't been seen before, Volta will automatically download it and make it available. No need to install it separately, just tell Volta which version to use and it will make it happen!

Though most of the time Volta's automatic version detection means you don't have to worry about which version of Node or npm is needed, sometimes you need to take over and have full control. In those situations, `volta run` is a powerful tool that lets you tell Volta directly which versions to use for a one-off command.
