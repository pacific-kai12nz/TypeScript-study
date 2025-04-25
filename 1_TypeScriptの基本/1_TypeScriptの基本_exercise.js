"use strict";
// 課題1: 型エラーを体験してみよう
// 以下の関数は数値を2つ受け取り、その和を返す関数です。
// 関数に型アノテーションを追加し、TypeScriptの型チェック機能を体験してみましょう。
function addNumbers(a, b) {
    return a + b;
}
// 以下のコードを実行してみて、結果を確認しましょう
console.log(addNumbers(5, 10)); // 期待する結果: 15
console.log(addNumbers("5", 10)); // TypeScriptでエラーになるべき箇所
// 課題2: TypeScriptの型アノテーションを追加しよう
// 以下の関数に適切な型アノテーションを追加して、引数と戻り値の型を指定してください。
// firstName と lastName は文字列、age は数値、戻り値は文字列になるようにしましょう。
function createGreeting(firstName, lastName, age) {
    return "\u3053\u3093\u306B\u3061\u306F\u3001".concat(firstName, " ").concat(lastName, "\u3055\u3093\uFF01\u3042\u306A\u305F\u306F").concat(age, "\u6B73\u3067\u3059\u306D\u3002");
}
// 関数を呼び出して、結果を確認しましょう
console.log(createGreeting("山田", "太郎", 30));
// 課題3: 型エラーを修正しよう
// 以下のコードには型の問題があります。エラーメッセージを確認して修正してください。
function calculateArea(width, height) {
    return width * height;
}
var area = calculateArea(10, 20);
console.log("\u9762\u7A4D\u306F ".concat(area, " \u5E73\u65B9\u5358\u4F4D\u3067\u3059\u3002"));
