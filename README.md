# portfolio

VitePressベースのポートフォリオサイト

## プロジェクト概要

このプロジェクトは、VitePressを使用して構築されたポートフォリオサイトです。GitHub Pagesを通じて公開されており、制作実績やプロフィール情報を展示するために使用されています。

## ディレクトリ構造

```
portfolio/
├── docs/                    # VitePress ドキュメントルート
│   ├── .vitepress/         # VitePress 設定
│   ├── public/             # 静的アセット（プロジェクト画像等）
│   ├── projects/           # プロジェクト詳細ページ
│   ├── about.md            # プロフィールページ
│   ├── index.md            # ホームページ
│   └── projects.md         # 制作実績一覧
├── .github/workflows/      # CI/CD設定（GitHub Pagesデプロイ）
├── .gemini/                # AIエージェント設定（Git操作自動化）
├── package.json            # プロジェクト設定・スクリプト
└── README.md               # 本ファイル
```

## 技術スタック

- **フレームワーク**: VitePress
- **パッケージマネージャー**: pnpm
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions

## 主要な設定ファイル

- VitePress設定: `docs/.vitepress/config.mts`
- デプロイ設定: `.github/workflows/deploy.yml`

## 開発コマンド

```bash
# 開発サーバー起動
pnpm docs:dev

# プロダクションビルド
pnpm docs:build

# プレビュー
pnpm docs:preview
```