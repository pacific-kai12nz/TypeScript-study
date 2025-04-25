// TypeScript 関数とその型 練習問題
/**
 * 問題1: 基本的な関数の型指定
 *
 * 以下の関数を完成させてください。
 * 2つの数値を引数として受け取り、その積（掛け算の結果）を返す関数です。
 * 適切な型アノテーションを付けてください。
 */
// ここに multiply 関数を定義してください
function multiply(a, b) {
    return a * b;
}
/**
 * 問題2: 戻り値のない関数
 *
 * 以下の関数を完成させてください。
 * メッセージと回数を受け取り、そのメッセージを指定された回数だけ
 * コンソールに出力する関数です。何も返さないため、戻り値の型は void です。
 */
// ここに printMessage 関数を定義してください
function printMessage(message, count) {
    for (var i = 0; i < count; i++) {
        console.log(message);
    }
}
/**
 * 問題3: オプションパラメータ
 *
 * ユーザーの情報を表示する関数を作成してください。
 * - 名前（必須）
 * - 年齢（必須）
 * - メールアドレス（オプション）
 *
 * メールアドレスが指定されていれば表示し、なければ「メールアドレスは登録されていません」と表示します。
 */
// ここに displayUserInfo 関数を定義してください
function displayUserInfo(name, age, email) {
    console.log("\u540D\u524D: ".concat(name));
    console.log("\u5E74\u9F62: ".concat(age));
    if (email) {
        console.log("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9: ".concat(email));
    }
    else {
        console.log("メールアドレスは登録されていません");
    }
}
/**
 * 問題4: デフォルトパラメータ
 *
 * 以下の関数を完成させてください。
 * 商品の価格と割引率を受け取り、割引後の価格を計算する関数です。
 * 割引率が指定されなかった場合は、デフォルトで10%とします。
 */
// ここに calculateDiscount 関数を定義してください
function calculateDiscount(price, discountRate) {
    if (discountRate === void 0) { discountRate = 10; }
    // 割引率をパーセント表記から小数に変換（例: 10% → 0.1）
    var discountDecimal = discountRate / 100;
    // 割引額を計算
    var discountAmount = price * discountDecimal;
    // 割引後の価格を返す
    return price - discountAmount;
}
// ここに processNumbers 関数を定義してください
function processNumbers(numbers, operation) {
    var result = [];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        result.push(operation(num));
    }
    return result;
}
// ここに2倍にする関数と2乗する関数を定義してください
var double = function (num) { return num * 2; };
var square = function (num) { return num * num; };
/**
 * コンパイルと実行方法:
 *
 * 1. このファイルをコンパイルします:
 *    npx tsc 3_関数とその型_practice.ts
 *
 * 2. 生成されたJavaScriptファイルを実行します:
 *    node 3_関数とその型_practice.js
 */
// テスト用コード
console.log("問題1の結果:");
console.log(multiply(3, 4)); // 期待される結果: 12
console.log("\n問題2の結果:");
printMessage("Hello!", 3); // 期待される結果: Hello!が3回表示される
console.log("\n問題3の結果:");
displayUserInfo("鈴木一郎", 28); // メールアドレスなし
displayUserInfo("佐藤花子", 32, "hanako@example.com"); // メールアドレスあり
console.log("\n問題4の結果:");
console.log(calculateDiscount(1000)); // 期待される結果: 900 (10%割引)
console.log(calculateDiscount(1000, 20)); // 期待される結果: 800 (20%割引)
console.log("\n問題5の結果:");
var numberArray = [1, 2, 3, 4, 5];
console.log(processNumbers(numberArray, double)); // 期待される結果: [2, 4, 6, 8, 10]
console.log(processNumbers(numberArray, square)); // 期待される結果: [1, 4, 9, 16, 25]
