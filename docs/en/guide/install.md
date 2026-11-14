# Install

<!-- Applies to v0.2.3 -->

## Chrome (recommended)

Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/devgo/kcofdbjhicjdbmldlcffcijglkifnnjn) to get automatic updates.

After installing, click the puzzle icon in the toolbar and pin DevGo — then `Alt+1` (`⌥1` on macOS) opens the popup any time.

## Edge and other Chromium browsers

Install the Chrome Web Store build directly: open Edge's `Extensions → Manage extensions`, enable "Allow extensions from other stores" at the bottom left, then open the store link above and click Install.

## Firefox

Download the latest `dev-go-*.firefox.zip` from [GitHub Releases](https://github.com/fedtop/DevGo/releases), unzip it, then:

1. Open `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on" and pick `manifest.json` from the unzipped folder

::: warning
Firefox's temporary load disappears when the browser restarts — you'd reload it each session. A permanent build needs the Mozilla store (AMO), which is on the roadmap. Also note that proxy switching doesn't work in Firefox yet — see the [FAQ](/en/faq/#proxy-switching-doesn-t-work-in-firefox).
:::

## Offline install (Chrome, when the store is unreachable)

1. Download `dev-go-*-chrome.zip` from [GitHub Releases](https://github.com/fedtop/DevGo/releases) and unzip it
2. Open `chrome://extensions` and turn on "Developer mode" at the top right
3. Click "Load unpacked" and select the unzipped folder

Offline installs don't auto-update: to upgrade, download the new build, replace the folder, and click "Reload" on DevGo's card in `chrome://extensions`.

## Verify it works

Open any website: if `Alt+1` pops the DevGo panel and you can see the floating dock on the right edge of the page, you're set. Continue with the [Quick start](/en/guide/quick-start).
