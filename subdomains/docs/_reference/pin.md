---
title: volta pin
---

# `volta pin`

The `volta pin` command will update a project's `package.json` file to use the selected version of a tool.

{% include note.html content="<code>volta pin</code> only works with Node & Yarn. For dependencies, you should use <code>npm install</code> or <code>yarn add</code> to update the selected versions." %}

The command has the following syntax:

```
Pins your project's runtime or package manager

USAGE:
    volta pin [FLAGS] <tool[@version]>...

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information

ARGS:
    <tool[@version]>...    Tools to pin, like `node@lts` or `yarn@^1.14`.
```
