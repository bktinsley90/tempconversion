function tempCon(){
    let name=prompt("What is your name?")
    let degFahren=prompt("Enter the degrees ")
    degCel = (5 / 9) * (degFahren - 32);
      let msg = `Hi ${name} ${degFahren} Fahrenheit is ${degCel}`;     
      
      if (degFahren < 69) {
        alert(msg + "\n Oh that's cold!");
      } else if (degFahren > 69 && degFahren < 83) {
        alert(msg + "\n Temperature is just right!");
      } else {
        alert(msg + "\n Its way too hot!");
      }

    

}