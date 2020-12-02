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
  },
  getRandom : (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
  hidePhone: (phone) => {
    let p = phone.toString().split('-')
    var reg = /^(\d{3})\d{4}(\d{4})$/
    let tel = p[1]? p[1].replace(reg, "$1****$2") : ''
    return tel
  },
  checkPhone: (phone) => {
    return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(phone)
  },
  checkMail: mail => {
    if (!/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(mail)) {
      return false
    } else {
      return true
    }
  }
}

module.exports = {
  Utils
}