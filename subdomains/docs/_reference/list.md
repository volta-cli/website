---
title: volta list
---

# `volta list`

The `volta list` command allows you to inspect your installed Node runtimes, package managers, and packages with binaries.

{% include warn.html content="The <code>--format=human</code> syntax is not yet supported!" %}

The command has the following syntax:

```
Displays the current toolchain

USAGE:
    volta list [FLAGS] [OPTIONS] [tool]

FLAGS:
    -c, --current    
            Show the currently-active tool(s).
            
            Equivalent to `volta list` when not specifying a specific tool.
    -d, --default    
            Show your default tool(s).

        --verbose    
            Enables verbose diagnostics

        --quiet      
            Prevents unnecessary output

    -h, --help       
            Prints help information


OPTIONS:
        --format <format>    
            Specify the output format.
            
            Defaults to `human` for TTYs, `plain` otherwise. [possible values: human, plain]

ARGS:
    <tool>    
            The tool to lookup: `all`, `node`, `yarn`, or the name of a package or binary.
```

For details on the design, see [RFC #34](https://github.com/volta-cli/rfcs/pull/34).