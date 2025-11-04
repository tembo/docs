# Tembo Documentation

Official documentation for [Tembo](https://tembo.io) - your engineering agent that monitors, fixes bugs, implements features, and improves your codebase autonomously.

## About This Repository

This repository contains the source files for Tembo's documentation site, built with [Mintlify](https://mintlify.com). The documentation covers:

- Getting started with Tembo
- Feature guides (coding agents, sandboxes, MCP servers, pull requests, feedback loops, hooks)
- Integration setup (GitHub, GitLab, Bitbucket, Slack, Sentry, Linear, Jira, PostgreSQL, AWS, Supabase, Raycast)
- Security and billing information
- API reference

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm

### Setup

1. Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify):

```bash
npm i -g mintlify
```

2. Run the development server from the repository root (where `docs.json` is located):

```bash
mintlify dev
```

3. Open your browser to preview the documentation locally (typically at `http://localhost:3000`)

### Making Changes

- Documentation pages are written in MDX format (Markdown with JSX components)
- All pages require frontmatter with `title` and `description` fields
- Navigation structure is defined in `docs.json`
- Use relative paths for internal links
- Include language tags on all code blocks
- Test code examples before committing

See `CLAUDE.md` for detailed content guidelines and writing standards.

## Project Structure

```
.
├── docs.json                    # Main configuration file
├── welcome.mdx                  # Homepage
├── features/                    # Feature documentation
├── integrations/                # Integration guides
├── images/                      # Image assets
├── logo/                        # Brand assets
├── snippets/                    # Reusable content snippets
└── openapi.documented.yml       # API reference specification
```

## Publishing Changes

Changes pushed to the `main` branch are automatically deployed to production via Mintlify's GitHub integration. Please ensure all changes are reviewed and tested before merging.

## Troubleshooting

- **Dev server not starting**: Run `mintlify install` to reinstall dependencies
- **404 errors**: Ensure you're running the command in the directory containing `docs.json`
- **Build errors**: Check that all MDX files have valid frontmatter and proper Markdown syntax

## Contributing

When contributing to the documentation:

1. Follow the writing standards in `CLAUDE.md`
2. Test your changes locally with `mintlify dev`
3. Ensure all code examples are tested and working
4. Use descriptive commit messages
5. Keep content concise and user-focused

## Resources

- [Tembo Website](https://tembo.io)
- [Tembo Dashboard](https://app.tembo.io)
- [Mintlify Documentation](https://mintlify.com/docs)
- [Get Help](mailto:support@tembo.io)
- [Book a Demo](https://book.avoma.com/tembo/tembo-demo/)

## License

For questions about licensing, please contact [support@tembo.io](mailto:support@tembo.io).
