const perguntas = [
  { texto: "Qual pais tem a Torre Eiffel?", respostaCorreta: "FRANCA" },
  { texto: "Qual e o maior pais do mundo em territorio?", respostaCorreta: "RUSSIA" },
  { texto: "Qual pais tem mais habitantes atualmente?", respostaCorreta: "CHINA" },
  { texto: "O Deserto do Saara fica em qual continente?", respostaCorreta: "AFRICA" }
];

let pontos = 0;

// Remove os acentos e converte para maiusculas
function limparTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

// Pergunta  e avalia a resposta
function perguntar(perguntaObj, numero) {
  console.log(Pergunta ${numero}:);
  console.log(perguntaObj.texto);

  let respostaUsuario = prompt("Digite sua resposta: ");
  let respostaLimpa = limparTexto(respostaUsuario.trim());

  if (respostaLimpa === perguntaObj.respostaCorreta) {
    console.log("✅ Resposta correta!\n");
    pontos++;
  } else if (respostaLimpa.includes(perguntaObj.respostaCorreta)) {
    console.log(" Quase! Voce mencionou a resposta certa, mas escreveu com erro.");
    pontos += 0.5;
  } else {
    console.log(❌ Errado! A resposta certa era: ${perguntaObj.respostaCorreta}\n);
  }
}

// Loop pelas perguntas
for (let i = 0; i < perguntas.length; i++) {
  perguntar(perguntas[i], i + 1);
}

// Resultado final
console.log("========== RESULTADO ==========");
console.log(Voce fez ${pontos} ponto(s) de ${perguntas.length});
