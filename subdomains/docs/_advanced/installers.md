---
title: Installers
---

# Installers

Details about how the installers work and how to create your own custom installer / distribution for managed installs.

## Current Installers

As of Volta 0.7.0, all of the official installers work in the same way:

1. Unpack the Volta binaries
2. Call `volta setup` with the `volta` binaries that was unpacked
    * `volta setup` Modifies the user's PATH / Profile to ensure that the shim directory is accessible.

### Unix Installer

The unix installer will unpack all of the binaries into `~/.volta/bin`, so they are installed only for the specific user. `volta setup` will then search for profile scripts using the following list:

* `~/.profile`
* `~/.bash_profile`
* `~/.bashrc`
* `~/.zshrc`
* `~/.config/fish/config.fish`
* The value of the `PROFILE` environment variable

For each of these files that exist, `volta setup` will modify it to include lines that define `VOLTA_HOME` and add `$VOLTA_HOME/bin` to the `PATH` environment variable.

### Windows Installer

The Windows installer will unpack all of the binaries into `Program Files\Volta` and add that folder to the System `Path` environment variable. It will also create the shims for the following tools in that directory:

* `node`
* `npm`
* `npx`
* `yarn`

Finally, the installer will call `volta setup`, which will modify the User's `Path` environment variable to include the shim directory (`%LOCALAPPDATA%\Volta\bin`).

## Custom Installers

To create a custom installer / distribution method, there are two mandatory steps and one optional step:

### Distribute the Binaries

The binaries themselves will need to be delivered to the target machine. The list of necessary binaries will be listed in `volta.manifest` in the release files. As of Volta 0.7.0, the required files are:

* `volta[.exe]`
* `volta-shim[.exe]`
* `volta-migrate[.exe]`

These binaries all need to be distributed in the same directory as each other and that directory should be on the `PATH` so that calls to `volta` commands will work correctly.

### Shim Directory

The Volta shim directory needs to be added to the `PATH` as well, so that the shims will work as expected as well. The shim directory is at `$VOLTA_HOME/bin` (`%VOLTA_HOME%\bin` on Windows), where `VOLTA_HOME` is defaulted to:

* `~/.volta` on Unix
* `%LOCALAPPDATA%\Volta` on Windows

Updating the PATH can be managed manually, if desired, or you can call `volta setup` (as the official installers do, described above).

### Custom Volta Home (Optional)

If you wish to use a different directory for the Volta data than the default `VOLTA_HOME` listed in the previous section, you need to set the environment variable `VOLTA_HOME` to that directory. If that is set, then `volta setup` will still work correctly for a custom data directory.

## Installing Old Versions

The default installer script provided by [get.volta.sh](https://get.volta.sh) only supports installing Volta 0.7.0 and above. If you wish to install an older version, you can install it using the following script (on Unix, replacing `0.6.8` with the version you want to install):

```
curl https://raw.githubusercontent.com/volta-cli/volta/e0290c2d7b0e80bf64e7c5d403789bc51678d16c/dev/unix/volta-install.sh | bash -s -- --version 0.6.8
```

For Windows, you can download and install the Installer `.msi` file for the specific version that you want to install.

{% include note.html content="Volta does not support downgrading, so in order to downgrade you will need to completely uninstall Volta and then install the lower version" %}
