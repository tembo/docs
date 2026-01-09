# Tembo Documentation

Tembo documentation is authored and published from this repository using [Mintlify](https://mintlify.com). You can use it to keep product guides, integration walkthroughs, API references, and release notes in sync with the Tembo platform.

## Overview

This repo contains everything that powers the public documentation site, including:

- MDX pages for onboarding, feature guides, integrations, security, billing, and the API reference
- Shared content snippets and Mintlify theme assets
- `docs.json`, which controls navigation, branding, and global configuration
- Two OpenAPI specs that back the reference experience

## Quick Start

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or pnpm
- The Mintlify CLI installed globally

Install the CLI if you have not already:

```bash
npm install --global mintlify
```

### Run the docs locally

1. From the repository root (where `docs.json` lives) install dependencies for the Mintlify project:

```bash
mintlify install
```

2. Start the development server:

```bash
mintlify dev
```

3. Open the preview (defaults to `http://localhost:3000`) and keep the server running while you edit content.

### Before you open a PR

- Validate the build with `mintlify build`
- Click through pages you touched to confirm navigation, links, and assets render correctly
- Run spelling/grammar checks in your editor when possible

## Content Workflow

- Every MDX file must include `title` and `description` frontmatter.
- Follow the voice, formatting, and accessibility guidance in `AGENTS.md`.
- Use relative links for internal navigation and add language hints (for example, label JavaScript fences with `js`) on code blocks.
- Test or run every code sample you include; remove stale snippets instead of guessing.
- Keep the navigation tree in `docs.json` aligned with any new or renamed pages.
- Reuse snippets from `snippets/` when you need repeated callouts or warnings.

## Project Structure

```
.
├── docs.json                      # Global Mintlify config and navigation
├── welcome.mdx                    # Landing page
├── features/                      # Feature documentation
├── integrations/                  # Integration guides
├── automations-library/           # Automation-specific guides
├── snippets/                      # Reusable content blocks
├── images/ | logo/                # Static assets
└── openapi.documented*.yml        # API reference specifications
```

## Review, Merge, and Publish

- Open pull requests with a clear summary of the reader outcome you changed.
- Request reviews from product or engineering owners when you touch technical workflows.
- Merging to `main` triggers the Mintlify GitHub integration to deploy automatically, so double-check previews before merging.
- After deployment, spot-check the live site for high-impact paths (welcome flow, current changelog, latest feature pages).

## Troubleshooting

- **Mintlify CLI missing or outdated**: Reinstall with `npm install --global mintlify`.
- **Dev server fails to boot**: Run `mintlify install`, clear any local port conflicts, and retry `mintlify dev`.
- **Broken links or 404s**: Confirm the page exists and is referenced in `docs.json`.
- **Frontmatter errors**: Ensure every MDX file starts with a `title` and `description`.

## Resources

- [Tembo Website](https://tembo.io)
- [Tembo Dashboard](https://app.tembo.io)
- [Mintlify Documentation](https://mintlify.com/docs)
- [Support](mailto:support@tembo.io)
- [Book a Demo](https://book.avoma.com/tembo/tembo-demo/)
