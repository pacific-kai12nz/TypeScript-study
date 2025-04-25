// TypeScript 関数とその型 練習問題

/**
 * 問題1: 基本的な関数の型指定
 * 
 * 以下の関数を完成させてください。
 * 2つの数値を引数として受け取り、その積（掛け算の結果）を返す関数です。
 * 適切な型アノテーションを付けてください。
 */

// ここに multiply 関数を定義してください
function multiply(a: number, b: number): number {
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
function printMessage(message: string, count: number): void {
    for (let i = 0; i < count; i++) {
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
function displayUserInfo(name: string, age: number, email?: string): void {
    console.log(`名前: ${name}`);
    console.log(`年齢: ${age}`);
    
    if(email) {
        console.log(`メールアドレス: ${email}`);
    } else {
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
function calculateDiscount(price: number, discountRate: number = 10): number {
    // 割引率をパーセント表記から小数に変換（例: 10% → 0.1）
    const discountDecimal = discountRate / 100;
    
    // 割引額を計算
    const discountAmount = price * discountDecimal;
    
    // 割引後の価格を返す
    return price - discountAmount;
}




/**
 * 問題5: 関数型の変数
 * 
 * 数値配列を操作する関数型を定義し、その型を使った関数を作成してください。
 * 
 * 1. 数値配列と、数値を操作する関数を引数に取る高階関数 processNumbers を作成
 * 2. processNumbers は、配列の各要素に対して渡された関数を適用し、結果の配列を返す
 * 3. 2つの操作関数 (2倍にする、2乗する) を作成
 */

// ここに NumberOperation 型を定義してください
type NumberOperation = (num: number) => number;

// ここに processNumbers 関数を定義してください
function processNumbers(numbers: number[], operation: NumberOperation): number[] {
    const result: number[] = [];
    for (const num of numbers) {
        result.push(operation(num));
    }
    return result;
}

// ここに2倍にする関数と2乗する関数を定義してください
const double: NumberOperation = (num) => num * 2;
const square: NumberOperation = (num) => num * num;


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
console.log(multiply(3, 4));  // 期待される結果: 12

console.log("\n問題2の結果:");
printMessage("Hello!", 3);  // 期待される結果: Hello!が3回表示される

console.log("\n問題3の結果:");
displayUserInfo("鈴木一郎", 28);  // メールアドレスなし
displayUserInfo("佐藤花子", 32, "hanako@example.com");  // メールアドレスあり

console.log("\n問題4の結果:");
console.log(calculateDiscount(1000));  // 期待される結果: 900 (10%割引)
console.log(calculateDiscount(1000, 20));  // 期待される結果: 800 (20%割引)

console.log("\n問題5の結果:");
const numberArray = [1, 2, 3, 4, 5];
console.log(processNumbers(numberArray, double));  // 期待される結果: [2, 4, 6, 8, 10]
console.log(processNumbers(numberArray, square));  // 期待される結果: [1, 4, 9, 16, 25]
