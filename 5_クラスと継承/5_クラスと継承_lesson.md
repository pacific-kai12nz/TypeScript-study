# 5. クラスと継承

TypeScriptはJavaScriptのクラス構文をサポートし、さらに型の安全性を追加しています。クラスを使うことで、オブジェクト指向プログラミングの概念を活用できます。

## クラスの基本

### クラスの定義と使用

TypeScriptでクラスを定義するには、`class`キーワードを使います。

```typescript
// 基本的なクラスの定義
class 人物 {
  // プロパティ（フィールド）
  名前: string;
  年齢: number;

  // コンストラクタ - インスタンス化時に呼ばれるメソッド
  constructor(名前: string, 年齢: number) {
    this.名前 = 名前;
    this.年齢 = 年齢;
  }

  // メソッド
  挨拶(): void {
    console.log(`こんにちは、${this.名前}です。${this.年齢}歳です。`);
  }

  // 引数を取るメソッド
  誕生日を祝う(メッセージ: string): string {
    this.年齢 += 1;
    return `${メッセージ}、${this.名前}さん！${this.年齢}歳のお誕生日おめでとう！`;
  }
}

// クラスのインスタンス化
const 田中さん = new 人物("田中太郎", 30);

// プロパティへのアクセス
console.log(田中さん.名前);  // "田中太郎"
console.log(田中さん.年齢);  // 30

// メソッドの呼び出し
田中さん.挨拶();  // "こんにちは、田中太郎です。30歳です。"
const メッセージ = 田中さん.誕生日を祝う("ハッピーバースデー");
console.log(メッセージ);  // "ハッピーバースデー、田中太郎さん！31歳のお誕生日おめでとう！"
```

### プロパティの初期化と省略記法

TypeScriptでは、コンストラクタの引数にアクセス修飾子を付けることで、プロパティの宣言と初期化を省略できます。

```typescript
class 人物 {
  // コンストラクタの引数でプロパティを宣言・初期化
  constructor(public 名前: string, public 年齢: number) {
    // publicキーワードを使うことで、
    // this.名前 = 名前; と this.年齢 = 年齢; が自動的に行われる
  }

  挨拶(): void {
    console.log(`こんにちは、${this.名前}です。${this.年齢}歳です。`);
  }
}
```

### 読み取り専用プロパティ

`readonly`キーワードを使うと、初期化後に変更できないプロパティを定義できます。

```typescript
class 人物 {
  // 読み取り専用プロパティ
  readonly id: number;
  名前: string;

  constructor(id: number, 名前: string) {
    this.id = id;
    this.名前 = 名前;
  }
}

const 田中さん = new 人物(1, "田中太郎");
console.log(田中さん.id);  // 1
// 田中さん.id = 2;  // エラー: 読み取り専用プロパティは変更できません
```

### ゲッターとセッター

TypeScriptでは、プロパティへのアクセスを制御するためのゲッターとセッターを定義できます。

```typescript
class 銀行口座 {
  private _残高: number = 0;  // プライベートプロパティは外部から直接アクセスできない

  // ゲッター
  get 残高(): number {
    console.log("残高を確認しています...");
    return this._残高;
  }

  // セッター
  set 残高(金額: number) {
    if (金額 < 0) {
      throw new Error("残高はマイナスにできません");
    }
    console.log(`残高を${金額}円に更新しています...`);
    this._残高 = 金額;
  }

  // 入金メソッド
  入金(金額: number): void {
    if (金額 <= 0) {
      throw new Error("入金額は正の数でなければなりません");
    }
    this.残高 += 金額;  // セッターを使用
  }

  // 出金メソッド
  出金(金額: number): void {
    if (金額 <= 0) {
      throw new Error("出金額は正の数でなければなりません");
    }
    if (金額 > this.残高) {  // ゲッターを使用
      throw new Error("残高不足です");
    }
    this.残高 -= 金額;  // セッターを使用
  }
}

const 口座 = new 銀行口座();
口座.入金(10000);
console.log(口座.残高);  // ゲッターを使用: "残高を確認しています..." と表示され、10000が返される
口座.出金(3000);
console.log(口座.残高);  // 7000
// 口座.出金(10000);  // エラー: "残高不足です"
// 口座.残高 = -5000;  // エラー: "残高はマイナスにできません"
```

## アクセス修飾子（public, private, protected）

