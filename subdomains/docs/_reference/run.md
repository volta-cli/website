---
title: volta run
---

# `volta run`

The `volta run` command will run the command that you give it, using versions of tools that are specified at the command line.

Any tool that doesn't have a version specified directly will have its version determined by Volta's usual context detection, using the pinned versions in a project or the default versions. 

The `--no-yarn` flag allows you to override that determination and force that no `yarn` is included in the environment when the command is run. Similarly, the `--bundled-npm` flag allows you to force `npm` to use the version bundled with Node and ignore any custom version.

{% include note.html content="The version settings must come <em>before</em> the command you wish to run. Anything after the command will be treated as arguments and will not be read by Volta" %}

Additionally, you can specify custom environment variables to pass to the command, using the `--env NAME=value` option.

The command has the following syntax:

```
Run a command with custom Node, npm, and/or Yarn versions

USAGE:
    volta run [FLAGS] [OPTIONS] <command> [--] [args]...

FLAGS:
        --bundled-npm    Forces npm to be the version bundled with Node
        --no-yarn        Disables Yarn
        --verbose        Enables verbose diagnostics
        --quiet          Prevents unnecessary output
    -h, --help           Prints help information

OPTIONS:
        --node <version>         Set the custom Node version
        --npm <version>          Set the custom npm version
        --yarn <version>         Set the custom Yarn version
        --env <NAME=value>...    Set an environment variable (can be used multiple times)

ARGS:
    <command>    The command to run
    <args>...    Arguments to pass to the command
```
