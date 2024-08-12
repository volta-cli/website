---
title: Getting Started
---

# Getting Started

## Install Volta

### Unix Installation

On most Unix systems including macOS, you can install Volta with a single command:

```bash
curl https://get.volta.sh | bash
```

For [bash](https://www.gnu.org/software/bash/), [zsh](https://www.zsh.org/), and [fish](http://fishshell.com/), this installer will automatically update your console startup script. If you wish to prevent modifications to your console startup script, see [Skipping Volta Setup](/advanced/installers#skipping-volta-setup). To manually configure your shell to use Volta, edit your console startup scripts to:
- Set the `VOLTA_HOME` variable to `$HOME/.volta`
- Add `$VOLTA_HOME/bin` to the beginning of your `PATH` variable

### Windows Installation

For Windows, the recommended method of installing Volta is using [winget](https://github.com/microsoft/winget-cli):

```bash
winget install Volta.Volta
```

If you prefer, you can [download the installer directly](https://github.com/volta-cli/volta/releases/v{{ site.data.latest-version }}) and run it manually to install Volta.

#### Windows Subsystem for Linux

If you are using Volta within the Windows Subsystem for Linux, follow the Unix installation guide above.


## Select a default Node version

This is the version that Volta will use everywhere outside of projects that have a pinned version.

To select a specific version of Node, run:

```bash
volta install node@{{ site.data.versions.node.stable.full }}
```

Or to use the latest LTS version, run:

```bash
volta install node
```
