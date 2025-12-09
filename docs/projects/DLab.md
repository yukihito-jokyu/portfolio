# DLab

## 概要
**開発時期**: 2024年2月 - 2024年10月

深層学習（Deep Learning）を学習・実践するためのWebアプリケーションです。
ユーザーが構築・学習させたモデルを客観的に比較・評価できるプラットフォームを提供し、学習効果を高めることを目的としています。

## 主な機能

1. **モデル構築機能（GUI操作）**
   プログラミングコードを書かずに、画面上の操作だけで直感的にモデルを作成できます。
   - **レイヤーの配置・編集**: Conv2d（畳み込み）、MaxPool2d（プーリング）、ReLU（活性化関数）、Flattenなどのタイルをドラッグ＆ドロップで追加・削除・並べ替えができます。
   - **ハイパーパラメータ設定**: 各レイヤーをクリックし、右下のメニューから「カーネルサイズ」「出力チャンネル数」「パディング」などの数値をリストから選択して詳細に設定できます。
   - **データフローの可視化**: レイヤーを追加・変更すると、各段階でのデータの出力サイズ（例: 32, 32, 3 → 27, 27, 64）がリアルタイムで表示され、画像がどう処理されていくかが数値で分かります。

2. **データ確認・前処理機能**
   学習に使用する画像データセットの状態を確認できます。
   - **Before/After比較**: 前処理（例: ZCA白色化など）を行った際、元の画像と処理後の画像がどのように変化するかを左右の画面で比較・確認できます。

3. **学習管理・モニタリング機能**
   モデルの学習プロセスを制御し、状況をリアルタイムで確認できます。
   - **学習パラメータ設定**: バッチサイズ、学習回数（Epoch）、学習率、最適化手法（Adamなど）をドロップダウンで設定できます。各用語には説明モーダルが表示され、学習をサポートします。
   - **学習曲線（Learning Curve）の表示**: 学習中に「Accuracy（正解率）」と「Loss（損失）」の推移グラフがエポックごとにリアルタイムで更新・描画されます。

4. **推論・評価の可視化機能**
   学習済みモデルが実際にどのように判断しているかを確認できます。
   - **画像分類（Image Classification）**: 入力画像に対し、モデルが推論したラベルを表示します。正解・不正解が視覚的にわかりやすく表示されます（例: 車の画像に対し「automobile」と出れば正解、「bird」と出れば不正解）。
   - **強化学習（Reinforcement Learning）**: ゲーム環境（動画ではFlappy Bird風のゲーム）において、学習したAI（エージェント）がどのような行動をとるかをアニメーションで確認できます。

5. **モデル管理・共有機能**
   作成したモデルの保存や比較、他ユーザーとの競争が可能です。
   - **モデル比較**: 過去に作成した複数のモデルを一覧表示し、精度（Accuracy）や損失（Loss）で並べ替えや比較ができます。
   - **モデルのダウンロード**: 作成したモデルをローカル環境にダウンロードできます。
   - **リーダーボード機能**: モデルの精度に基づいたユーザーランキングが表示され、他のユーザーと性能を競うことができます。
   - **ユーザープロフィール**: 自分の過去のプロジェクトやランクを確認できます。

## 動作デモ
### システム構成図
![システム構成図](/projects/DLab/DLab-Board.jpg)

### デモ映像

<iframe width="100%" height="400" src="https://www.youtube.com/embed/zl20d-L9-g4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 技術スタック

### フロントエンド
- **言語**: JavaScript (React)
- **ライブラリ/フレームワーク**:
    - React, React Router
    - Material UI (MUI)
    - Chart.js (react-chartjs-2)
    - React DnD (Drag and Drop)
    - Socket.io Client
    - Firebase

### バックエンド
- **言語**: Python
- **フレームワーク**: Flask
- **ライブラリ**:
    - PyTorch, Torchvision (深層学習)
    - OpenCV (画像処理)
    - NumPy, Matplotlib, Scikit-learn (データ分析・可視化)
    - OpenAI Gym (強化学習環境)
    - Pygame
    - Firebase Admin SDK
    - Flask-SocketIO, Flask-SQLAlchemy

## リンク
- [ソースコード (GitHub)](https://github.com/yukihito-jokyu/DLab)
