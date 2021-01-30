---
title: volta which
---

# `volta which`

The `volta which` command will unwrap Volta's shims and locate the actual binary that will be launched by Volta. It has the following syntax:

```
Locates the actual binary that will be called by Volta

USAGE:
    volta which [FLAGS] <binary>

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information

ARGS:
    <binary>    The binary to find, e.g. `node` or `npm`
```
