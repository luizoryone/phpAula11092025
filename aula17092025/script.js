// Captura o botão pelo ID
const botao = document.getElementById("botao");

// Adiciona um evento de clique
botao.addEventListener("click", function() {
    
    // Muda a cor de fundo do body aleatoriamente
    const cores = ["#ff7979", "#badc58", "#f9ca24", "#686de0", "#e056fd"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
});