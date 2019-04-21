---
layout: post
title:  "State of the Notion"
date:   2018-08-20 10:32:05 -0700
categories: update
author: Dave Herman
---
_Notion is a **JavaScript toolchain manager**, making sure you always get the right version of Node, package managers like npm and Yarn, and JS command-line tools. Best of all, Notion makes tool requirements **declarative and reproducible** by using_ `package.json` _to remember and launch the right versions of a project’s required tools, so developers and users always see their projects build and run in a consistent environment._

# Minimum viable status update

If you’re reading this, it’s probably because one of our contributors reached out to you for early feedback. (Thank you!) Either that, or word spread faster than we expected… 😝

<!--more-->

To get started using Notion, you can install the current snapshot with:

```shell
$ curl -sSLf https://get.notionjs.com | bash
```

Then when you open a new terminal, you should be able to run Notion---you can explore its usage by typing `notion help`.

So here’s where we are so far: we’ve reached a first milestone that hits enough significant use cases to be able to start dogfooding. It’s currently working on Linux and Mac (bash only), but we’ve got the structure in place to start adding support for other shells as well as Windows.

We’re still a ways off from a full release, but this first release demonstrates a few of the things we think are going to make Notion powerful: in particular, a new approach to collaborating on Node projects.

# Projects

The goal of Notion is to enable collaborators on a project to always work with the same version of Node. You can select the Node version for a project with `notion pin`:

```shell
$ cd ~/projects/my-app
$ notion pin node 10.7
```

This command resolves the Node version, fetches the installer, and pins your project to that version by adding a `"toolchain"` key to your `package.json`:

```json
"toolchain": {
    "node": "10.7.0"
}
```

You can think of this as a declarative way of documenting the version of the Node platform that the project is intended to build and run on.

Now here’s the cool part: whenever you’re in a directory inside your project, Notion’s shims to Node executables (like `node` and `npm`) *automatically* switch to the right versions. For example, if `app1` is pinned to Node 10.7.0, you’d see this when entering the project directory:

```shell
$ cd ~/projects/app1
$ node --version
v10.7.0
```

And then if `app2` is pinned to, say, Node 8.9.4, you’d see this instead:

```shell
$ cd ~/projects/app2
$ node --version
v8.9.4
```

In other words, **you never have to think about switching Node setups** as you navigate between projects. And all your project’s collaborators can use Notion to be sure they’re always working with the right toolchain for the project. Once you check in the changes to `package.json`, your team will automatically get the right versions of all the relevant tools.

# User toolchains

(First, a caveat: this part of Notion’s implementation is still pretty basic, and some of the workflows are going to change and improve before Notion 1.0 ships.)

The command for installing user tools is `notion install`. For example, you can choose your version of Node for personal use, which is what you get when you run `node` anywhere *other* than in a pinned project:

```shell
$ notion install node 10
$ cd ~/Desktop # or anywhere that isn't a pinned project
$ node --version
v10.7.0
```

There will eventually be a similar workflow for installing package binaries, and automatic creation of shims in your `PATH` for using them.

# Where can we go from here?

Here's a few of the topics we plan to tackle eventually, in no particular order:

- **Windows support, and other shells:** We will ensure that Notion 1.0 ships on Windows as a fully supported platform! We also intend to support popular Unix shells like zsh, fish, and any others that contributors might want to implement.
- **Plugins:** We plan to make Notion extensible, so e.g. your company’s IT department can configure Notion to provision tools from a private intranet. We’re also working on enabling companies to collect metrics about usage patterns, outages, etc. (These are all disabled by default for privacy.)
- **CI and offline support:** Continuous integration environments bring some extra requirements, like the ability to choose from a matrix of toolchain options, and the ability to split apart the fetching of remote assets and using those assets (often in a network-disabled sandbox) into separate phases.
