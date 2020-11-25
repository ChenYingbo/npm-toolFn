const Utils = {
  nFormatter : (num, digits) => {
    const si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "K" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    //if(num < si[2].value ){
    //  return num
    //}
    //return (num / si[i-1].value).toFixed(digits) + si[i-1].symbol;
    return (num / si[i].value).toFixed(digits) + si[i].symbol;
  }
}

module.exports = {
  Utils
}