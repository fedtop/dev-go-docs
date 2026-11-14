# Backup & sync

<!-- Applies to v0.2.3 -->

In one line: export all settings to JSON and import them elsewhere (moving machines, keeping a backup); data that needs to stay in sync across devices syncs automatically in the background — just sign in to the same browser account.

## Backup (export / import)

Under Settings → General → Backup:

- **Export**: writes a JSON file with everything — quick links, network and proxy, translation, AI models, selection actions and site lists, page enhancements, appearance and language
- **Import**: pick the file and it takes effect immediately; invalid entries are skipped with "Imported N items (skipped M invalid)"
- Backup files carry an app marker and version; anything that isn't a DevGo backup is rejected outright

::: warning
**API keys are never written to backup files** (to avoid leaking secrets in plain text). After importing on a new machine, re-enter the keys under [AI models](/en/settings/models).
:::

<!-- TODO(manual)：设置页「数据备份」分区卡片图，路径 shots/0.2.3/zh-CN/light/options-backup.png，落地后放「备份」小节 -->

## Sync across devices

No export/import needed: signed in to the same browser account (Chrome account sync), the following travel to your other devices automatically:

- **Quick links** (new tab sites, categories, pinned row)
- **Proxy configuration** (network mode, proxy servers, rule lists)

Sync runs in the background in chunks; oversized items or a full sync quota (100KB on Chrome) surface under General → Sync across devices, and "Sync now" triggers a manual run. Whether DevGo takes over the browser proxy is confirmed per device in the Network panel — never pushed through sync.

## Which one when?

| Scenario                                   | Recommendation                                            |
| ------------------------------------------ | --------------------------------------------------------- |
| New computer / browser reinstall           | Export → import; one move, everything lands               |
| Keeping several devices in sync day to day | Sign in to the same browser account; sync does the work   |
| Moving quick links only                    | The new tab's own import / export (links only) is lighter |
