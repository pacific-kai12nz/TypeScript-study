// TypeScript 基本 練習問題

/**
 * 問題1: 型の指定
 * 
 * 以下の変数に適切な型を指定してください。
 * JavaScriptとTypeScriptの違いを体験しましょう。
 */

// 名前を格納する変数を適切な型で宣言してください
// 例: let myName: string = "John Doe";
let myName: string = "John Doe";



/**
 * 問題2: 型エラーの体験
 * 
 * 以下のコードには型エラーがあります。
 * コメントを外して、エラーメッセージを確認してみましょう。
 * その後、コードを修正して型エラーを解消してください。
 */

function multiply(a: number, b: number): number {
  return a * b;
}

multiply(10, 5);



/**
 * 問題3: 基本的な関数と型
 * 
 * 以下の関数を完成させてください。
 * 2つの数値を引数として受け取り、その合計を返す関数です。
 * 適切な型アノテーションを付けてください。
 */

// ここに sum 関数を定義してください
function sum(a: number, b: number): number {
  return a + b;
}

sum(5, 9); // 結果: 14


/**
 * 問題4: TypeScriptの実行
 * 
 * このファイルをTypeScriptコンパイラでコンパイルし、
 * 生成されたJavaScriptファイルを実行してみましょう。
 * 
 * 以下のコードを使って、コンソールに "Hello, TypeScript!" と表示してください。
 */

// ここにコードを書いてください
function greet(): void {
  console.log("Hello, TypeScript!");
}

greet();


/**
 * 実行方法:
 * 
 * 1. このファイルをコンパイルします:
 *    npx tsc 1_TypeScriptの基本_practice.ts
 * 
 * 2. 生成されたJavaScriptファイルを実行します:
 *    node 1_TypeScriptの基本_practice.js
 * 
 * コンパイル時にエラーが表示される場合は、型に関する問題があります。
 * エラーメッセージを読んで、コードを修正してみましょう。
 */
