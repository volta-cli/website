---
title: pnpm Support
---

# pnpm Support

Support for `pnpm` is currently experimental. To enable it, ensure that the environment variable `VOLTA_FEATURE_PNPM` is set to `1`. On Windows, this can be added to your user or system environment variables in the System Settings. On Linux/Mac, you can set the value inside of your profile script (e.g. `.bash_profile`, `.zshrc`, or similar).

As this support is experimental, there may be some outstanding issues. Some of the known limitations are listed below, however if you run into anything while using `pnpm` with Volta that doesn't work the way you would expect, please [open an issue on our GitHub](https://github.com/volta-cli/volta/issues/new).

## Known Limitations

### Global Installations

Currently, global installations (e.g. `pnpm install -g`) are not supported and will result in an error.

### Migrating

There is no automatic migration at the moment, so if you previously had `pnpm` installed as a Volta global, you will need to manually re-install it by calling `volta install pnpm`.
