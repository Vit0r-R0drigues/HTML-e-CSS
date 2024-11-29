document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem) {
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
