document.getElementById('loginButton').addEventListener('click', function() {
  // Validação básica dos campos
  const nick = document.getElementById('nick').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  
  if(nick && email && senha) {
    // Redireciona para o site desejado após o "login"
    window.location.href = "https://www.minecraft.net";
  } else {
    alert("Por favor, preencha todos os campos!");
  }
});