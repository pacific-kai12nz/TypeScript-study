// TypeScript 基本的な型 練習問題

/**
 * 問題1: プリミティブ型
 * 
 * 以下の変数に適切な型を指定してください。
 * それぞれの変数の値がどの型になるか考えてみましょう。
 */

// 1. 名前を格納する変数
// ここにコードを書いてください
let userName: string = "john jayden"; 

// 2. 年齢を格納する変数
// ここにコードを書いてください
let age: number = 28;

// 3. 学生かどうかを格納する変数
// ここにコードを書いてください
let workingAdult: boolean = false;
let student: boolean = age >= 22;

if (student) {
    console.log("学生です");
} else {
    console.log("社会人です");
}

/**
 * 問題2: 配列型
 * 
 * 以下の配列に適切な型を指定してください。
 */

// 1. 数値の配列を作成してください（好きな数字を5つ入れてください）
// ここにコードを書いてください
let numbers: number[] = [2, 5, 12, 22, 25];

// 2. 文字列の配列を作成してください（好きな果物の名前を3つ入れてください）
// ここにコードを書いてください
let fruits: string[] = ["banana","apple","strawberry"];

// 3. 上記で作成した数値の配列の各要素を2倍にした新しい配列を作成してください
// ここにコードを書いてください
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);


/**
 * 問題3: 配列の操作
 * 
 * 以下の配列を操作してみましょう。
 */

// 次の配列を使って問題に取り組んでください
const colors: string[] = ["red", "blue", "green"];

// 1. 配列の最後に "yellow" を追加してください
// ここにコードを書いてください
colors.push("yellow");
console.log(colors);

// 2. インデックスを使って "blue" にアクセスし、コンソールに表示してください
// ここにコードを書いてください
console.log(colors[1]);

// 3. for文を使って、各色を「"色: " + 色名」の形式でコンソールに表示してください
// ここにコードを書いてください
for (let i = 0; i < colors.length; i++) {
    console.log(`色: ${colors[i]}`);
}


/**
 * 問題4: オブジェクト型
 * 
 * 以下の条件に合うオブジェクトを作成してください。
 */

// 1. 本を表すオブジェクトを作成してください。
//    タイトル(string型)、著者(string型)、ページ数(number型)、既読(boolean型)のプロパティを持つこと
// ここにコードを書いてください
const book: { title: string; author: string; pages: number; read: boolean } = {
    title: "タイトルを入力",
    author: "著者名を入力",
    pages: 200,
    read: false
};

// 2. 上記で作成した本の「既読」ステータスを反対に変更し、結果を表示してください
// ここにコードを書いてください
book.read = !book.read;
console.log(`本「${book.title}」の既読状態: ${book.read ? "読んだ" : "まだ読んでいない"}`);


/**
 * 問題5: オブジェクトの配列
 * 
 * オブジェクトの配列を操作してみましょう。
 */

// 1. 以下のような構造を持つ「ユーザー」の配列を作成してください。
//    少なくとも2人分のデータを含めること。
//    - id (number型)
//    - name (string型)
//    - isPremium (boolean型)
//    - email (string型、オプショナル)
// ここにコードを書いてください

const users: { id: number; name: string; isPremium: boolean; email?: string }[] = [
    {
    id: 1,
    name: "田中太郎",
    isPremium: true,
    email: "tanaka@example.com"
    },
    {
    id: 2,
    name: "鈴子花子",
    isPremium: false
    }
];

// 2. 作成したユーザー配列から、isPremiumがtrueのユーザーだけを抽出して新しい配列を作成し、表示してください
// ここにコードを書いてください
const premiumUsers = users.filter(user => user.isPremium);
console.log(premiumUsers);


/**
 * コンパイルと実行方法:
 * 
 * 1. このファイルをコンパイルします:
 *    npx tsc 2_基本的な型_practice.ts
 * 
 * 2. 生成されたJavaScriptファイルを実行します:
 *    node 2_基本的な型_practice.js
 */
