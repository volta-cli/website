---
title: Getting Started
---

# Getting Started

## Unix Installation

On most Unix systems, you can install Volta with a single command:

```bash
curl -sSLf https://get.volta.sh | bash
```

For [bash](https://www.gnu.org/software/bash/), [zsh](https://www.zsh.org/), and [fish](http://fishshell.com/), this installer will automatically update your console startup script. To configure other shells to use Volta, edit your console startup scripts to:
- Set the `VOLTA_HOME` variable to `~/.volta`
- Add `$VOLTA_HOME/bin` to the beginning of your `PATH` variable

## Windows Installation

For Windows, [download and run the Windows installer](https://github.com/volta-cli/volta/releases/download/v{{ site.data.latest-version }}/volta-{{ site.data.latest-version }}-windows-x86_64.msi) and follow the instructions.
