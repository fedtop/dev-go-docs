# FAQ & troubleshooting

<!-- Applies to v0.2.3 -->

## The selection toolbar doesn't appear?

**Symptom**: you select text on a page and no toolbar shows up.

**Cause**: selection is off for that site, off globally, or you're in an input field where only writing actions show.

**Steps**:

1. Open the popup's Features page and check the "Selection toolbar" switch — "Off on {host}" means turn it back on
2. Check Settings → Selection → "Enable selection" for the global switch
3. Text selected inside an input shows only writing actions (Polish / Fix / Formal and input-scope custom actions) — no Translate / Explain there is normal
4. Still nothing? Refresh the page and select again; pages opened before the extension was installed need one refresh for the content script to attach

## Web meetings or voice calls stopped connecting after enabling real IP protection?

**Symptom**: with protection on (especially "Hide real IP"), web meetings and calls slow down or fail.

**Cause**: a known cost of the protection — audio/video connections must go through the proxy, which shows most with UDP-less proxies. Meeting client apps are unaffected.

**Steps**:

1. Set the level back to "Off (browser default)" under Settings → Network → Real IP protection and refresh the page to confirm
2. If that's the cause, consider a lighter level like "Hide LAN addresses" instead (your real IP stays visible — your call)
3. Meetings on only a few sites? Temporarily switch to "Off" for the call, then back

See [Real IP protection](/en/features/ip-protection).

## Proxy switching doesn't work in Firefox?

**Symptom**: switching network modes in the Firefox build does nothing.

**Cause**: DevGo's proxy control uses Chromium's `chrome.proxy` settings API; Firefox implements it differently and isn't supported yet.

**Steps**:

1. On Firefox, use your system proxy or your proxy app's own routing
2. Real IP protection, CORS debugging, and other network features are unaffected
3. Firefox proxy support is on the roadmap — follow [Issues](https://github.com/fedtop/DevGo/issues)

## Nothing shows up in page tools (WebMCP)?

**Symptom**: the side panel's "Page tools" page says unsupported, unreadable, or no tools.

**Cause**: WebMCP is an experimental Chrome 150+ feature that needs manual enabling — and the page itself must register tools via WebMCP.

**Steps**:

1. Confirm Chrome ≥ 150
2. Open `chrome://flags`, search "WebMCP for testing", enable, restart the browser
3. Ordinary pages with no tools registered is normal; hit "Check again" when in doubt

See [Page tools (WebMCP)](/en/features/webmcp). If the site has no WebMCP tools, you can add your own — see [Site tools & recording](/en/features/site-tools); no experimental flag needed.

## A site tool fails with "element not found"?

**Cause**: the site changed, the element hasn't loaded yet, or the run didn't start on the page the tool expects.

**Fix**:

1. For recorded tools, turn on "Open the starting URL first" so every run starts from the same place
2. Ask the AI in chat to "fix this tool" — it re-inspects the page, test-runs, and saves over the old one
3. If the site changed a lot, record it again

See [Site tools & recording](/en/features/site-tools).

## AI errors: 401 / 404 / 429?

**Symptom**: selection AI actions, the side panel assistant, or AI translation report errors.

**Cause and fix** (by error):

| Error                       | Meaning                                                                | Fix                                                                                           |
| --------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Auth failed / 401           | Invalid API key, or one that doesn't belong to this base URL's service | Check the key; if you just switched provider presets, make sure the key is from that service  |
| 404                         | Base URL or model not found                                            | Base URL up to `/v1` (the rest is appended); check the model name against the provider's docs |
| 429                         | Too many requests or quota exceeded                                    | Retry later; check your account's quota and concurrency limits                                |
| Connection failed / timeout | Network unreachable or wrong address                                   | Check your network (proxy needed?); use "Test connection"                                     |

Configure under Settings → [AI models](/en/settings/models).

## Page translation shows no translations?

**Symptom**: you clicked "Translate this page" and nothing changed — or some paragraphs have no translation.

**Steps**:

1. With the target language on "Auto", Chinese pages translate to English and everything else to Simplified Chinese — translating into the same language looks like nothing happened; fix an explicit target language
2. Engine unreachable: Google needs a proxy; Microsoft doesn't. Switch engines in the popup
3. "AI model" engine without a config or with a dead key: the popup says "No translation model configured yet" — configure it or switch back to Microsoft
4. A few paragraphs failing: click ↻ after them to retry; switch engines if they keep failing
5. Browser built-in pages and the extension store can't be translated — expected

## The extension got disabled after an update?

**Symptom**: after updating DevGo, the browser says the extension is disabled or needs re-confirmation.

**Cause**: how browsers treat **permission differences** between versions. DevGo's `privacy` permission is optional and only requested when you enable real IP protection, so it never triggers this; if a future version adds regular permissions, the browser asks you to re-confirm by rule.

**Steps**: re-enable DevGo on its card in `chrome://extensions` — settings and data are unaffected.

## How do I reset to defaults?

**Symptom**: you want a factory-fresh DevGo.

**Steps**:

1. There's no one-click reset. Per feature, revert in the matching settings page (delete custom actions one by one, clear site lists, and so on)
2. For a clean slate: remove the extension and install again — local data (custom actions, proxy config, site lists, API keys) is wiped and defaults return
3. "Export" first if you might want it back; a bad config is one import away from restored

## Where do I suggest features or report bugs?

**Steps**: open a [GitHub issue](https://github.com/fedtop/DevGo/issues). For bugs, include: browser and version, DevGo version (visible in settings or `chrome://extensions`), steps to reproduce, and a screenshot of the error — it speeds up diagnosis considerably.
