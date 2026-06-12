// Criar círculos flutuantes para efeito futurista
for (let i = 0; i < 15; i++) {
  let circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.width = `${Math.random() * 100 + 50}px`;
  circle.style.height = circle.style.width;
  circle.style.left = `${Math.random() * 100}vw`;
  circle.style.animationDuration = `${Math.random() * 10 + 5}s`;
  circle.style.opacity = Math.random() * 0.5 + 0.2;
  document.body.appendChild(circle);
}

// Chave secreta
const chaveCorreta = "verde123";

// Evento do botão
document.getElementById('btn-verificar').addEventListener('click', function() {
  const chaveDigitada = document.getElementById("chave").value;
  const mensagem = document.getElementById("mensagem");
  const conteudoSecreto = document.getElementById("conteudo-secreto");

  if (chaveDigitada === chaveCorreta) {
    mensagem.style.display = "none";
    conteudoSecreto.style.display = "block";
  } else {
    mensagem.style.display = "block";
    mensagem.textContent = "Chave incorreta! Tente novamente.";
    conteudoSecreto.style.display = "none";
  }
});
