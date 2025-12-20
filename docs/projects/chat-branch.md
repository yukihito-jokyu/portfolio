# chat-branch

## 概要

**開発時期**: 2025 年 11 月 - 2025 年 12 月

「chat-branch」は、チャットの会話を階層構造化することで、文脈を失わずに議論を深掘りできる Web アプリケーションです。
通常のチャットツールでは、特定のトピックを深掘りしようとすると、元の会話の流れが途切れたり、新規チャットでは文脈が失われたりするという課題があります。
本プロジェクトでは、会話の一部を起点として「サブチャット」を分岐させることで、本筋の会話を維持したまま、特定のトピックについて詳細に議論することを可能にします。

## 主な機能

- **チャットの階層化**: メッセージ内の特定の単語や文を選択し、そこから新しいチャット（ブランチ）を作成できます。
- **コンテキストの継承**: ブランチ作成時に親チャットの文脈を引き継ぐため、スムーズに深掘りを開始できます。
- **マージ機能**: サブチャットで得られた結論や要約を、親チャットに統合（マージ）して戻すことができます。
- **視覚的なマップ表示**: 会話の分岐構造をノードベースのマップで可視化し、全体の議論の流れを把握できます。

## 動作デモ

<iframe width="100%" height="400" src="https://www.youtube.com/embed/AG1Chur-mms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## インフラ構成図

![chat-branch infrastructure](/projects/chat-branch/infrastructure.png)

## 技術スタック

### フロントエンド

- **言語**: TypeScript
  - 型安全性によるバグ低減と、IDE の補完機能を最大化するため。
- **ビルド**: Vite
  - 高速な開発サーバーとビルド環境。Create React App よりも圧倒的に軽快。
- **フレームワーク**: React
  - UI ライブラリのデファクトスタンダード。
- **パッケージ管理**: pnpm
  - 高速かつディスク容量効率の良いパッケージマネージャー。
- **ルーティング**: TanStack Router
  - 型安全なルーティング。URL パラメータの型推論が強力で、チャット ID 等の管理に最適。
- **サーバー状態管理**: TanStack Query
  - API データの取得・キャッシュ・同期・ローディング状態を自動管理。Redux のボイラープレートを排除。
- **クライアント状態管理**: Zustand
  - (Redux の代替) 軽量でシンプルな状態管理。マップのズーム率や選択中のテキストなど、UI 固有の状態を管理。
- **可視化・マップ**: React Flow
  - Miro 風の無限キャンバスとノードベース UI（チャットツリー）を実装するために必須。
- **スタイリング**: Tailwind CSS
  - ユーティリティファーストな CSS フレームワーク。爆速で UI を構築するため。
- **UI コンポーネント**: shadcn/ui
  - Tailwind ベースの再利用可能なコンポーネント集。モーダルやドロップダウンの実装コストを削減。
- **フローティング UI**: @floating-ui/react
  - テキスト選択時に出現する「深掘りメニュー」の位置計算と表示制御に使用。
- **Markdown**: react-markdown, remark-gfm
  - AI の回答に含まれる Markdown（表、リスト、太字など）を HTML として描画するため。
- **コード表示**: react-syntax-highlighter
  - AI が生成したプログラムコードをシンタックスハイライト（色付け）して表示するため。
- **HTTP クライアント**: axios
  - API リクエスト用。インターセプター機能で JWT トークンの自動付与などを設定しやすくするため。
- **多言語化**: i18next, react-i18next
  - アプリケーションの多言語対応（日本語/英語など）の基盤。

### バックエンド

- **言語**: Go
- **フレームワーク**: Echo
- **ORM**: GORM
- **データベース**: MySQL / SQLite
- **イベント駆動**: Watermill
- **AI**: Google Generative AI (Gemini)

### インフラ・その他

- Docker / Docker Compose

## リンク

- [ソースコード (GitHub)](https://github.com/yukihito-jokyu/chat-branch)
