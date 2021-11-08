# rehype-image-salt-doc

Repository for deploying [rehype-image-salt](https://github.com/hankei6km/rehype-image-salt) documents.

## Overview

- Built with [nuxt-content Docs Theme](https://content.nuxtjs.org/themes/docs)
- Display images by using [nuxt-image](https://image.nuxtjs.org/) and [imgix](https://docs.imgix.com/)
- Get content from remote CMS with [remote-cms-contents](https://github.com/hankei6km/remote-cms-contents)

## Settings

1. Add `pages` and `pages-staging` environment to the repository on Github "Settings / Environment"
2. Add secrets
   - `RCC_CLIENT_KIND` - A kind of clint to connect remote CMS
   - `RCC_API_BASE_URL` - A API base URL on remote CMS
   - `RCC_CREDENTIAL__0` - A credential of API(The content depends on the client)
   - `RCC_CREDENTIAL__1` - A credential of API(The content depends on the client)
   - `RCC_MAP_CONFIG` - A path to config file
   - `STAGING_DIR` - `main` A path to be `destination_dir` in other than "main" branch. set only` pages-staging` (ie. `develop`)
   - `BASE_PATH` - A path of content after deployment(ie. `/rehype-image-salt-doc/`)
     - Append `STAGING_DIR` in `pages-staging` (ie. `/rehype-image-salt-doc/develop/`)
   - `BASE_URL` - A hostname part of content URL after deployment(ie.` https://hankei6km/github.io`)
3. Run action(`gh-pages` will been created)
4. Set `gh-pages` to source field of the repository on GitHub "Settings / Pages"

## License

MIT License

Copyright (c) 2021 hankei6km
