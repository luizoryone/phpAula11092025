
    
        const textInput = document.getElementById('textInput');
        const charCount = document.getElementById('charCount');

        textInput.addEventListener("input", () => {
            const count = textInput.value.length;
            charCount.textContent = `Caracteres: ${count}`;

            if (count > 100) {
                charCount.classList.add('highlight');
            } else {
                charCount.classList.remove('highlight');
            }
        });