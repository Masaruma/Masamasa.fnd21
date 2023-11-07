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


// オーディオ再生のエレメント取得
const playButton1 = document.querySelector(".play1");
const playButton2 = document.querySelector(".play2");
const audio1 = document.querySelectorAll('audio')[0];
const audio2 = document.querySelectorAll('audio')[1];

// オーディオ再生関数

const playAudio1 = () => {audio1.play()}
const playAudio2 = () => {audio2.play()}
// タイマーボタンを押すと再生
button.addEventListener("click", playAudio1);
button.addEventListener("click", playAudio2);

// 10分経過後鐘が鳴る
button.addEventListener("click", () => setTimeout(playAudio1, 600 * 1000));
