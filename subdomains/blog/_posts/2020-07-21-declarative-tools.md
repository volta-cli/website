---
layout: post
title:  "Bringing the Declarative Experience to Your Tools"
date:   2020-07-17 08:00:00 -0700
categories: [ux, delight]
author: Chuck Pierce
excerpt_separator: <!--more-->
---

Declarative UI—powered by packages like React, Vue, or Angular—has completely taken over the world. These techniques let you focus on describing how an app should look and feel, without having to micromanage making each change happen imperatively. Despite that, managing the tools you need for development is often stuck in an imperative world. In the same way that modern frameworks made it easier to build declarative UIs, **Volta brings the power of the declarative paradigm to your tools!**
<!--more-->

Managing your development tools—Node, package managers, and others—is almost always done imperatively: You have to tell the computer to use specific versions and when to switch versions. This makes things complicated and error-prone, especially when you are working in multiple projects that have different tool requirements.

- Every time you switch to a new project, you have to remember which tools and versions are needed for the new project and manually switch.
- For teams, when a decision is made to upgrade to a new version of Node, the entire team needs to be notified.
- Forgetting to switch can lead to confusing bugs that are difficult for other contributors to reproduce.

With this model, every time you run a tool, you need to be aware of the context in which you are working to make sure you are running the correct version. By contrast, Volta takes care of picking the correct version of your tools for every context, leaving you free to focus on your work.

- Volta delegates to the correct local versions of global packages when you are working in a project (see [Global Installs Done Right]() for more).
- Node and package manager versions are specified directly in `package.json` and Volta will always use those versions.
- The shims that power Volta re-evaluate the context on every execution, so whenever those values change, the new versions are immediately reflect in your terminal.
- If a team decides to update the Node version, they only need to change the value in `package.json` and every member will immediately start using the new version.
- Volta automatically downloads new versions of tools that it hasn't seen before, so you don't even need to track whether you have installed it or not.

Despite all this context detection, Volta is built as a native binary and committed to speed, so the overhead is nearly imperceptible.

Volta's declarative model frees you from having to constantly track which context you are in, letting you focus on writing great software. You no longer need to think, "Did I remember to switch to the correct npm version?," just run `npm` and you get the right version!
