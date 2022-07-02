function Login(event) {
  
  event.preventDefault();
  var usuario = document.getElementsByName('admin')[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementsByName('senha')[0].value;
  senha = senha.toLowerCase();

  if (usuario == "admin" && senha == "admin777") {
    alert("Dados corretos!!");
    window.location = "entrou";
  }
  else{
    alert("Dados incorretos, tente novamente!");
  }
}