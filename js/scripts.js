// seleção de elementos
const gerarSenhaBtn = document.querySelector("#gerar-senha");
const senhaGerada = document.querySelector("#gerando-senha");

// funções
const getLetraMinuscula = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetraMaiuscula = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumero = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSimbolo = () => {
  const simbolos = "()[]{}!@#$%¨&*=+_./?.,";
  return simbolos[Math.floor(Math.random() * simbolos.length)];
};

const gerarSenha = (
  getLetraMinuscula,
  getLetraMaiuscula,
  getNumero,
  getSimbolo
) => {
  let senha = "";

  const tamnahoSenha = 10;

  const geracao = [getLetraMinuscula, getLetraMaiuscula, getNumero, getSimbolo];

  for (i = 0; i < tamnahoSenha; i = i + geracao.length) {
    geracao.forEach(() => {
      const randomValue = geracao[Math.floor(Math.random() * geracao.length)]();

      senha += randomValue;
    });
  }
  senha = senha.slice(0, tamnahoSenha)
  senhaGerada.style.display = "block";
  senhaGerada.querySelector("h4").innerText = senha;
};
// eventos
gerarSenhaBtn.addEventListener("click", () => {
  gerarSenha(getLetraMinuscula, getLetraMaiuscula, getNumero, getSimbolo);
});
