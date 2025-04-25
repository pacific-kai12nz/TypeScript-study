// 課題1: プリミティブ型の活用
// 以下の変数に適切な型アノテーションを追加してください。

// 名前（文字列型）
let 名前: string = "佐藤";

// 年齢（数値型）
let 年齢: number = 25;

// 学生かどうか（真偽値型）
let 学生: boolean = false;

// 課題2: 配列の型指定
// 次の配列に適切な型アノテーションを追加してください。

// 果物の名前を格納する配列
let 果物リスト: string[] = ["りんご", "バナナ", "みかん"];

// テストの点数を格納する配列
let 点数リスト: number[] = [85, 90, 78, 92];

// 果物の在庫状況を格納する配列（true: 在庫あり、false: 在庫なし）
let 在庫状況: boolean[] = [true, false, true, true];

// 課題3: オブジェクト型の活用
// 次のオブジェクトに適切な型アノテーションを追加してください。

// 商品情報
let 商品: {
  id: number;
  名前: string;
  価格: number;
  在庫: boolean;
  スペック: {
    CPU: string;
    メモリ: string;
    ストレージ: string;
  }
} = {
  id: 101,
  名前: "ノートパソコン",
  価格: 89800,
  在庫: true,
  スペック: {
    CPU: "Core i5",
    メモリ: "8GB",
    ストレージ: "512GB SSD"
  }
};

// 課題4: 複数の商品を管理する配列
// 以下の商品リスト配列に型アノテーションを追加してください。
// ヒント: 上で定義した商品の型を応用してみましょう。

let 商品リスト: {
  id: number;
  名前: string;
  価格: number;
  在庫: boolean;
  スペック: {
    CPU: string;
    メモリ: string;
    ストレージ: string;
  }
}[] = [
  {
    id: 101,
    名前: "ノートパソコン",
    価格: 89800,
    在庫: true,
    スペック: {
      CPU: "Core i5",
      メモリ: "8GB",
      ストレージ: "512GB SSD"
    }
  },
  {
    id: 102,
    名前: "デスクトップPC",
    価格: 97200,
    在庫: false,
    スペック: {
      CPU: "Core i7",
      メモリ: "16GB",
      ストレージ: "1TB HDD"
    }
  },
  {
    id: 103,
    名前: "タブレット",
    価格: 49800,
    在庫: true,
    スペック: {
      CPU: "Core m3",
      メモリ: "4GB",
      ストレージ: "128GB SSD"
    }
  }
];

// 課題5: 関数で商品検索
// 商品IDを受け取り、該当する商品を返す関数を実装してください。
// すべての引数と戻り値に型アノテーションを追加してください。
// ヒント: 該当する商品がない場合はundefinedを返します。

function 商品検索(id: number): {
  id: number;
  名前: string;
  価格: number;
  在庫: boolean;
  スペック: {
    CPU: string;
    メモリ: string;
    ストレージ: string;
  }
} | undefined {
  // forループを使って商品を検索
  for (let i = 0; i < 商品リスト.length; i++) {
    if (商品リスト[i].id === id) {
      return 商品リスト[i];
    }
  }
  // 一致する商品がなかった場合はundefinedを返す
  return undefined;
}

// 関数を呼び出して結果を確認
const 検索結果 = 商品検索(102);
console.log(検索結果);
