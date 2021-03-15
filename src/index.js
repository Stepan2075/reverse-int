module.exports = function reverse (n) {
    let result = '';
    let m=Math.abs(n);
    while(m>0){
    result = result + (m%10);
    m = parseInt(m/10);
    }
    return result;
  }