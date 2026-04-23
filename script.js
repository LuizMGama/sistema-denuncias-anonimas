document.addEventListener("DOMContentLoaded", () => {
  const botaoEnviar = document.getElementById("btnEnviar");
  const protocoloBox = document.getElementById("protocoloBox");
  const numeroProtocolo = document.getElementById("numeroProtocolo");

  const botaoConsultar = document.getElementById("btnConsultar");
  const protocoloConsulta = document.getElementById("protocoloConsulta");
  const statusBox = document.getElementById("statusBox");
  const statusProtocolo = document.getElementById("statusProtocolo");
  const statusAtual = document.getElementById("statusAtual");

  function gerarProtocolo() {
    const numeroAleatorio = Math.floor(100000 + Math.random() * 900000);
    return "DEN-" + numeroAleatorio;
  }

  function obterStatusPorProtocolo(protocolo) {
    const numeros = protocolo.replace(/\D/g, "");

    if (numeros === "") {
      return "Denúncia recebida";
    }

    const ultimoDigito = parseInt(numeros[numeros.length - 1], 10);

    if (ultimoDigito <= 2) {
      return "Denúncia recebida";
    } else if (ultimoDigito <= 5) {
      return "Em análise";
    } else if (ultimoDigito <= 7) {
      return "Encaminhada";
    } else {
      return "Concluída";
    }
  }

  botaoEnviar.addEventListener("click", () => {
    const protocolo = gerarProtocolo();
    numeroProtocolo.textContent = "Seu número de protocolo é: " + protocolo;
    protocoloBox.style.display = "block";
    protocoloConsulta.value = protocolo;
  });

  botaoConsultar.addEventListener("click", () => {
    const protocolo = protocoloConsulta.value.trim();

    if (protocolo === "") {
      statusProtocolo.textContent = "Informe um número de protocolo para consulta.";
      statusAtual.textContent = "";
      statusBox.style.display = "block";
      return;
    }

    const status = obterStatusPorProtocolo(protocolo);

    statusProtocolo.textContent = "Protocolo consultado: " + protocolo;
    statusAtual.textContent = "Status atual: " + status;
    statusBox.style.display = "block";
  });
});
