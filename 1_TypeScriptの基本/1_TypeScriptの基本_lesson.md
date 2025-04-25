# TypeScriptの基本

## TypeScriptとは何か

TypeScriptは、Microsoftによって開発されたオープンソースのプログラミング言語で、JavaScriptの上位集合（スーパーセット）です。つまり、有効なJavaScriptコードは、そのままTypeScriptコードとしても動作します。

TypeScriptの最大の特徴は「静的型付け」です。従来のJavaScriptは「動的型付け」言語であり、変数の型が実行時に決まりますが、TypeScriptでは変数やパラメータに型を指定することができます。

## TypeScriptのメリット

### 1. バグを早期発見できる

TypeScriptは開発時（コンパイル時）に型エラーをチェックします。これにより、実行前にバグを発見できるため、デバッグが容易になります。

例：JavaScriptでは以下のコードはエラーにならず、実行時に予期せぬ動作になります。
```javascript
// JavaScriptの場合
function add(a, b) {
  return a + b;
}

add("5", 10); // "510" という文字列が返される
```

TypeScriptでは：
```typescript
// TypeScriptの場合
function add(a: number, b: number): number {
  return a + b;
}

add("5", 10); // コンパイルエラー：型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。
```

### 2. 優れたコード補完とドキュメント

TypeScriptは型情報を使って、コードエディタでの自動補完や、関数の引数や戻り値についての情報提供などを改善します。これにより、開発効率が向上し、APIの使い方をすぐに理解できるようになります。

### 3. 安全なリファクタリング

型システムにより、コードのリファクタリング（書き直し）がより安全になります。変更によって生じる問題を、コンパイル時に発見できます。

### 4. 大規模なコードベースでの共同作業

大きなプロジェクトや複数の開発者が参加するプロジェクトでは、型の情報があることで、他の開発者のコードを理解しやすくなります。

## 開発環境のセットアップ

TypeScriptを使うには、主に次の2つのツールが必要です：

1. **Node.js** - JavaScriptのランタイム環境
2. **TypeScript** - TypeScriptコンパイラ

これらは既にセットアップ済みです。

### TypeScriptコードの実行方法

1. `.ts`拡張子を持つファイルを作成します
2. TypeScriptコンパイラ（tsc）でJavaScriptにコンパイルします
3. 生成されたJavaScriptファイルをNode.jsで実行します

実際にやってみましょう：

1. `hello.ts`ファイルを作成して、簡単なTypeScriptコードを書きます：
```typescript
function greet(name: string): string {
  return `こんにちは、${name}さん！`;
}

console.log(greet("太郎"));
```

2. コンパイルして実行します：
```bash
# TypeScriptをJavaScriptにコンパイル
npx tsc hello.ts

# 生成されたJavaScriptを実行
node hello.js
```

TypeScriptでは、コードを書く際に型情報を追加することで、潜在的なバグを早期に発見でき、コードの品質と保守性が向上します。
