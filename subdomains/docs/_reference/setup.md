---
title: volta setup
---

# `volta setup`

The `volta setup` command will enable Volta by modifying the `PATH` for the current user (in a platform-dependent way) to include the Volta shim directory.

## Unix

On Unix, `volta setup` will search for profile scripts using the following list:

* `~/.profile`
* `~/.bash_profile`
* `~/.bashrc`
* `~/.zshrc`
* `~/.config/fish/config.fish`
* The value of the `PROFILE` environment variable

For each of these files that exist, `volta setup` will modify it to include lines that define `VOLTA_HOME` and add `$VOLTA_HOME/bin` to the `PATH` environment variable. If the configuration file for your current shell (detected using the `$SHELL` environment variable) doesn't exist, it will be created with the appropriate contents, if possible.

## Windows

On Windows, `volta setup` will modify the User `Path` environment variable to include the shim directory (`%LOCALAPPDATA%\Volta\bin`).

## Syntax

The command has the following syntax:

```
Enables Volta for the current user

USAGE:
    volta setup [FLAGS]

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information
```

