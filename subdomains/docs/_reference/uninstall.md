---
title: volta uninstall
---

# `volta uninstall`

The `volta uninstall` command allows you to remove any global package that has been installed with `volta install`.

{% include note.html content="As of Volta 0.9.0, you can also uninstall a package using your package manager with <code>npm uninstall --global</code> or <code>yarn global remove</code>" %}

The command has the following synax:

```
Uninstalls a tool from your toolchain

USAGE:
    volta uninstall [FLAGS] <tool>

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information

ARGS:
    <tool>    The tool to uninstall, e.g. `node`, `npm`, `yarn`, or <package>
```
