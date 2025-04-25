// 課題1: 型エラーを体験してみよう
// 以下の関数は数値を2つ受け取り、その和を返す関数です。
// 関数に型アノテーションを追加し、TypeScriptの型チェック機能を体験してみましょう。

function addNumbers(a: number, b: number): number {
  return a + b;
}

// 以下のコードを実行してみて、結果を確認しましょう
console.log(addNumbers(5, 10));        // 期待する結果: 15
console.log(addNumbers("5", 10));      // TypeScriptでエラーになるべき箇所

// 課題2: TypeScriptの型アノテーションを追加しよう
// 以下の関数に適切な型アノテーションを追加して、引数と戻り値の型を指定してください。
// firstName と lastName は文字列、age は数値、戻り値は文字列になるようにしましょう。

function createGreeting(firstName: string, lastName: string, age: number): string {
  return `こんにちは、${firstName} ${lastName}さん！あなたは${age}歳ですね。`;
}

// 関数を呼び出して、結果を確認しましょう
console.log(createGreeting("山田", "太郎", 30));

// 課題3: 型エラーを修正しよう
// 以下のコードには型の問題があります。エラーメッセージを確認して修正してください。

function calculateArea(width: number, height: number): number {
  return width * height;
}

const area = calculateArea(10, 20);
console.log(`面積は ${area} 平方単位です。`);
