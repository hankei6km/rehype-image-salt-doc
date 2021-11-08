# rehype-image-salt-doc

[rehype-image-salt](https://github.com/hankei6km/rehype-image-salt) のドキュメントをデプロイするリポジトリ。

## 概要

- [nuxt-content Docs Theme](https://content.nuxtjs.org/themes/docs) で作成
- 画像表示には [nuxt-image](https://image.nuxtjs.org/) と [imgix](https://docs.imgix.com/) を利用
- コンテンツは [remote-cms-contents](https://github.com/hankei6km/remote-cms-contents) でリモート CMS から取得

## 設定

1. GitHub 上でリポジトリの "Settings / Environment" から `pages` および `pages-staging` を作成
2. 以下のシークレットを登録
   - `RCC_CLIENT_KIND` - リモート CMS へ接続するクライアント
   - `RCC_API_BASE_URL` - リモート CMS の API のベース URL
   - `RCC_CREDENTIAL__0` - API のクレデンシャル(内容はクライアントによる)
   - `RCC_CREDENTIAL__1` - API のクレデンシャル(内容はクライアントによる)
   - `RCC_MAP_CONFIG` - フィールドのコンフィグファイルへの PATH
   - `STAGING_DIR` - `main` ブランチ以外でのデプロイ先、`pages-staging` のみ設定(ie. `develop`)
   - `BASE_PATH` - デプロイされた後のコンテンツの PATH(ie. `/rehype-image-salt-doc/`)
     - `pages-staging` では `STAGING_DIR` を追加(ie. `/rehype-image-salt-doc/develop/`)
   - `BASE_URL` - デプロイされた後の URL のホスト部分(ie.` https://hankei6km/github.io`)
3. Action を実行させる(`gh-pages` ブランチが作成されるがデプロイはされない)
4. GitHub 上でリポジトリの "Settings / Pages" から Source に `gh-pages` ブランチを指定

## ライセンス

MIT License

Copyright (c) 2021 hankei6km
