---
title: Understanding Jetson
---

# Understanding Jetson

Jetson's job is to manage your JavaScript command-line tools, such as `node`, `npm`, `yarn`, or executables shipped as part of JavaScript packages.

Similar to package managers, Jetson keeps track of which project (if any) you're working on based on your current directory. The tools in your Jetson toolchain automatically detect when you're in a project that's using a particular version of the tools, and take care of routing to the right version of the tools for you.

## Managing your toolchain

You control the tools managed by your Jetson toolchain with two commands: `jetson install` and `jetson uninstall`.

### Installing Node engines

When you install a tool to your toolchain, you always choose a _default version_ of that tool, which Jetson will use unless you're working within a project directory that has configured Jetson to use a different version.

For example, you can select your default version of `node` by installing a particular version:

```sh
jetson install node 11.7.0
```

You don't need to specify a precise version, in which case Jetson will choose a suitable version to match your request:

```sh
jetson install node 11
```

You can also specify `latest`—or even leave off the version entirely, and Jetson will choose the latest available version:

```sh
jetson install node
```

Once you've run one of these commands, the `node` executable provided by Jetson in your `PATH` environment (or `Path` in Windows) will, by default, automatically run your chosen version of Node.

Similarly, you can choose versions of the npm and Yarn package managers with `jetson install npm` and `jetson install yarn`, respectively. These tools will run using the default version of Node you selected.

### Installing package binaries

{% include warn.html content="This feature is in development." %}

With `jetson install`, you can also install command-line tools that are distributed via npm packages. For example, the [`vuepress`](https://www.npmjs.com/package/vuepress) package includes an executable of the same name:

```sh
jetson install vuepress
```

Once you've installed the package to your toolchain, you can run it by name at your console:

```sh
echo '# Hello world' > README.md
vuepress dev
```

When you install a package to your toolchain, Jetson selects a Node engine for the tool based on the [`"engines"`](https://docs.npmjs.com/files/package.json#engines) field in that package's `package.json` manifest and _pins_ the tool to that engine. (If the package doesn't specify this field, Jetson uses your current default Node engine instead.) Jetson won't change the tool's pinned engine unless you update the tool, no matter what. This way, you can be confident that your installed tools don't change behind your back.

## Managing your project

Jetson allows a team or community of collaborators to standardize on the development tools they use for their project.

### Pinning Node engines

The `jetson pin` command allows you to choose your Node engine and package manager versions for a project:

```sh
jetson pin node 10.3
jetson pin yarn 1.14
```

Jetson stores this in your `package.json` so you can commit your choice of tools to version control:

```javascript
"toolchain": {
  "node": "10.3.0",
  "yarn": "1.14.0"
}
```

This way, everyone who uses Jetson to work on the project automatically gets the same version you selected.

```sh
node --version # 10.3.0
yarn --version # 1.14.0
```

### Using project tools

The `node` and package manager executables aren't the only smart tools in your toolchain: the package binaries in your toolchain are also aware of your current directory, and respect the configuration of the project you're in.

For example, you can install the TypeScript compiler through Jetson:

```sh
jetson install typescript
```

This will add the `tsc` executable to your toolchain, and depending on the project you're in, this executable will switch to the project's chosen version of TypeScript:

```sh
cd /path/to/project-using-typescript-2.9.2
tsc --version # 2.9.2

cd /path/to/project-using-typescript-3.3.1
tsc --version # 3.3.1
```

### Safety _and_ convenience

Because Jetson's toolchain always keeps track of where you are, it makes sure the tools you use always respect the settings of the project you're working on. This means you don't have to worry about changing the state of your installed software when switching between projects.

What's more, Jetson covers its tracks whenever it runs a tool, making sure your npm or Yarn scripts never see what's in your toolchain.

These two features combined mean that Jetson **solves the problem of global packages**. In other words, `jetson install` gives you the _convenience_ of global package installations, but without the _danger_.

For example, you can safely install TypeScript with `jetson install typescript`—and enjoy the convenience of being able to call `tsc` directly from your console—without worrying that your project's package scripts might accidentally depend on the global state of your machine.

Enjoy!
