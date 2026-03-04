# One App Growth OS

売れるアプリを作るために、次の4点を毎日実行するためのシンプルなWebアプリです。

1. 1つのアプリに集中する
2. 集客を徹底する（投稿数の可視化）
3. オンボーディング改善を記録する
4. マーケと開発の時間配分を管理する

## 使い方

`index.html` をブラウザで開くだけで動作します。

## デプロイ（GitHub Pages）

このリポジトリには GitHub Pages へ自動デプロイする Workflow を追加済みです。

1. GitHub のリポジトリ設定で **Pages** を開く
2. **Build and deployment** の Source を **GitHub Actions** にする
3. `work`（または `main` / `master`）ブランチに push する
4. Actions の `Deploy static site to GitHub Pages` が完了すると公開URLが発行される

> 補足: この実行環境からは GitHub への認証情報がないため、リモートへの push 自体は行っていません。
