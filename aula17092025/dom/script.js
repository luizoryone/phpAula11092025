// Obtém o elemento do botão usando seu ID
const corTexto = document.getElementById("btnTexto");

// Adiciona um "ouvinte de evento" (event listener) que aguarda por um "clique" no botão
corTexto.addEventListener("click", function() {

  // Obtém o elemento do parágrafo usando seu ID
  const paragrafo = document.getElementById("meuParagrafo");

  // A linha a seguir estava incorreta. `textContent` não tem a propriedade `value`.
  // console.log(paragrafo.textContent.value); 
  // Para ver o texto atual, você usaria: console.log(paragrafo.textContent);

  // Atribui a nova string de texto diretamente à propriedade `textContent` do parágrafo
  paragrafo.textContent = "O valor da nova frase.";

  // Para melhor debug, você pode adicionar esta linha para ver a alteração no console
  console.log("O novo texto do parágrafo é: " + paragrafo.textContent);
});