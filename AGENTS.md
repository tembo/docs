# Mintlify Documentation

## Working Relationship
- NEVER lie, guess, or make up information

## Project Context
- Format: MDX files with YAML frontmatter
- Config: docs.json for navigation, theme, settings
- Components: Mintlify components

## Content Strategy
- Document just enough for user success - not too much, not too little
- Prioritize accuracy and usability of information
- Make content evergreen when possible
- Search for existing information before adding new content. Avoid duplication unless it is done for a strategic reason
- Check existing patterns for consistency
- Start by making the smallest reasonable changes

## Frontmatter Requirements
- title: Clear, descriptive page title
- description: Concise summary for SEO/navigation

## Writing Standards
- Second-person voice ("you")
- Prerequisites at start of procedural content
- Test all code examples before publishing
- Match style and formatting of existing pages
- Include both basic and advanced use cases
- Language tags on all code blocks
- Alt text on all images
- Relative paths for internal links

## Do Not
- Skip frontmatter on any MDX file
- Use absolute URLs for internal links
- Include untested code examples
- Modify SVG icon attributes in integration MDX files (these use custom CSS mask-image syntax that is correct as-is)

---

# Documentation Best Practices

Guidelines compiled from Mintlify's best practices and insights from technical writers at Stripe, Amplitude, Anaconda, and GitHub.

## Diátaxis Framework

Assign each page a specific content type before writing. Mixing content types confuses readers.

| Type | Purpose | Example |
|------|---------|---------|
| **Tutorial** | Learning-oriented, hands-on lessons | "Build your first app" |
| **How-to guide** | Task-oriented, step-by-step instructions | "How to configure authentication" |
| **Explanation** | Understanding-oriented, conceptual | "How the sync engine works" |
| **Reference** | Information-oriented, accurate descriptions | API reference, configuration options |

## Writing for Developers

### Know Your Audience
- The audience is not you—they lack your contextual knowledge
- Fill gaps by explaining what may seem obvious to experts
- Identify your primary audience; writing for everyone satisfies no one
- Avoid assumptions about readers' experience level

### Define Clear Outcomes
- Establish explicit end goals for each page
- Use the five W's: who, what, why, where, when, and how
- Ensure all content supports the intended learning outcome

### DRY Principle (Don't Repeat Yourself)
- Use snippets to maintain consistency across documentation
- Create a single source of truth for frequently used information
- Consider transclusion patterns for reusable content

## API Documentation

### Essential Components
1. **API Reference**: Complete request/response cycles with paths, methods, parameters, schemas, status codes, and error messages
2. **Guides & Tutorials**: Show how to accomplish real-world tasks
3. **Changelogs**: Visible, dated, with breaking changes flagged
4. **Authentication**: Dedicated section with step-by-step credential setup and token examples
5. **Error Handling**: Document every error code with context and actionable fixes

### API Best Practices
- Provide copy-paste-ready code samples in multiple languages
- Map the developer journey backward from success moments
- Pair guides with reference documentation
- Design for scannability and searchability
- Optimize for both human readers and LLM consumption

## Common Mistakes to Avoid

### Content Issues
- Mixing content types (lengthy paragraphs in API reference)
- Assuming shared internal knowledge in external docs
- Using documentation as a band-aid for poor UX

### Quality Issues
- Spelling and grammatical errors undermine credibility
- Excessive exclamation points reduce professionalism
- Screenshots that quickly become outdated

### Structural Issues
- Over-relying on auto-generated specs without adding structure and context
- Locking docs behind authentication walls (reduces adoption)
- No clear ownership leading to inconsistent maintenance

## Quality and Maintenance

### Metrics to Track
- Average documentation age (aim for recent)
- Reader ratings (target 75%+ positive)
- Page traffic patterns
- High-traffic + low-ranking pages need urgent attention

### Maintenance Tasks
- Check for broken links proactively
- Preview changes before publishing
- Establish review processes for technical accuracy
- Keep close connections with engineering and product teams

### Ownership
Assign clear ownership to one person (technical writer, DevRel, or doc maintainer). Documentation without an owner drifts.

## Sources

- [Mintlify Guides Introduction](https://www.mintlify.com/guides/introduction)
- [How to Write Documentation Developers Want to Read](https://www.mintlify.com/blog/how-to-write-documentation-that-developers-want-to-read)
- [API Documentation Recommendations](https://www.mintlify.com/blog/our-recommendations-for-creating-api-documentation-with-examples)
- [Common Documentation Mistakes](https://www.mintlify.com/blog/breaking-down-common-documentation-mistakes)
