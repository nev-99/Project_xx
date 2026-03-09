// action.js

window.hoverActionData = {
  A: {
    noticeDelay: 2,
    timeline: [
      { time: 3, contentEN: "A looks at himself.", contentJP: "Aが自分を見る。", emotionChanges:{observerAlarm:5}},
      { time: 5, contentEN: "A clenches fists.", contentJP: "Aが拳を握る。", emotionChanges:{anxiety:5}}
    ]
  },
  B: {
    noticeDelay: 1,
    timeline: [
      { time: 2, contentEN: "A watches B.", contentJP: "AがBを見る。", emotionChanges:{bond:3}},
      { time: 4, contentEN: "A steps closer to B.", contentJP: "AがBに近づく。", emotionChanges:{anxiety:3}}
    ]
  },
  tool: {
    noticeDelay: 1,
    timeline: [
      { time: 2, contentEN: "Cold metal.", contentJP: "冷たい金属。", emotionChanges:{empathy:-5}},
      { time: 5, contentEN: "A grips the tool.", contentJP: "Aが道具を握る。", emotionChanges:{justify:5}}
    ]
  }
};