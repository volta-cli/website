---
title: Uninstalling Volta
---

# Uninstalling Volta

If Volta isn't meeting your needs and you'd like to uninstall it, we're sorry to see you go! We would greatly appreciate any feedback you may have about what was missing from your experience so that we can improve Volta in the future. We can be reached on [Twitter](https://twitter.com/usevolta), [Discord](https://discord.gg/hgPTz9A), or [GitHub](https://github.com/volta-cli/volta).

## Unix Uninstallation

There are two steps needed to completely uninstall Volta on Unix systems:

- Remove the entire `~/.volta` directory

```sh
rm -rf ~/.volta
```

- Edit your shell profile scripts to remove the two lines that mention Volta. The profile scripts Volta locates by default are:
    1. `.bashrc`
    2. `.bash_profile`
    3. `.zshrc`
    4. `.zshenv`
    5. `config.fish`
    6. `.profile`

{% include note.html content="You may need to open a new terminal after making this change, as many shells cache the location of recent commands" %}

## Windows Uninstallation

On Windows, Volta can be uninstalled by selecting it in the list at [Start > Settings > Apps](ms-settings:appsfeatures) and choosing _Uninstall_.
