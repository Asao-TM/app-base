# 時系列過学習シミュレーター

`simulator.html` をブラウザで開くと、時系列モデルの
- Underfitting
- Good Fit
- Overfitting

の違いを、学習/テスト分割位置を変えながら視覚的に確認できます。

追加で以下も確認できます。
- 乱数シードを固定して同じ仮想データを再現
- 学習RMSE / テストRMSE / テスト方向正解率の比較

## 実行方法

```bash
python3 -m http.server 8000
```

その後、`http://localhost:8000/simulator.html` を開いてください。
