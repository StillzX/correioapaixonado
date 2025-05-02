const DISCORD_WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1363574242859552778/PCf82cKOZdVKp9vknrRc4BEwjroJ7h7x27u1koXYPZ3YKnRUFDVQerbGshjRU5nbmAwW";

function toggleMensagemPersonalizada() {
  const tipo = document.getElementById("tipoMensagem").value;
  document.getElementById("mensagemPersonalizadaDiv").style.display = tipo === "personalizada" ? "block" : "none";
}

function enviarWhats() {
  const nomeRemetente = document.getElementById("nomeRemetente").value;
  const nomeAlvo = document.getElementById("nomeAlvo").value;
  const sala = document.getElementById("sala").value;
  const anonimato = document.getElementById("anonimato").value;
  const tipoMensagem = document.getElementById("tipoMensagem").value;
  const tipoMensagemEstilo = document.getElementById("tipoMensagemEstilo").value;
  const mensagemPers = document.getElementById("mensagemPersonalizada").value;

  if (!nomeRemetente || !nomeAlvo || !sala || !tipoMensagemEstilo) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }

  if (tipoMensagem === "personalizada" && !mensagemPers) {
    alert("Por favor, escreva a mensagem personalizada!");
    return;
  }

  let preco = 5;

  if (anonimato === "sim") preco += 3;

  let mensagem = `💌 *Correio Elegante - Pedido de Mensagem!*\n\n`;
  mensagem += `Olá, sou *${nomeRemetente}* e gostaria de fazer um pedido!\n`;
  mensagem += `Estou muito apaixonado(a) por *${nomeAlvo}* e gostaria de revelar meu amor.\n`;
  mensagem += `📚 *Sala do alvo:* ${sala}\n`;
  mensagem += `🔐 Anonimato: ${anonimato === "sim" ? "SIM (+ R$3,00)" : "NÃO"}\n`;
  mensagem += `🎭 Estilo da mensagem: ${tipoMensagemEstilo === "sim" ? "Lírica" : "Satírica"}\n\n`;

  if (tipoMensagem === "personalizada") {
    mensagem += `📝 *Mensagem personalizada:*\n"${mensagemPers}"\n\n`;
  } else {
    mensagem += `✉️ Mensagem será feita pela equipe do Correio Elegante.\n\n`;
  }

  mensagem += `💵 *Valor a pagar:* R$ ${preco},00`;

  const embed = {
    title: "💌 Novo Pedido de Correio Elegante!",
    color: 0xff69b4,
    fields: [
      { name: "💁 Remetente", value: nomeRemetente, inline: true },
      { name: "😍 Alvo", value: nomeAlvo, inline: true },
      { name: "📚 Sala", value: sala, inline: true },
      {
        name: "🔐 Anonimato",
        value: anonimato === "sim" ? "SIM (+ R$3,00)" : "NÃO",
        inline: true
      },
      {
        name: "🎭 Estilo",
        value: tipoMensagemEstilo === "sim" ? "Lírica" : "Satírica",
        inline: true
      },
      {
        name: "📨 Tipo de Mensagem",
        value: tipoMensagem === "personalizada" ? "Personalizada" : "Padrão",
        inline: true
      },
      {
        name: "💬 Mensagem",
        value: tipoMensagem === "personalizada" ? mensagemPers : "Será feita pela equipe do Correio Elegante.",
        inline: false
      },
      {
        name: "💵 Valor a pagar",
        value: `R$ ${preco},00`,
        inline: true
      }
    ],
    timestamp: new Date().toISOString()
  };

  fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ embeds: [embed] })
  }).then(response => {
    if (!response.ok) console.error("Erro ao enviar embed para o Discord");
  }).catch(error => {
    console.error("Erro de rede ao enviar para o Discord", error);
  });

  const enviarWhats = "5567998365507";
  const url = `https://wa.me/${enviarWhats}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

function enviarWhatsDuvida() {
  const nomeCliente = document.getElementById('recipient-name').value;
  const duvidaCliente = document.getElementById('message-text').value;

  if (!nomeCliente || !duvidaCliente) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }

  const agora = new Date();
  const data = agora.toLocaleDateString();
  const hora = agora.toLocaleTimeString();

  let mensagem = `🤔 *Dúvida* - Olá! Meu nome é *${nomeCliente}* estou no site do Correio Elegante do terceirão e gostaria de tirar uma dúvida.\n\n`;
  mensagem += `*Minha dúvida é a seguinte:* \n"${duvidaCliente}"\n\n`;
  mensagem += `📅 *Data:* ${data}\n⏰ *Hora:* ${hora}`;

  const enviarWhatsDuvida = "5567992428574";
  const urlDuvida = `https://wa.me/${enviarWhatsDuvida}?text=${encodeURIComponent(mensagem)}`;
  window.open(urlDuvida, "_blank");
}

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.getElementById('message-text')
  })
}