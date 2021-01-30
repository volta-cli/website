---
title: volta install
---

# `volta install`

The `volta install` command will set your default version of a tool. It will also fetch that tool if it isn't already cached locally. It has the following syntax:

```
Installs a tool in your toolchain

USAGE:
    volta install [FLAGS] <tool[@version]>...

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information

ARGS:
    <tool[@version]>...    Tools to install, like `node`, `yarn@latest` or `your-package@^14.4.3`.
```
