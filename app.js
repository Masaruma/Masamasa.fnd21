'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// domを取得
const container = document.querySelector(".container");
const text = document.getElementById("text");

// 息を数時間を設定
let totalTime = 20000;
let breathTime = 7000;
let holdTime = 0;



// テキストを切り替える関数
function zazenAnimation() {
  text.innerText = "息を吸います";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "息を吐きます";
    container.className = "container shrink";
    // setTimeout(() => {
    //   text.innerHTML = "吐きましょう";
    //   container.className = "container shrink";
    // }, holdTime);
  }, breathTime);
}



zazenAnimation();
setInterval(zazenAnimation, totalTime);

// ボタンを押し10分経過するとポップアップ
const button = document.getElementById("button")
button.addEventListener("click", () => setTimeout(() => alert("10分経過しました。"), 600 * 1000));