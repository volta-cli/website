---
title: volta completions
---

# `volta completions`

The `volta completions` command will generate command completion information for your shell. It has the following syntax:

```
Generates Volta completions

By default, completions will be generated for the value of your current shell,
shell, i.e. the value of `SHELL`. If you set the `<shell>` option, completions
will be generated for that shell instead.

If you specify a directory, the completions will be written to a file there;
otherwise, they will be written to `stdout`.


USAGE:
    volta completions [FLAGS] [OPTIONS] <shell>

FLAGS:
    -f, --force
            Write over an existing file, if any.

        --verbose
            Enables verbose diagnostics

        --quiet
            Prevents unnecessary output

    -h, --help
            Prints help information


OPTIONS:
    -o, --output <out_file>
            File to write generated completions to


ARGS:
    <shell>
            Shell to generate completions for [possible values: zsh, bash, fish, powershell,
            elvish]
```
