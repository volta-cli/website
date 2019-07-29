---
title: Understanding Volta
---

# Understanding Volta

Volta's job is to manage your JavaScript command-line tools, such as `node`, `npm`, `yarn`, or executables shipped as part of JavaScript packages.

Similar to package managers, Volta keeps track of which project (if any) you're working on based on your current directory. The tools in your Volta toolchain automatically detect when you're in a project that's using a particular version of the tools, and take care of routing to the right version of the tools for you.

## Managing your toolchain

You control the tools managed by your Volta toolchain with two commands: `volta install` and `volta uninstall`.

### Installing Node engines

When you install a tool to your toolchain, you always choose a _default version_ of that tool, which Volta will use unless you're working within a project directory that has configured Volta to use a different version.

For example, you can select your default version of `node` by installing a particular version:

```sh
volta install node@{{ site.data.versions.node.stable.full }}
```

You don't need to specify a precise version, in which case Volta will choose a suitable version to match your request:

```sh
volta install node@{{ site.data.versions.node.stable.major }}
```

You can also specify `latest`—or even leave off the version entirely, and Volta will choose the latest available version:

```sh
volta install node
```

Once you've run one of these commands, the `node` executable provided by Volta in your `PATH` environment (or `Path` in Windows) will, by default, automatically run your chosen version of Node.

Similarly, you can choose versions of the npm and Yarn package managers with `volta install npm` and `volta install yarn`, respectively. These tools will run using the default version of Node you selected.

### Installing package binaries

With `volta install`, you can also install command-line tools that are distributed via npm packages. For example, the [`vuepress`](https://www.npmjs.com/package/vuepress) package includes an executable of the same name:

```sh
volta install vuepress
```

Once you've installed the package to your toolchain, you can run it by name at your console:

```sh
echo '# Hello world' > README.md
vuepress dev
```

When you install a package to your toolchain, Volta selects a Node engine for the tool based on the [`"engines"`](https://docs.npmjs.com/files/package.json#engines) field in that package's `package.json` manifest and _pins_ the tool to that engine. (If the package doesn't specify this field, Volta uses your current default Node engine instead.) Volta won't change the tool's pinned engine unless you update the tool, no matter what. This way, you can be confident that your installed tools don't change behind your back.

## Managing your project

Volta allows a team or community of collaborators to standardize on the development tools they use for their project.

### Pinning Node engines

The `volta pin` command allows you to choose your Node engine and package manager versions for a project:

```sh
volta pin node@{{ site.data.versions.node.recent.partial }}
volta pin yarn@{{ site.data.versions.yarn.recent.partial }}
```

Volta stores this in your `package.json` so you can commit your choice of tools to version control:

```javascript
"volta": {
  "node": "{{ site.data.versions.node.recent.full }}",
  "yarn": "{{ site.data.versions.yarn.recent.full }}"
}
```

This way, everyone who uses Volta to work on the project automatically gets the same version you selected.

```sh
node --version # {{ site.data.versions.node.recent.full }}
yarn --version # {{ site.data.versions.yarn.recent.full }}
```

### Using project tools

The `node` and package manager executables aren't the only smart tools in your toolchain: the package binaries in your toolchain are also aware of your current directory, and respect the configuration of the project you're in.

For example, you can install the TypeScript compiler through Volta:

```sh
volta install typescript
```

This will add the `tsc` executable to your toolchain.

{% include note.html content="Installing package binaries requires Node to be available on your system" %}

Depending on the project you're in, this executable will switch to the project's chosen version of TypeScript:

```sh
cd /path/to/project-using-typescript-{{ site.data.versions.typescript.recent.full }}
tsc --version # {{ site.data.versions.typescript.recent.full }}

cd /path/to/project-using-typescript-{{ site.data.versions.typescript.stable.full }}
tsc --version # {{ site.data.versions.typescript.stable.full }}
```

### Safety _and_ convenience

Because Volta's toolchain always keeps track of where you are, it makes sure the tools you use always respect the settings of the project you're working on. This means you don't have to worry about changing the state of your installed software when switching between projects.

What's more, Volta covers its tracks whenever it runs a tool, making sure your npm or Yarn scripts never see what's in your toolchain.

These two features combined mean that Volta **solves the problem of global packages**. In other words, `volta install` gives you the _convenience_ of global package installations, but without the _danger_.

For example, you can safely install TypeScript with `volta install typescript`—and enjoy the convenience of being able to call `tsc` directly from your console—without worrying that your project's package scripts might accidentally depend on the global state of your machine.

Enjoy!
