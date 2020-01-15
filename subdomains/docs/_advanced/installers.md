---
title: Installers
---

# Installers

Details about how the installers work and how to create your own custom installer / distribution for managed installs.

## Current Installers

As of Volta 0.7.0, all of the official installers work in the same way:

1. Unpack the Volta binaries
2. Call `volta setup` with the `volta` binary that was unpacked (see [volta setup](/reference/setup) for more information)

### Windows Installer

The Windows installer will unpack all of the binaries into `Program Files\Volta` and add that folder to the System `Path` environment variable. It will also create the shims for the following tools in that directory:

* `node`
* `npm`
* `npx`
* `yarn`

### Unix Installer

The unix installer will unpack all of the binaries into `~/.volta/bin`, so they are installed only for the specific user.

## Skipping Volta Setup

If you wish to run the installer but do not want your profile scripts modified by `volta setup`, you can pass the `--skip-setup` option to the installer:

```bash
curl https://get.volta.sh | bash -s -- --skip-setup
```

{% include note.html content="We don't currently support skipping <code>volta setup</code> on Windows." %}

## Installing Old Versions

The default installer script provided by [get.volta.sh](https://get.volta.sh) only supports installing Volta 0.7.0 and above. If you wish to install an older version, you can install it using the following script (on Unix, replacing `0.6.8` with the version you want to install):

```
curl https://raw.githubusercontent.com/volta-cli/volta/e0290c2d7b0e80bf64e7c5d403789bc51678d16c/dev/unix/volta-install.sh | bash -s -- --version 0.6.8
```

For Windows, you can download and install the Installer `.msi` file for the specific version that you want to install.

{% include note.html content="Volta does not support downgrading, so in order to downgrade you will need to completely uninstall Volta and then install the lower version." %}

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
