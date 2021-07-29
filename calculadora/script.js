function clicar(value){
  var resultado = document.getElementById("resultado")
  resultado.innerHTML += value
}

function limpar(){
  var resultado = document.getElementById("resultado")
  resultado.innerHTML = ""
}

function corrigir(){
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function resultado(){
  var resultado = document.getElementById("resultado")
  resultado.innerHTML = eval(resultado.innerHTML)
}