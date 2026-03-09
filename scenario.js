// scenario.js

window.scenarioData = [

/* =========================
   Phase 1：日常の延長
========================= */

{ character:"B", contentEN:"(The door opens without a knock. B walks in casually.)",
  contentJP:"（ドアがノックもなく開く）Bがそのまま入ってくる",
  duration:3000, weight:1, emotionChanges:{ bond:3 } },

{ character:"B", contentEN:"Yo. It's open.",
  contentJP:"「おい、開いてるぞ。」",
  duration:2000, weight:2, emotionChanges:{ bond:1 } },

{ character:"B", contentEN:"(B grabs a snack bag and starts eating without asking.)",
  contentJP:"（Bがスナックを袋ごと掴み、勝手に食べ始める）",
  duration:6000, weight:3, emotionChanges:{ bond:2 } },

{ character:"B", contentEN:"(B picks up the controller, mashing buttons.)",
  contentJP:"（Bがコントローラーを拾い、適当にボタンを押す）",
  duration:7000, weight:5, emotionChanges:{ bond:2 } },

{ character:"B", contentEN:"You still got this save file?",
  contentJP:"「なあ、このセーブまだ残ってんの？」",
  duration:4000, weight:6, emotionChanges:{ empathy:1 } },

/* =========================
   Phase 2：空気の変化
========================= */

{ character:"B", contentEN:"(B suddenly stops moving.)",
  contentJP:"（Bの動きが止まる）",
  duration:2000, weight:7, emotionChanges:{ anxiety:2 } },

{ character:"B", contentEN:"(B picks up the key from the desk.)",
  contentJP:"（Bが鍵をテーブルから拾う）",
  duration:4000, weight:8, emotionChanges:{ anxiety:3 } },

{ character:"B", contentEN:"...Just to be sure.",
  contentJP:"「…一応な。」",
  duration:3000, weight:9, emotionChanges:{ anxiety:2 } },

{ character:"B", contentEN:"(He unlocks and opens the drawer.)",
  contentJP:"（引き出しを開ける）",
  duration:5000, weight:10, emotionChanges:{ anxiety:4 } },

{ character:"B", contentEN:"(He stares inside silently.)",
  contentJP:"（中を無言で見つめる）",
  duration:5000, weight:11, emotionChanges:{ justify:3 } },

{ character:"B", contentEN:"It's perfect.",
  contentJP:"「完璧だ。」",
  duration:3000, weight:12, emotionChanges:{ justify:6 } },

/* =========================
   Phase 3：ビデオ提案
========================= */

{ character:"B", contentEN:"(B turns toward A.)",
  contentJP:"（Bが振り向く）",
  duration:2000, weight:13, emotionChanges:{ observerAlarm:2 } },

{ character:"B", contentEN:"Hey. Let's record it.",
  contentJP:"「なあ、撮ろうぜ。」",
  duration:3000, weight:14, emotionChanges:{ observerAlarm:3 } },

{ character:"B", contentEN:"Let's leave our words behind.",
  contentJP:"「俺らの言葉、残しとこうぜ。」",
  duration:4000, weight:15, emotionChanges:{ justify:4 } },

{ character:"B", contentEN:"(He pulls out a camera from his bag.)",
  contentJP:"（バッグからカメラを取り出す）",
  duration:6000, weight:16, emotionChanges:{ observerAlarm:5 } },

{ character:"B", contentEN:"(He sets the camera up.)",
  contentJP:"（カメラを設置する）",
  duration:6000, weight:17, emotionChanges:{ observerAlarm:4 } },

/* =========================
   Phase 4：怒りの独白
========================= */

{ character:"B", contentEN:"Everyone who underestimated us — listen.",
  contentJP:"「俺らを舐めてた連中、全員聞け。」",
  duration:5000, weight:18, emotionChanges:{ justify:5 } },

{ character:"B", contentEN:"You never saw anything.",
  contentJP:"「お前らは何も見てなかった。」",
  duration:4000, weight:19, emotionChanges:{ justify:3 } },

{ character:"B", contentEN:"Tomorrow, you'll understand.",
  contentJP:"「明日、分かる。」",
  duration:3000, weight:20, emotionChanges:{ deathAcceptance:4 } },

{ character:"B", contentEN:"(B stares into the lens.)",
  contentJP:"（カメラ越しに睨む）",
  duration:4000, weight:21, emotionChanges:{ observerAlarm:3 } },

{ character:"B", contentEN:"(B turns the camera toward A.)",
  contentJP:"（BがAにカメラを向ける）",
  duration:3000, weight:22, emotionChanges:{ anxiety:3 } },

/* =========================
   Phase 5：Aに振る
========================= */

{ character:"B", contentEN:"Say something.",
  contentJP:"「言えよ。」",
  duration:2000, weight:23, emotionChanges:{ anxiety:5 } },

{ character:"B", contentEN:"In your own words.",
  contentJP:"「お前の言葉で。」",
  duration:3000, weight:24, emotionChanges:{ justify:3 } },

{ character:"B", contentEN:"(B waits silently.)",
  contentJP:"（Bが無言で待つ）",
  duration:5000, weight:25, emotionChanges:{ anxiety:4 } },

/* =========================
   Phase 6：静寂と高揚
========================= */

{ character:"B", contentEN:"(Camera clicks off.)",
  contentJP:"（カメラ停止）",
  duration:2000, weight:26, emotionChanges:{ observerAlarm:-2 } },

{ character:"B", contentEN:"(B sits down on the floor.)",
  contentJP:"（Bが床に座る）",
  duration:4000, weight:27, emotionChanges:{ fatigue:2 } },

{ character:"B", contentEN:"Finally.",
  contentJP:"「やっとだな。」",
  duration:3000, weight:28, emotionChanges:{ deathAcceptance:3 } },

{ character:"B", contentEN:"It ends tomorrow.",
  contentJP:"「明日で終わる。」",
  duration:3000, weight:29, emotionChanges:{ deathAcceptance:5 } },

{ character:"B", contentEN:"We finish this.",
  contentJP:"「俺ら、やり遂げるんだ。」",
  duration:4000, weight:30, emotionChanges:{ justify:4 } },

/* =========================
   Phase 7：別れ
========================= */

{ character:"B", contentEN:"(B stands up.)",
  contentJP:"（Bが立ち上がる）",
  duration:3000, weight:31, emotionChanges:{ bond:-2 } },

{ character:"B", contentEN:"Tomorrow.",
  contentJP:"「明日な。」",
  duration:2000, weight:32, emotionChanges:{ bond:1, anxiety:2 } },

{ character:"B", contentEN:"(He opens the door.)",
  contentJP:"（ドアを開ける）",
  duration:3000, weight:33, emotionChanges:{ anxiety:3 } },

{ character:"B", contentEN:"(The door closes.)",
  contentJP:"（ドアが閉まる）",
  duration:2000, weight:34, emotionChanges:{ bond:-5, anxiety:5 } },

{ character:"B", contentEN:"(Silence.)",
  contentJP:"（静寂）",
  duration:5000, weight:35, emotionChanges:{} }

];