TypeScriptには3つのアクセス修飾子があり、クラスメンバー（プロパティとメソッド）の可視性を制御します。

### public

`public`は最も一般的なアクセス修飾子で、どこからでもアクセス可能です。明示的に指定しない場合、デフォルトで`public`となります。

```typescript
class 動物 {
  public 名前: string;  // 明示的にpublicと指定

  constructor(名前: string) {
    this.名前 = 名前;
  }

  public 鳴く(): void {  // 明示的にpublicと指定
    console.log("鳴き声...");
  }
}

const 動物1 = new 動物("ポチ");
console.log(動物1.名前);  // "ポチ" - publicなのでアクセス可能
動物1.鳴く();  // "鳴き声..." - publicなのでアクセス可能
```

### private

`private`修飾子が付いたメンバーは、定義されたクラス内からのみアクセス可能です。

```typescript
class 動物 {
  private 種類: string;
  public 名前: string;

  constructor(種類: string, 名前: string) {
    this.種類 = 種類;
    this.名前 = 名前;
  }

  public 詳細表示(): void {
    // 同じクラス内ではprivateメンバーにアクセス可能
    console.log(`これは${this.種類}の${this.名前}です。`);
  }
}

const 動物1 = new 動物("犬", "ポチ");
console.log(動物1.名前);  // "ポチ" - publicなのでアクセス可能
// console.log(動物1.種類);  // エラー: '種類'はprivateなのでクラス外からアクセスできない
動物1.詳細表示();  // "これは犬のポチです。" - publicメソッド経由でprivateメンバーの情報を表示
```

### protected

`protected`修飾子が付いたメンバーは、定義されたクラスとそのサブクラス（継承したクラス）からアクセス可能です。

```typescript
class 動物 {
  protected 種類: string;
  public 名前: string;

  constructor(種類: string, 名前: string) {
    this.種類 = 種類;
    this.名前 = 名前;
  }

  public 鳴く(): void {
    console.log("鳴き声...");
  }
}

class 犬 extends 動物 {
  private 犬種: string;

  constructor(名前: string, 犬種: string) {
    super("犬", 名前);  // 親クラスのコンストラクタを呼び出す
    this.犬種 = 犬種;
  }

  public 詳細表示(): void {
    // protectedメンバーは子クラスからアクセス可能
    console.log(`これは${this.種類}の${this.名前}で、犬種は${this.犬種}です。`);
  }

  public 吠える(): void {
    console.log("ワンワン！");
  }
}

const 犬1 = new 犬("ポチ", "柴犬");
console.log(犬1.名前);  // "ポチ" - publicなのでアクセス可能
// console.log(犬1.種類);  // エラー: '種類'はprotectedなのでクラス外からアクセスできない
// console.log(犬1.犬種);  // エラー: '犬種'はprivateなのでクラス外からアクセスできない
犬1.詳細表示();  // "これは犬のポチで、犬種は柴犬です。" - publicメソッド経由でprotectedメンバーの情報を表示
犬1.鳴く();  // "鳴き声..." - 親クラスのメソッドを継承
犬1.吠える();  // "ワンワン！" - 子クラス固有のメソッド
```

## 継承と実装

### クラスの継承

TypeScriptでは、`extends`キーワードを使ってクラスを継承できます。継承により、親クラスのプロパティとメソッドを子クラスで再利用できます。

```typescript
// 親クラス（基底クラス）
class 動物 {
  名前: string;

  constructor(名前: string) {
    this.名前 = 名前;
  }

  鳴く(): void {
    console.log("鳴き声...");
  }

  移動する(): void {
    console.log(`${this.名前}が移動しています。`);
  }
}

// 子クラス（派生クラス）
class 犬 extends 動物 {
  犬種: string;

  constructor(名前: string, 犬種: string) {
    super(名前);  // 親クラスのコンストラクタを呼び出す
    this.犬種 = 犬種;
  }

  // メソッドのオーバーライド（上書き）
  鳴く(): void {
    console.log("ワンワン！");
  }

  // 子クラス固有のメソッド
  吠える(): void {
    console.log(`${this.名前}が吠えています：バウバウ！`);
  }
}

// 別の子クラス
class 猫 extends 動物 {
  constructor(名前: string) {
    super(名前);
  }

  // メソッドのオーバーライド
  鳴く(): void {
    console.log("ニャーニャー！");
  }

  // 子クラス固有のメソッド
  毛づくろい(): void {
    console.log(`${this.名前}が毛づくろいをしています。`);
  }
}

const 犬1 = new 犬("ポチ", "柴犬");
犬1.鳴く();  // "ワンワン！"
犬1.移動する();  // "ポチが移動しています。"
犬1.吠える();  // "ポチが吠えています：バウバウ！"

const 猫1 = new 猫("タマ");
猫1.鳴く();  // "ニャーニャー！"
猫1.移動する();  // "タマが移動しています。"
猫1.毛づくろい();  // "タマが毛づくろいをしています。"
```

