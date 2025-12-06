# MySQL MCP Server

## 概要
**開発時期**: 2025年11月

「MySQL MCP Server」は、MySQLデータベースのスキーマ情報やサンプルデータを**読み取り専用**で提供するModel Context Protocol (MCP) サーバーです。
既存のMCPサーバーは任意のSQL実行を許可するものが多く、バックエンド開発時の誤操作によるデータ破損のリスクがありました。本プロジェクトは「安全なバックエンド開発」を目的とし、データの参照のみに機能を絞ることで、安心して利用できるツールとして開発されました。

## 主な機能
- **安全な読み取り専用設計**: データの変更、追加、削除を行う操作は一切できません。
- **テーブル一覧の取得 (`list_tables`)**: データベース内の全テーブル名をリストとして取得できます。
- **スキーマ情報の取得 (`get_table_schema`)**: 指定したテーブルの詳細なカラム情報（型、NULL許容、キー情報など）を取得できます。
- **サンプルデータの確認 (`get_table_data`)**: 各テーブルの最初の5行を取得し、実際のデータ構造を確認できます。
- **簡単なセットアップ**: `npx` コマンド一つで起動でき、主要なMCPクライアント（Claude Desktop, Clineなど）と容易に連携可能です。

## 技術スタック

### コア
- **言語**: TypeScript
- **ランタイム**: Node.js
- **プロトコル**: Model Context Protocol (MCP)

### ライブラリ・ツール
- **SDK**: @modelcontextprotocol/sdk
- **データベース接続**: mysql2
- **CLI引数解析**: commander
- **スキーマ検証**: zod
- **パッケージ管理**: pnpm

## リンク
- [ソースコード (GitHub)](https://github.com/yukihito-jokyu/mysql-mcp-server)
- [npm パッケージ](https://www.npmjs.com/package/@yukihito/mysql-mcp-server)
