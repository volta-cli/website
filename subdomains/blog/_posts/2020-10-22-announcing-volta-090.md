---
layout: post
title:  "Announcing Volta 0.9.0"
date:   2020-10-22 08:00:00 -0700
categories: update
author: Chuck Pierce
excerpt_separator: <!--more-->
---

The Volta team is happy to announce that Volta 0.9.0 is now available! This release includes a significant update to how global packages are handled that we're excited to share!
<!--more-->

# What's New?

## Install Packages with Your Package Manager

Installing global packages with Volta has [many benefits over traditional globals](/2019/06/18/global-installs-done-right/). Until now, to take advantage of those benefits, you needed to install the packages using `volta install` instead of your package manager. With Volta 0.9.0, you can now install packages directly using your package manager and still get the upside that Volta provides:

```bash
npm install --global typescript
yarn global add typescript
```

Volta will ensure that a shim is set up and pin the Node version so that the package continues to work, even if you change your default Node in the future. Similarly, you can use your package manager to uninstall a global package and Volta will make sure everything is cleaned up correctly:

```bash
npm uninstall --global yo
yarn global remove yo
```

## Direct Control Over Pinned Node Version

When pinning the Node version for an installed package, Volta will now use your current default Node version, so there should be no surprises about which Node is used after installing a package. If you want to adjust that to install a package with a different version, you can use `volta run` to modify the command:

```bash
volta run --node 15 npm install --global ts-node
```

## Better Interop Between Packages

Previously, a consequence of Volta's isolation for packages was that packages weren't able to call or interact with one another. With Volta 0.9.0, we have resolved those issues so that global binaries can now correctly call other global binaries or `require` global libraries.

## Removal of Package Hooks

Now that the installation is handled by the package managers, Volta no longer supports `"package"` hooks in the `hooks.json` file. Instead, if you need to modify the download location for packages, use the standard configuration files for your package manager (i.e. `.npmrc` and/or `.yarnrc`).

## Miscellaneous Improvements

In addition to the global package improvements, Volta 0.9.0 also includes:

- Support for proxying network requests using the `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables.
- Further reductions in unnecessary filesystem operations to improve startup time.

# Try it out!

To try Volta for the first time or upgrade your existing installation, follow the instructions on our [Getting Started](https://docs.volta.sh/guide/getting-started) page!

Finally, a huge amount of work went into making this release possible, and we would like to thank everyone who contributed ideas, feedback, bug reports, code, and moral support to the project.