### 抽象クラスと抽象メソッド

抽象クラスは、直接インスタンス化できないクラスで、継承のためのベースとして機能します。抽象メソッドは実装を持たず、サブクラスで実装することが強制されます。

```typescript
// 抽象クラス
abstract class 図形 {
  // 通常のプロパティ
  色: string;

  constructor(色: string) {
    this.色 = 色;
  }

  // 通常のメソッド
  描画情報表示(): void {
    console.log(`色: ${this.色}`);
  }

  // 抽象メソッド（実装なし）
  abstract 面積計算(): number;
  abstract 周囲長計算(): number;
}

// 抽象クラスを継承した具象クラス
class 円 extends 図形 {
  半径: number;

  constructor(色: string, 半径: number) {
    super(色);
    this.半径 = 半径;
  }

  // 抽象メソッドの実装
  面積計算(): number {
    return Math.PI * this.半径 * this.半径;
  }

  周囲長計算(): number {
    return 2 * Math.PI * this.半径;
  }
}

class 長方形 extends 図形 {
  幅: number;
  高さ: number;

  constructor(色: string, 幅: number, 高さ: number) {
    super(色);
    this.幅 = 幅;
    this.高さ = 高さ;
  }

  // 抽象メソッドの実装
  面積計算(): number {
    return this.幅 * this.高さ;
  }

  周囲長計算(): number {
    return 2 * (this.幅 + this.高さ);
  }
}

// const 図形1 = new 図形("赤");  // エラー: 抽象クラスはインスタンス化できない

const 円1 = new 円("青", 5);
console.log(`円の面積: ${円1.面積計算()}`);  // "円の面積: 78.53981633974483"
console.log(`円の周囲長: ${円1.周囲長計算()}`);  // "円の周囲長: 31.41592653589793"
円1.描画情報表示();  // "色: 青"

const 長方形1 = new 長方形("緑", 4, 6);
console.log(`長方形の面積: ${長方形1.面積計算()}`);  // "長方形の面積: 24"
console.log(`長方形の周囲長: ${長方形1.周囲長計算()}`);  // "長方形の周囲長: 20"
長方形1.描画情報表示();  // "色: 緑"
```

### インターフェースの実装

TypeScriptでは、`implements`キーワードを使ってインターフェースを実装できます。インターフェースはクラスが持つべきメンバーを定義します。

```typescript
// インターフェース
interface 鳴く能力 {
  鳴く(): void;
}

interface 移動能力 {
  移動する(距離: number): void;
}

// 複数のインターフェースを実装するクラス
class 犬 implements 鳴く能力, 移動能力 {
  名前: string;

  constructor(名前: string) {
    this.名前 = 名前;
  }

  // 鳴く能力インターフェースの実装
  鳴く(): void {
    console.log("ワンワン！");
  }

  // 移動能力インターフェースの実装
  移動する(距離: number): void {
    console.log(`${this.名前}が${距離}メートル走りました。`);
  }

  // クラス独自のメソッド
  吠える(): void {
    console.log(`${this.名前}が吠えています。`);
  }
}

// インターフェースを変数の型として使用
function 鳴かせる(動物: 鳴く能力): void {
  動物.鳴く();
}

function 移動させる(動物: 移動能力, 距離: number): void {
  動物.移動する(距離);
}

const 犬1 = new 犬("ポチ");
鳴かせる(犬1);  // "ワンワン！"
移動させる(犬1, 100);  // "ポチが100メートル走りました。"
犬1.吠える();  // "ポチが吠えています。"
```

TypeScriptのクラスと継承を使うことで、コードを構造化し、再利用性を高め、型安全性を確保することができます。オブジェクト指向プログラミングの原則を活用して、より堅牢なアプリケーションを開発できるようになります。
