// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored)

function cockroachSpeed(s) {
    //Good Luck!
    let speedInKm = 0
    let finalSpeed = Math.round( speedInKm *  27.778)
    console.log( finalSpeed )
  }
  
  cockroachSpeed(25)

  //corrections

  function cockroachSpeed(s) {
    //multiply km/m by 27.7777777778
    return Math.floor(s*27.7777777778);
  }
 // next 

  const cockroachSpeed = s => Math.floor(s / 0.036);
  
  // next

  function cockroachSpeed(s) {
    const KILOMETER_IN_CENTIMETERS = 1 * 1000 * 100;
    const HOUR_IN_SECONDS = 1 * 60 * 60;
    
    return Math.floor(s * KILOMETER_IN_CENTIMETERS / HOUR_IN_SECONDS);
  }
 
  //Mine re-taken

  function cockroachSpeed(s){
      let sleepInKmToCm = 1 * 1000 *100;
      let speedInHtoS = 1 * 60 * 60;
      
      return Math.round(s * sleepInKmToCm / speedInHtoS);
  }