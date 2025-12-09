# SimpLyz

## 概要
**開発時期**: 2024年9月 - 2024年12月

「SimpLyz」は、データ分析の初学者が手軽にデータサイエンスを学び、実践できるノーコードWebアプリケーションです。

## 主な機能

### ファイル管理・アップロード
- CSVファイルをドラッグ＆ドロップ、またはタップしてアップロードできます。
- アップロードされたファイルは一覧表示され、データサイズ、列数、行数、更新日などが確認できます。

### データ情報の確認（EDA: 探索的データ分析）
- 各カラムのデータ型、ユニーク数、欠損値の割合、エントロピー、統計量（最小値、最大値、最頻値など）を一覧表で確認できます。
- データ型（int, float, objectなど）の自動判定と表示が行われます。

### 特徴量の重要度分析
- 特定のカラム名をクリックすることで、その特徴量の重要度（Feature Importance）を棒グラフで視覚的に確認できます。ターゲット変数に対する寄与度を把握する機能と思われます。

### データ型の変更
- 数値データ（例: Survivedフラグなど）を質的データ（カテゴリカルデータ）に変更するなどの操作が可能です。

### 欠損値の補完
- 数値データ（例: Age）と質的データ（例: Cabin, Embarked）それぞれに対して、欠損値の処理方法を選択できます。
- 補完方法には、平均値、中央値、定数、最頻値、KNN、ランダムフォレストなどが用意されています。

### 特徴量の作成（Feature Engineering）
- **量的データ**: 既存のカラムを使って四則演算（例: Age + Fare）を行い、新しいカラム（特徴量）を作成できます。
- **質的データ**: 複数のカラムを条件（AND/ORなど）で組み合わせて新しい特徴量を作成する機能があるようです。

### データ可視化・グラフ作成
以下の4種類のグラフを描画してデータを分析できます。
- **散布図**: 2変数間の関係を表示（ターゲット変数での色分けも可能）。
- **ヒストグラム**: データの分布状況を表示。
- **箱ひげ図**: データのばらつきや外れ値を表示。
- **円グラフ**: カテゴリごとの割合を表示。

グラフの軸（X軸、Y軸）やターゲット変数をプルダウンで自由に切り替えられます。

### 使い方ガイド
- アプリケーション内に各ページ（ファイル管理、データ情報、欠損値処理など）の詳細な操作説明を確認できるヘルプ機能が搭載されています。

## 動作デモ

<iframe width="100%" height="400" src="https://www.youtube.com/embed/qpZPhyhB5s8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 技術スタック

### フロントエンド
- **言語**: TypeScript
- **フレームワーク**: React, Redux Toolkit, React Router
- **UIライブラリ**: Material UI (MUI)
- **HTTPクライアント**: Axios
- **その他**: SweetAlert2, React Markdown
- **ビルドツール**: Vite
- **パッケージ管理**: npm

### バックエンド (Python)
- **言語**: Python
- **フレームワーク**: Flask
- **データ分析**: Pandas, Scikit-learn, SciPy, Seaborn
- **AI**: Google Generative AI
- **パッケージ管理**: Rye

### バックエンド (Go)
- **言語**: Go
- **フレームワーク**: Gin
- **ORM**: GORM
- **データベース**: PostgreSQL (Driver: pgx)

### インフラ・その他
- Docker / Docker Compose
- Vercel (デプロイ先)

## リンク
- [ソースコード (GitHub)](https://github.com/riku1021/SimpLyz)
