# One App Growth OS

売れるアプリを作るために、次の4点を毎日実行するためのシンプルなWebアプリです。

1. 1つのアプリに集中する
2. 集客を徹底する（投稿数の可視化）
3. オンボーディング改善を記録する
4. マーケと開発の時間配分を管理する

## 使い方

`index.html` をブラウザで開くだけで動作します。

## デプロイ（GitHub Pages）

このリポジトリには `gh-pages` ブランチへ自動デプロイする Workflow を追加済みです。

1. GitHub のリポジトリ設定で **Pages** を開く
2. Source を **Deploy from a branch** に設定
3. Branch を **`gh-pages` / `(root)`** に設定
4. `work`（または `main` / `master`）へ push すると、Workflow が `gh-pages` を更新

> この方式は `configure-pages` API を使わないため、`Resource not accessible by integration` エラーの影響を受けにくい構成です。
