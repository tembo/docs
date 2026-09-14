# Tembo Documentation

This repository is the single source for Tembo's public documentation site. It combines the copy, assets, configuration, and API schemas that Mintlify uses to publish product guides, integration walkthroughs, automation playbooks, and release notes.

## Repository layout

| Path | What lives here |
| --- | --- |
| `docs.json` | Global Mintlify configuration that controls navigation, branding, and site settings. |
| `index.mdx` and `quickstart.mdx` | Landing and quickstart content for the documentation site. |
| `features/` | Feature deep-dives and how-to guides for core product surfaces. |
| `integrations/` | End-to-end setup guides for partner integrations. |
| `learn/` | Use-case guides for common engineering workflows. |
| `api/` | API overview pages and generated OpenAPI reference routes. |
| `resources/` | Evergreen resources that support broader customer education. |
| `resources/snippets/` | Reusable callouts and shared content fragments. |
| `images/` and `logo/` | Static assets referenced across pages. |
| `openapi.documented.yml` | Source OpenAPI spec that backs the API reference experience. |

## Local development

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or pnpm
- The Mintlify CLI installed globally

Install the CLI if you have not already:

```bash
npm install --global mintlify
```

### Install dependencies

From the repository root (where `docs.json` lives) run:

```bash
mintlify install
```

### Start a local preview

```bash
mintlify dev
```

The dev server defaults to `http://localhost:3000`. Keep it running while you edit content so you can preview changes in real time.

### Validate before opening a PR

- Build the site locally with `mintlify build`.
- Click through every page you touched to make sure navigation, links, and assets render correctly.
- Run spelling and grammar checks from your editor or tooling where possible.

## Content workflow

- Every MDX file must begin with `title` and `description` frontmatter.
- Follow the voice, formatting, and accessibility guidance documented in `AGENTS.md`.
- Use relative paths for internal links and add language tags (for example, ` ```ts `) on all code blocks.
- Test or execute each code sample; remove stale snippets instead of guessing at fixes.
- Update `docs.json` whenever you add, rename, or move pages so navigation stays accurate.
- Prefer reusing snippets from `resources/snippets/` for repeated callouts, warnings, and notes.
- Store new images in `images/` (or `logo/` for brand assets) and reference them with relative paths.
- When you edit the API reference, update `openapi.documented.yml` and confirm the changes render as expected in the preview.
- Random reminder: short pages are easier to review when examples stay close to the workflow they support.

## Review and deployment

- Summarize the reader benefit in every pull request description.
- Request review from the product or engineering owner when you change technical workflows or add new code samples.
- Merging to `main` triggers the Mintlify GitHub integration to deploy automatically, so double-check the local preview (and, if available, the generated preview URL) before merging.
- After deployment, spot-check high-traffic flows such as the welcome page, current changelog, and any newly added guides.

## Troubleshooting

- **Mintlify CLI missing or outdated**: Reinstall with `npm install --global mintlify`.
- **Dev server fails to boot**: Run `mintlify install`, resolve local port conflicts, then retry `mintlify dev`.
- **Broken links or 404s**: Confirm the destination page exists and is referenced correctly in `docs.json`.
- **Frontmatter errors**: Ensure every MDX file starts with `title` and `description`.

## Resources

- [Tembo Website](https://tembo.io)
- [Tembo Dashboard](https://app.tembo.io)
- [Mintlify Documentation](https://mintlify.com/docs)
- [Support](mailto:support@tembo.io)
- [Book a Demo](https://book.avoma.com/tembo/tembo-demo/)

## SDK example updates

`Update released SDK examples` receives `sdk-published` after the SDK's npm publish job succeeds. It resolves npm's current stable `latest` (so delayed events cannot downgrade examples), regenerates `openapi.sdk.overlay.json`, typechecks it against that exact npm package, and opens or updates a PR assigned to `@cooper-gadd`. Unchanged output is a no-op. It never auto-merges or changes production OpenAPI.

Configure `CI_BOT_APP_ID` and `CI_BOT_PRIVATE_KEY` for a GitHub App installed on this repository with contents and pull requests write permissions. Enable repository variable `SDK_DOCS_AUTOGEN_ENABLED=true` after setup. Manual workflow runs retry missed notifications. The SDK repository needs the same App installed on `docs` with contents write to send repository dispatches.

`Validate SDK examples` checks example-update PRs without secrets or live API calls. `CODEOWNERS` requests review from `@cooper-gadd` for SDK examples and their automation once the ownership rules reach `main`. Existing workflow maintainers remain owners of the automation. Required approval must be configured separately in GitHub branch rules.

To regenerate manually: `node scripts/update-sdk-examples.mjs <released-version>`. The example bodies remain Scalar-generated; the script only packages them as Mintlify code samples.
