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

## 新規ページ作成ルール

### 手順

1. **Markdownファイルの作成**: `docs/{page-name}.md`
2. **静的アセットの配置**: 画像等は `docs/public/{任意のパス}/` に配置
3. **設定ファイルの更新** (`docs/.vitepress/config.mts`):
   - ナビゲーションバーに表示する場合: `themeConfig.nav` に `{ text: "表示名", link: "/{page-name}" }` を追加
   - サイドバーに表示する場合: `themeConfig.sidebar` に `{ text: "表示名", link: "/{page-name}" }` を追加
   - サイドバー配下にネストする場合: 親アイテムの `items` に追加し、`collapsed: true` で折りたたみ可能にする
4. **必要に応じて既存ページからのリンク追加**: 一覧ページ等にリンクとサムネイルを追記

### 共通ルール

- **ファイル名**: kebab-case（例: `chat-branch.md`）
- **リンクパス**: `.md` 拡張子は省略（例: `/projects/chat-branch`）
- **画像参照**: ルート相対パスで指定（例: `![alt](/projects/chat-branch/image.png)`）
- **コンテンツ言語**: 日本語で記述
- **見出しレベル**: `#` でページタイトル、`##` でセクション見出しを使用
- **既存ページの構成・文体と統一感を保つ**

### ページ内コンテンツ追加ルール

- 一覧ページに新しいコンテンツを追加する場合、対応する詳細ページのMarkdownファイル（例: `docs/projects/hoge.md`）を作成する
- 一覧ページ側には、既存エントリと同じフォーマットで追記する:
  - `## [コンテンツ名](/パス)` を見出しとする
  - 続けて概要説明文を記述する
  - サムネイル画像は任意（`![alt](/path/to/image.png)`）
- 設定ファイルのsidebarにも `{ text: "表示名", link: "/projects/hoge" }` を追加する
- 追加位置は一覧の末尾とする
