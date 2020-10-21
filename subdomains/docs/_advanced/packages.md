---
title: Package Binaries
---

# Package Binaries

Details about the process of installing package binaries.

## Customizing Download Locations

Internally, `volta install <tool>` uses npm-style resolution to determine which versions are available and the download location for package binaries. Accordingly, to redirect and use an internal repository (i.e. to install an internal tool from a private repo), you can create a `.npmrc` file in your home directory. Options specified there will be honored when resolving and downloading a tool, as well as when resolving the dependencies of a given tool.

## Pinned Node Version

As described in [Understanding Volta](/guide/understanding#installing-package-binaries), Volta will pin a version of Node when a tool is installed, so that the tool can continue to be used, even if the default Node version changes. The process used to determine which version should be pinned is as follows:

### Prior to Volta 0.6.8

* If the package has `engines` specified in `package.json`, use the latest version of Node that meets the requirements in `engines`
* Otherwise, use the most recent version of Node

### Volta 0.6.8 through Volta 0.8.7

* If the package has `engines` specified in `package.json`, use the latest LTS version of Node that meets the requirements
* If no LTS versions meet the requirements then use the latest overall version that satisfies `engines`
* If `engines` isn't available, use the most recent LTS version of Node

### Volta 0.9.0 and beyond

Starting with Volta 0.9.0, Volta will pin a package to your current default Node version (at the time the tool was installed). You can change that version by changing your default, or by running the install with `volta run`:

```sh
volta run --node 15 npm i -g ember-cli
```
