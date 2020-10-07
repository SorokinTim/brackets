module.exports = function check(str, bracketsConfig) {
  let bracketsArray = str.split("");

  let tempArray = [];
  outer: for (let i = 0; i < bracketsArray.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {

      if (bracketsArray[i] == bracketsConfig[j][0]) {
        tempArray.unshift(bracketsArray[i]);
        continue outer;
      }

    }
    let mirrorArray = createMirrorArray(tempArray, bracketsConfig);

    if (mirrorArray.join("") === bracketsArray.slice(tempArray.length, mirrorArray.length * 2).join("") && mirrorArray.join("") != "") {
      bracketsArray.splice(0, mirrorArray.length * 2);
      tempArray = [];
      i = -1;
      continue;
    }
  }

  for(let x = 0; x < bracketsArray.length; x++) {
    if(bracketsArray[x] == bracketsArray[x+1]) {
      bracketsArray.splice(x, x+2);
    }
  }
  return !String(bracketsArray);
}

function createMirrorArray(arr, bracketsConfig) {
  return arr.map((item) => {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] === item) {
        return bracketsConfig[i][1];
      }
    }
  });
}
