function mostrarReceita(event, idReceita) {
    // Impede que o link recarregue a página
    event.preventDefault();

    // Esconde todas as outras receitas abertas antes de mostrar a nova (opcional)
    const todasAsReceitas = document.querySelectorAll('.detalhe-receita');
    todasAsReceitas.forEach(r => r.style.display = 'none');

    // Mostra a receita específica
    const alvo = document.getElementById(idReceita);
    alvo.style.display = 'block';

    // Rola a tela suavemente até a receita
    alvo.scrollIntoView({ behavior: 'smooth' });
}

function fecharReceita(idReceita) {
    document.getElementById(idReceita).style.display = 'none';
}