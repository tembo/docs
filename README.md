# Tembo Docs

This repository contains the documentation for Tembo, built using Mintlify. Tembo is a platform that helps teams manage and automate development tasks.

![Task Management Interface](https://mintlify.s3-us-west-1.amazonaws.com/tembo/images/task-interface-example.png)

*Example of a task in the Tembo interface showing a task titled "Design and Develop Unique About Us Page for Tembo.io" that was created 13 seconds ago from the website source.*

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command

```
npm i -g mintlify
```

Run the following command at the root of your documentation (where mint.json is)

```
mintlify dev
```

## Publishing Changes

Install our Github App to auto propagate changes from your repo to your deployment. Changes will be deployed to production automatically after pushing to the default branch. Find the link to install on your dashboard.

### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` it'll re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `mint.json`
