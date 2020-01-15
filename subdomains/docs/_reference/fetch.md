---
title: volta fetch
---

# `volta fetch`

The `volta fetch` command will allow you to fetch a tool into the local cache, without setting it as a default or making it available, for future offline use. It has the following synax:

```
Fetches a tool to the local machine

USAGE:
    volta fetch [FLAGS] <tool[@version]>...

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -h, --help       Prints help information

ARGS:
    <tool[@version]>...    Tools to fetch, like `node`, `yarn@latest` or `your-package@^14.4.3`.
```
