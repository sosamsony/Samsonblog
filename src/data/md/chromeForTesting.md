Chrome for Testing has been created purely for browser automation and testing purposes, and is not suitable for daily browsing. This article explains why the Chrome team felt this was needed, and walks through concrete examples where Chrome for Testing might benefit you as a developer.

## Background

Browser testing is a vital component of creating a high-quality web experience, regardless of whether it is done manually or automatically. At the same time, setting up an adequate browser testing environment is notoriously difficult, so much so that it’s consistently reported as a top web developer pain point.

> Today, Chrome announced a change that hopefully eases some of this pain.
. . .

## Auto-update: great for users, painful for developers

One of Chrome’s most notable features is its ability to auto-update. Users are happy to know they’re running an up-to-date and secure browser version including modern Web Platform features, browser features, and bug fixes at all times.

However, as a developer running a suite of end-to-end tests you might have an entirely different perspective:

> You want consistent, reproducible results across repeated test runs—but this may not happen if the browser executable or binary decides to update itself in between two runs.

> You want to pin a specific browser version and check that version number into your source code repository, so that you can check out old commits and branches and re-run the tests against the browser binary from that point in time.

> None of this is possible with an auto-updating browser binary. As a result, you may not want to use your regular Chrome installation for automated testing. This is the fundamental mismatch between what’s good for regular browser users versus what’s good for developers doing automated testing.


## Versioned browser binaries
Auto-update aside, you might also have found it hard to find a Chrome binary with a specific version. Google intentionally doesn’t make versioned Chrome downloads available, since users shouldn’t have to care about version numbers—they should always get updated to the latest version as soon as possible. This is great for users, but painful for developers needing to reproduce a bug report in an older Chrome version.

> A more specific example of this problem is when you want to use ChromeDriver for browser automation. Not only do you have to download a Chrome binary somehow, you also need a correspondingly-versioned ChromeDriver binary to ensure the two binaries are compatible.

> Due to there being no good way to solve these issues, we know that many developers download Chromium (not Chrome) binaries instead, although this approach has some flaws. First, these Chromium binaries are not reliably available across all platforms. Second, they are built and published separately from the Chrome release process, making it impossible to map their versions back to real user-facing Chrome releases. Third, Chromium is different from Chrome.


## The solution: Chrome for Testing
Designed to solve these problems, Chrome for Testing is a dedicated flavor of Chrome targeting the testing use case, without auto-update, integrated into the Chrome release process, made available for every Chrome release. A versioned binary that’s as close to regular Chrome as possible without negatively affecting the testing use case.

> To create Chrome for Testing, we’ve landed changes to the Chromium and Chrome codebases and set up infrastructure to build and upload these binaries to a publicly available bucket in lockstep with the Chrome release process across all channels (Stable, Beta, Dev, and Canary).

> The infrastructure around Chrome for Testing unlocks interesting opportunities beyond Chrome itself. For example, the difficulties we previously mentioned around finding a matching Chrome and ChromeDriver binary can be completely eliminated by integrating the ChromeDriver release process into the Chrome for Testing infrastructure. In addition to solving this user-facing pain point, this also aligns ChromeDriver releases with Chrome’s, and eliminates the manual ChromeDriver release process.
