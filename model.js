class EmotionModelA {

  constructor(){
    this.reset();
  }

  reset(){

    this.state = {

      empathy: 60,
      cognitiveDissonance: 30,
      bond: 55,
      deathAcceptance: 40,
      observerTrust: 20,
      stress: 35,
      stamina: 60,
      morality: 70,
      isolation: 40

    };

    this.t = 0;

  }

  clamp(v,lo=-100,hi=100){
    return Math.max(lo,Math.min(hi,v));
  }

  tick(dt){

    this.t += dt;

    const s = this.state;

    /* ======================
       心理ドリフト
    ====================== */

    const stressFactor = s.stress/100;
    const staminaFactor = (100-s.stamina)/100;

    if (s.stress > 0){

      s.empathy -= 0.05*stressFactor;
      s.cognitiveDissonance += 0.04*stressFactor;
      s.deathAcceptance += 0.03*stressFactor;
      s.morality -= 0.03*stressFactor;

    }

    if (s.stamina < 100){

      s.stress += 0.05*staminaFactor;
      s.empathy -= 0.02*staminaFactor;
      s.morality -= 0.02*staminaFactor;

    }

    if (s.bond > 0){

      s.cognitiveDissonance += 0.03*(s.bond/100);
      s.deathAcceptance += 0.02*(s.bond/100);
      s.isolation -= 0.03*(s.bond/100);

    }

    if (s.empathy > 0){

      s.cognitiveDissonance -= 0.04*(s.empathy/100);
      s.deathAcceptance -= 0.03*(s.empathy/100);
      s.morality += 0.04*(s.empathy/100);

    }

    if (s.observerTrust > 0){

      s.stress -= 0.04*(s.observerTrust/100);
      s.empathy += 0.03*(s.observerTrust/100);

    }

    if (s.observerTrust < 0){

      s.stress += 0.05*(Math.abs(s.observerTrust)/100);

    }

    if (s.isolation > 0){

      s.stress += 0.03*(s.isolation/100);
      s.bond += 0.02*(s.isolation/100);
      s.deathAcceptance += 0.03*(s.isolation/100);

    }

    if (s.morality > 0){

      s.cognitiveDissonance -= 0.03*(s.morality/100);

    }

    /* ======================
       閾値トリガー
    ====================== */

    if (s.stress > 70) s.empathy -= 10;

    if (s.stress > 80) s.cognitiveDissonance += 8;

    if (s.stamina < 20) s.stress += 10;

    if (s.stamina < 10) s.empathy -= 5;

    if (s.empathy < 0) s.morality -= 5;

    if (s.empathy < -30) s.bond += 5;

    if (s.cognitiveDissonance > 70) s.empathy -= 4;

    if (s.bond > 80) s.cognitiveDissonance += 6;

    if (s.bond < 20) s.cognitiveDissonance -= 6;

    if (s.deathAcceptance > 70) s.stress -= 4;

    if (s.observerTrust < -30) s.stress += 8;

    if (s.observerTrust > 60) s.stress -= 6;

    if (s.morality < 0) s.deathAcceptance += 4;

    if (s.morality > 60) s.cognitiveDissonance -= 5;

    if (s.isolation > 70) s.bond += 8;

    if (s.isolation > 80) s.stress += 6;

    if (s.isolation > 60) s.empathy -= 4;

    /* ======================
       clamp
    ====================== */

    for(const k in s){

      if(k === "empathy" || k === "observerTrust" || k === "morality")
        s[k] = this.clamp(s[k],-100,100);
      else
        s[k] = this.clamp(s[k],0,100);

    }

  }

  applyEmotionChanges(delta){

    const s = this.state;

    for(const k in delta){

      if(s[k]!==undefined){

        s[k] += delta[k];

      }

    }

  }

  snapshot(){

    return JSON.parse(JSON.stringify(this.state));

  }

}