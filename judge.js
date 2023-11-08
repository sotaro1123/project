// フォームの要素を取得
const form = document.getElementById("form");
// フォームの送信イベントを取得
form.addEventListener("submit", function(event) {
  // デフォルトの送信動作をキャンセル
  event.preventDefault();
  // ユーザーの入力した解答を取得
  const answer = document.getElementById("answer").value;
  // 解答が正しいか誤っているかを判定
  if (answer == 2) {
    // 正しい場合は「正解です！」とアラートを表示
    alert("正しい解答が入力されました。");
  } else {
    // 誤っている場合は「不正解です！」とアラートを表示
    alert("正しい解答が入力されていません。");
  }
});

