---
title: Introduction
---

# Introduction

Welcome to Volta!

Volta is a hassle-free way to manage your JavaScript command-line tools.

## Features

- Speed ⚡
- Seamless, per-project version switching
- Cross-platform support, including Windows and all Unix shells
- Support for multiple package managers
- Stable tool installation—no reinstalling on every Node upgrade!
- Extensibility hooks for site-specific customization

{% include warn.html content="Volta is still in development, so we still expect some hiccups until it stabilizes. We welcome feedback and participation!" %}

## Why Volta?

Volta's job is to get out of your way.

With Volta, you can select a Node engine once and then stop worrying about it. You can switch between projects and stop having to manually switch between Nodes. You can install npm package binaries in your toolchain without having to periodically reinstall them or figure out why they've stopped working.

### Quickly set up and switch Node engines

Fetch and use a particular version of Node:
```sh
volta install node 11
```
You should notice right away how responsive the tool is. Your development time is precious! JavaScript developers deserve snappy tools. 🙂

### Reproducible environments for collaborators

Volta lets you choose your Node engine and package manager for a project once with one command:
```
volta pin node 10
```
Volta saves the exact version of the Node engine in your `package.json` so you can commit your selection to git. From that point on, every time you run Node inside your project directory, Volta automatically switches to that same version of Node you chose. Similarly, all your collaborators can do the same by installing Volta on their development machine.

### Install and forget

Volta also lets you install your favorite package binaries as command-line tools, without worrying about them interfering with your development projects. Even better, these tools get pinned to a particular Node engine at installation time and don't change unless you explicitly tell them to. This means that once a tool works, it keeps working.
```sh
volta install surge
surge -h
```

{% include warn.html content="Installing package binaries is still a work in progress." %}

## How does it work?

Volta does not use any fancy OS features or shell-specific hooks. It's built on the simple, proven approach of shims.

Whenever you install a tool with Volta, it adds a shim to your `PATH` that acts as an intelligent (and fast) router to the right version of the tool and runs it with the right Node engine.

Volta is [easy to install](./getting-started/), with no external dependencies, because it's built in [Rust](https://www.rust-lang.org/) as a single, fast native executable.
