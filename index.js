let a = document.getElementById('entera');
let b = document.getElementById('enterb');
let c = document.getElementById('sideC');

document.getElementById('submit').onclick = function() {
  a = Math.pow(Number(a.value), 2);
  b = Math.pow(Number(b.value), 2);
  c = Math.sqrt(a + b);
  console.log(c);
  //console.log('b', b);
}