---
layout: post
title:  "Volta's Helpful Error Messages"
date:   2020-03-30 08:00:00 -0700
categories: [errors, delight]
author: Chuck Pierce
excerpt_separator: <!--more-->
---

Nothing is quite so frustrating as a piece of technology giving you an error message that you don’t understand. We’ve all felt that surge of anger like we were a character in _Office Space_, “’PC Load Letter,’ what the $&@# does that mean?!” With Volta, we’re committed to having helpful errors. In fact, **if you ever find yourself frustrated or confused by an error message from Volta, we consider that a bug**, so please file an issue!
<!--more-->

Early on in the development of Volta, we revamped our error-handling code so that every error in the program is associated with a custom error message. These error messages provide context of what Volta was trying to do when the error occurred and they all provide a call-to-action for what you can do to solve the problem. For example, if you try to run `node` before installing a version of Node, you don’t see a generic `command not found` message, you see this:

<section style="text-align: center;">
  <img src="/assets/volta_helpful_error.png" alt="Error message when trying to run node without an installed version." /><br>
</section>

First, we let the user know what happened and why the command didn’t work. Next, we give advice on how to fix the problem. Finally, we provide an error log with more information in case the user needs to dig in deeper. All of our error messages are structured similarly: Context of what the problem is, call-to-action, and additional information.

We believe in putting effort into the error experience because we recognize that unexpected errors are when users are at their most frustrated. Something went wrong, you didn’t expect it, and now you have to figure out what to do next. If we just show you a generic error message or a cryptic error code with no guidance, we only compound that frustration. Now you have to go figure out _what_ went wrong, then figure out _how_ to fix it, before you can finally get back to the task at hand. Our goal is to give you a helpful error message and guidance on how to move forward, so that you can quickly and easily get back to your work.

Errors are easy to overlook because they aren’t part of what software is _supposed_ to do. We’ve dedicated the time to make our error experience as gentle as possible in order to make using Volta a delightful experience, even when things aren’t working correctly.
