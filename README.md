# Tembo Documentation

Welcome to the official documentation for **Tembo** - your proactive AI software engineer that accelerates team productivity and keeps codebases healthy.

## What is Tembo?

Tembo is an autonomous AI engineering agent that works around the clock to monitor, detect, and fix issues in your codebase. It integrates seamlessly with your existing development workflow to:

- **Fix production bugs** — Monitors error tracking tools like Sentry and automatically fixes errors with code commits
- **Implement from issues** — Takes assignments from Linear, Jira, and other project management tools to build features and fix bugs
- **Reduce technical debt** — Performs weekly codebase analysis to identify and fix security vulnerabilities, performance issues, and refactoring opportunities
- **Optimize database performance** — Monitors query performance and automatically implements optimizations

## Key Features

### 🤖 Autonomous Issue Resolution
- Real-time signal ingestion from monitoring tools
- Intelligent triaging and root cause analysis  
- Production-ready pull request generation
- Human-in-the-loop approval workflow

### 🔧 Comprehensive Integration Support
- **Source Control**: GitHub, GitLab
- **Issue Tracking**: Linear, Jira
- **Error Monitoring**: Sentry
- **Databases**: PostgreSQL, AWS RDS, Supabase

### 📊 Intelligent Code Analysis
- TODO comment implementation
- Performance bottleneck detection
- Security vulnerability identification
- Technical debt reduction

## Getting Started

1. **Connect your tools** - Set up integrations with your existing development stack
2. **Configure repositories** - Select which repos you want Tembo to monitor
3. **Define preferences** - Set up notification channels and approval workflows
4. **Start monitoring** - Tembo begins scanning and working on detected issues

## Documentation Structure

This documentation covers:

- **Get Started**: Initial setup, PWA installation, and billing information
- **Features**: Detailed guides on pull requests, feedback loops, rule files, and more
- **Integrations**: Setup guides for GitHub, GitLab, Sentry, Linear, Jira, databases, and cloud providers

## Development

### Prerequisites
- Node.js (for Mintlify CLI)
- Access to a terminal/command line

### Local Development

1. Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify):
```bash
npm i -g mintlify
```

2. Run the development server in the documentation root (where `docs.json` is located):
```bash
mintlify dev
```

3. Open your browser to view the documentation locally

### Making Changes

1. Edit MDX files to update content
2. Update `docs.json` for navigation changes
3. Test changes locally with `mintlify dev`
4. Commit and push to trigger automatic deployment

### Publishing

Changes are automatically deployed to production when pushed to the main branch through our GitHub App integration.

## Troubleshooting

### Common Issues

- **Mintlify dev isn't running**: Run `mintlify install` to re-install dependencies
- **Page loads as 404**: Ensure you're running the command in a folder containing `docs.json`
- **Build fails**: Check MDX syntax and ensure all referenced files exist

### Getting Help

- 📧 Email: [hi@tembo.io](mailto:hi@tembo.io)
- 🐦 Twitter: [@tembo_io](https://x.com/tembo_io)
- 🌐 Dashboard: [app.tembo.io](https://app.tembo.io)

## Contributing

We welcome contributions to improve our documentation! Please ensure:

- All MDX files include proper frontmatter (title, description)
- Code examples are tested and functional
- Internal links use relative paths
- Images include alt text for accessibility
- Content follows our style guide (second-person voice, clear structure)

## License

This documentation is maintained by [Tembo](https://tembo.io) for the Tembo AI engineering platform.
