document.addEventListener("DOMContentLoaded", () => {
  const botaoEnviar = document.getElementById("btnEnviar");
  const protocoloBox = document.getElementById("protocoloBox");
  const numeroProtocolo = document.getElementById("numeroProtocolo");

  function gerarProtocolo() {
    const numeroAleatorio = Math.floor(100000 + Math.random() * 900000);
    return "DEN-" + numeroAleatorio;
  }

  botaoEnviar.addEventListener("click", () => {
    const protocolo = gerarProtocolo();
    numeroProtocolo.textContent = "Seu número de protocolo é: " + protocolo;
    protocoloBox.style.display = "block";
  });
});
