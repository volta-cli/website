---
layout: post
title:  "State of the Notion"
date:   2019-02-05 10:07:41 -0700
categories: update
author: Dave Herman
---
_Notion is a **JavaScript toolchain manager**, making sure you always get the right version of Node, package managers like npm and Yarn, and JS command-line tools. Best of all, Notion makes tool requirements **declarative and reproducible** by using_ `package.json` _to remember and launch the right versions of a project’s required tools, so developers and users always see their projects build and run in a consistent environment._

# What's new?

Lots of good stuff is happening—I can feel the momentum picking up!

- Michael Stewart is making great progress on [`notion install <package>`](https://github.com/notion-cli/notion/issues/148)
- Chuck Pierce is getting us started on [hooks](https://github.com/notion-cli/notion/pull/241) and [error message quality](https://github.com/notion-cli/notion/pull/249)
- Chris Krycho and I have been working on the [web site](https://www.notionjs.com/)

<!--more-->

# What's next?

Some of the big things I think we need to tackle next are:

- Get the work I mentioned done, of course!
- Take another pass at the Unix installation scripts and make them more robust for all shells.
- Get the Windows installer working.
- Make the shims more robust (signal handling, shim name detection logic).
- Easier self-update workflow.
- Get lots of user input and address whatever issues come up!
