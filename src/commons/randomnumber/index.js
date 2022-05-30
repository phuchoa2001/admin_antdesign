function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
function Rrandomnumber() {
  return s4() + s4() + s4() + '-' + s4() + s4()
}
//Tạo ra Mẫu số từ nhiên
function resultRrandomnumber() {
  const number = Rrandomnumber();
  return number;
}
module.exports = resultRrandomnumber;