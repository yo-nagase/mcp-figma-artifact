# 🐛 React Hooks エラー修正

## 問題の概要

アプリケーション実行時に以下のエラーが発生していました：

```
Unhandled Runtime Error
Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
```

## 根本原因

`pages/index.js`と`pages/chat.js`の`handleScroll`関数内で`useRef(0)`を呼び出していたため、React Hooksのルールに違反していました。

### 問題のコード
```javascript
// ❌ 間違い
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const lastScrollTop = useRef(0) // Hooksはコールバック内で使用不可
  // ...
}
```

## 修正内容

### 1. Hook の移動
`lastScrollTop`をコンポーネントレベルで定義し、`handleScroll`関数内では参照のみ行うように修正。

```javascript
// ✅ 修正後
export default function Component() {
  const lastScrollTop = useRef(0) // コンポーネント本体で定義
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // lastScrollTop.currentを参照するのみ
      if (scrollTop > lastScrollTop.current && scrollTop > 100) {
        // ...
      }
      lastScrollTop.current = scrollTop
    }
    // ...
  }, [])
}
```

### 2. Next.js設定の修正
`next.config.js`から非推奨の設定を削除：

```javascript
// ❌ 削除
experimental: {
  appDir: false, // 不要な設定
},
```

### 3. フォント読み込みの修正
Google Fontsの読み込みを`pages/_app.js`から`pages/_document.js`に移動して警告を解消：

```javascript
// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400&family=Roboto:wght@900&family=SF+Pro+Text:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

## 影響範囲

- ✅ プロフィールページ（`/`）のスクロール機能
- ✅ チャットページ（`/chat`）のスクロール機能
- ✅ Next.js設定警告の解消
- ✅ フォント読み込み警告の解消

## テスト結果

修正後、以下が正常に動作することを確認：

1. **スクロール機能**: ナビゲーションバーの自動非表示/表示
2. **ページ遷移**: プロフィール ⇄ チャット間の移動
3. **フォント表示**: Comfortaa、Roboto、SF Pro Textの正常な読み込み
4. **警告解消**: 開発サーバーでの警告メッセージ削除

## React Hooks のベストプラクティス

### ✅ 正しい使用法
- コンポーネントの本体（トップレベル）でのみ使用
- 条件分岐やループ内では使用しない
- カスタムフック内では使用可能

### ❌ 避けるべき使用法
- イベントハンドラー内での使用
- useEffect内の関数での使用
- 条件付きでの使用

## 参考リンク

- [React Hooks ルール](https://reactjs.org/docs/hooks-rules.html)
- [Next.js Font Optimization](https://nextjs.org/docs/basic-features/font-optimization)
- [Invalid Hook Call 診断](https://reactjs.org/link/invalid-hook-call)

---

**修正日**: 2024年12月
**修正者**: AI Assistant
**ステータス**: ✅ 完了 