---
title: Contributing Guide
---

# Contributing Guide

## Community

We use [Discord](https://discordapp.com/) for community discussion. You can use this [permanent invite](https://discord.gg/hgPTz9A) to join our Discord server!

We welcome [issues](https://github.com/volta-cli/volta/issues) and [pull requests](https://github.com/volta-cli/volta/pulls) on GitHub!

For significant changes or enhancements to the design or architecture of Volta, we use a [Request For Comments (RFC)](https://github.com/volta-cli/rfcs) process. Everyone, including the core team, follows this process.

We encourage you to share your ideas and feedback with us!

## Code of Conduct

Contribution to Volta is organized under the terms of the [Contributor Covenant Code of Conduct](https://github.com/volta-cli/volta/blob/master/CODE_OF_CONDUCT.md). The lead maintainer of Volta, [Dave Herman](https://twitter.com/littlecalculist), personally promises to work actively to uphold that code of conduct. We aim to foster a community that is welcoming, inclusive, empathetic, and kind. If you share those goals and want to have a ton of fun building cool JavaScript tools and playing with Rust, we invite you to join us!

## Development

### Rust

Volta is intended to compile with [Rust 1.33](https://www.rust-lang.org/) or newer.

### Building

To compile Volta from source, use [Cargo](https://doc.rust-lang.org/cargo/index.html):

```sh
cargo build
```

### Installing Local Builds

To install a locally built copy of Volta, you can use the helper scripts provided in the `dev` directory:

```sh
./dev/unix/volta-install.sh --dev
```

Or to build and install release binaries:

```sh
./dev/unix/volta-install.sh --release
```

### Formatting

We use Rust's official [rustfmt](https://github.com/rust-lang/rustfmt) tool in our CI to ensure consistent style in the Volta codebase.

To ensure your code is formatted correctly, make sure you have installed `rustfmt`:

```sh
rustup component add rustfmt
```

and run the following before submitting your PR:

```sh
cargo fmt --all
```

### Visual Studio Code

If you use Visual Studio Code with the official Rust plugin, you can configure your editor to [automatically format on save](https://github.com/rust-lang/rls-vscode#format-on-save).

## Debugging

When developing, we suggest you set the `VOLTA_LOGLEVEL` environment variable to `debug` and the `RUST_BACKTRACE` environment variable to `full`. This will provide extra diagnostic information to stderr on crashes. We have an [issue on file](https://github.com/volta-cli/volta/issues/215) to improve the quality of diagnostics.

## Tests

To run the tests in this repo, run the following:

```sh
cargo test --all --features mock-network
```

## License

Volta is licensed under a permissive [BSD 2-clause license](https://github.com/volta-cli/volta/blob/master/LICENSE).
