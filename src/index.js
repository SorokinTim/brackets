module.exports = function check(str, bracketsConfig) {
  str = str.toLowerCase();
  for (let y = 0; y < bracketsConfig.length; y++) {
    while (str.includes(bracketsConfig[y].join("").toLowerCase())) {
      str = str.replace(bracketsConfig[y].join(""), "");
      y = 0;
    }
  }
  return !str;
}
