// declaração de variáveis
// const DISCORD_WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1363574242859552778/PCf82cKOZdVKp9vknrRc4BEwjroJ7h7x27u1koXYPZ3YKnRUFDVQerbGshjRU5nbmAwW";
const exampleModal = document.getElementById('exampleModal')

function toggleMensagemPersonalizada() {
  const tipo = document.getElementById("tipoMensagem").value;
  const divMsgPersonalizada = document.getElementById("mensagemPersonalizadaDiv");
  const textArea = document.getElementById("mensagemPersonalizada");

  if (tipo === "personalizada") {
    divMsgPersonalizada.style.display = 'block';
  } else {
    textArea.value = '';
    divMsgPersonalizada.style.display = 'none';
  }
}

function toggleAttentionTypeMenssage() {
  const type = document.getElementById("tipoMensagemEstilo").value;
  document.getElementById("warningTextMenssage").style.display = type === "Satírica" ? "block" : "none";
}

function enviarWhats(id_pedido) {
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
  mensagem += tipoMensagemEstilo === "Lírica" ? `Estou muito apaixonado(a) por *${nomeAlvo}* e gostaria de revelar meu amor.\n\n` : `Estou animado e gostaria de zoar com meu(minha) amigo(a) *${nomeAlvo}*.\n\n`;
  mensagem += `> *Informações do pedido*\n\n`
  mensagem += `🏷️ *ID do pedido:* _${id_pedido}_\n`;
  mensagem += `📚 *Sala do alvo:* _${sala}_\n`;
  mensagem += `🔐 *Anonimato:* ${anonimato === "sim" ? "_SIM (+ R$3,00)_" : "_NÃO_"}\n`;
  mensagem += `🎭 *Estilo da mensagem:* _${tipoMensagemEstilo}_\n\n`;

  if (tipoMensagem === "personalizada") {
    mensagem += `📝 *Mensagem personalizada:*\n"_${mensagemPers}_"\n\n`;
  } else {
    mensagem += "`✉️ Mensagem será feita pela equipe do Correio Elegante`.\n\n";
  }

  mensagem += `💵 *Valor a pagar:* R$ ${preco},00`;

  // Envio para o Discord
  // Criação do embed
  // const embed = {
  //   title: "💌 Novo Pedido de Correio Elegante!",
  //   color: 0xff69b4,
  //   fields: [
  //     { name: "💁 Remetente", value: nomeRemetente, inline: true },
  //     { name: "😍 Alvo", value: nomeAlvo, inline: true },
  //     { name: "📚 Sala", value: sala, inline: true },
  //     {
  //       name: "🔐 Anonimato",
  //       value: anonimato === "sim" ? "SIM (+ R$3,00)" : "NÃO",
  //       inline: true
  //     },
  //     {
  //       name: "🎭 Estilo",
  //       value: tipoMensagemEstilo === "sim" ? "Lírica" : "Satírica",
  //       inline: true
  //     },
  //     {
  //       name: "📨 Tipo de Mensagem",
  //       value: tipoMensagem === "personalizada" ? "Personalizada" : "Padrão",
  //       inline: true
  //     },
  //     {
  //       name: "💬 Mensagem",
  //       value: tipoMensagem === "personalizada" ? mensagemPers : "Será feita pela equipe do Correio Elegante.",
  //       inline: false
  //     },
  //     {
  //       name: "💵 Valor a pagar",
  //       value: `R$ ${preco},00`,
  //       inline: true
  //     }
  //   ],
  //   timestamp: new Date().toISOString()
  // };

  // fetch(DISCORD_WEBHOOK_URL, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({ embeds: [embed] })
  // }).then(response => {
  //   if (!response.ok) console.error("Erro ao enviar embed para o Discord");
  // }).catch(error => {
  //   console.error("Erro de rede ao enviar para o Discord", error);
  // });

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

function gerarId(length) {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let resultadoID = "";

  for (let i = 0; i < length; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    resultadoID += caracteres.charAt(indice);
  }

  return resultadoID;
}

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

document.getElementById("correioForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const IDPedido = gerarId(10);

  // Se estiver usando campos dinâmicos que não estão diretamente no <form>, adicione manualmente:
  formData.append("mensagem", document.getElementById("mensagemPersonalizada").value ? document.getElementById("mensagemPersonalizada").value : "Mensagem feita pela equipe do Correio Elegante");
  formData.append("pagamento", 'pendente');
  formData.append("id_pedido", IDPedido);

  fetch("https://script.google.com/macros/s/AKfycbx5GfHwR6E7_4-uZjDmnYrk7j8rBVN2Wce9NpM2TsazTHvRP9L1GSVyJR63iSs8oqgBtA/exec", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      alert("Mensagem enviada com sucesso!");
      console.log(result);
    })
    .catch(error => {
      alert("Erro ao enviar. Tente novamente.");
      console.error("Erro ao enviar:", error);
    });

    enviarWhats(IDPedido);
});