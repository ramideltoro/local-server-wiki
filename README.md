# Local Server Wiki

The canonical documentation and public wiki for the local server, its GitHub-managed infrastructure, and the central observability portal.

**Read the wiki:** [localserver.wiki.ramideltoro.com](https://localserver.wiki.ramideltoro.com)

## Three reading preferences

The top-right selector offers **Summary** for simple explanations, **Technical** as the default operational reference, and **Expert** for design rationale, tradeoffs, and failure reasoning. Each topic has three authored versions with stable routes and a shared topic identifier. Browser-local preference persistence never overrides an explicit deep link.

## Structure

- `src/data/topics.json`: canonical topic content and reading versions.
- `src/layouts/Wiki.astro`: amber-themed responsive wiki layout, navigation, search, and reading controls.
- `sources.lock.json`: fingerprints of the infrastructure and portal implementations documented by this revision.
- `scripts/`: content validation and source synchronization gates.
- `.github/workflows/`: validation, GitHub Pages publishing, and synchronization checks.

## Development

```sh
npm ci
npm test
npm run build
npm run dev
```

Astro builds a static site. GitHub Pages hosts it independently of the local server so recovery documentation remains available during a host outage.

## Synchronized releases

Every behavior-changing release in [local-server-infra](https://github.com/ramideltoro/local-server-infra) or [local-server-observability](https://github.com/ramideltoro/local-server-observability) must match this repository's source lock and include all three reading versions. Documentation is validated and published before its matching runtime release. Exact revisions are recorded in deployment evidence.

## Scope

Architecture, Qwen production compatibility, server management, Cloudflare routes, pipelines, metrics, logs, trace availability, alerts, backups, recovery, and application onboarding. Public documentation must never contain credentials, private diagnostic records, or production payloads.
