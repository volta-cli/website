---
layout: post
title:  "Announcing Volta 1.0.0"
date:   2020-12-16 08:00:00 -0700
categories: update
author: Chuck Pierce
excerpt_separator: <!--more-->
---

The Volta team is thrilled to announce that Volta 1.0.0 is now available! **Volta is a fast, reliable manager for JavaScript tools that takes the hassle out of switching versions**, allowing you to focus on your work, not your tools.
<!--more-->

# What does 1.0.0 mean for Volta?

The 1.0.0 release of Volta means more than, "we implemented some high-impact functionality and finally closed some long-standing issues." From the beginning, Volta was built to empower engineers and engineering teams to build amazing JS applications without having to worry about their environment or tooling. For individual engineers, Volta unobtrusively makes sure your tooling is aligned with the needs of your project, allowing you to stay focused on your work. For engineering teams, Volta allows you to manage your infrastructure decision-making centrally without slowing down individual team members. When the team decides to change versions of Node, for example, that doesn't require explicit effort on the part of each developer. With version 1.0.0, we believe Volta delivers on the promise of making tool management disappear.

# What's new?

## Support for `npm link`

With the [release of Volta 0.9.0](/2020/10/22/announcing-volta-090/), we added support for installing tools directly with your package manager while still taking advantage of the benefits that Volta provides. We have extended that support to include linking your local packages with `npm link`, even across different npm versions. Additionally, if you try to link two projects that are using different Node versions, Volta will alert you that there might be incompatibilities that cause unexpected behavior.

## Support for upgrading global packages

You can now upgrade your installed global packages directly with your package manager, using `npm update -g` or `yarn global upgrade`. Volta will make sure that the package manager can locate all of the packages so that they can be upgraded to their latest versions.

# The future of Volta

While we believe that Volta 1.0.0 achieves the goals for the project, that doesn't mean that we are done! Active development will continue on Volta: adding new features, support for new tools, and fixing any bugs that crop up. A few items on our near-term roadmap include:

- Native builds for Apple M1 devices
- Support for using `pnpm` as your package manager
- Improvements to `volta list`, making it easier to visualize the state of your tools

# Try it out!

To try Volta for the first time or upgrade your existing installation, follow the instructions on our [Getting Started](https://docs.volta.sh/guide/getting-started) page!

Finally, this release is the culmination of more than two years of work from a whole host of contributors. It wouldn't have been possible without all of your ideas, feedback, bug reports, code, and encouragement. We would like to extend our heartfelt thanks to everyone in the community for your support.
