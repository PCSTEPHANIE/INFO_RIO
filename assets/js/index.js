document.addEventListener('DOMContentLoaded', () => {

    const newsDisplay = document.getElementById('newsDisplay');

    function updateNews() {
        newsDisplay.innerText = news[currentNews];
        currentNews = (currentNews + 1) % news.length;
    }
    setInterval(updateNews, 3000); // Atualiza a cada 3 segundos

    // Alertas
    const alerts = [
        "EVACUAÇÃO NECESSÁRIA EM ÁREAS PRÓXIMAS A RIOS",
        "RISCO DE DESLIZAMENTO",
        "EVACUAÇÃO NECESSÁRIA EM REGIÕES BAIXAS.",
        "ALERTA DE ENCHENTE NA REGIÃO SUL."
    ];
    let currentAlert = 0;
    const alertMessage = document.getElementById('alertMessage');

    function updateAlert() {
        alertMessage.innerText = alerts[currentAlert];
        currentAlert = (currentAlert + 1) % alerts.length;
    }
    setInterval(updateAlert, 5000); // Atualiza a cada 5 segundos

    // Linha do Tempo
    const events = [
        "Alerta emitido em 25/10 às 08:00",
        "Aviso de deslizamento em 24/10 às 19:00",
        "Chuva forte prevista em 23/10 às 14:00"
    ];
    const eventTimeline = document.getElementById('eventTimeline');
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = event;
        eventTimeline.appendChild(li);
    });

    // FAQ interativo
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

});

    // Carrossel de imagens
    let currentSlide = 0;
    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-image');
        currentSlide = (index + slides.length) % slides.length; // Garante que o índice esteja dentro dos limites
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }

    // Inicializa o carrossel mostrando a primeira imagem
    showSlide(currentSlide);
    function toggleAnswer(answerId) {
        const answer = document.getElementById(answerId);
        if (answer.style.display === "none") {
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }
    }

// Função para rolar até as categorias
function scrollToCategories() {
    document.getElementById('categorias').scrollIntoView({ behavior: 'smooth' });
}

// Função para mostrar ou ocultar fundamento
function showFundamento() {
    const fundamentoText = document.getElementById('fundamentoText');
    fundamentoText.style.display = fundamentoText.style.display === "none" ? "block" : "none";
}

// Função para alternar respostas da FAQ (pode ser removida, pois já está no DOMContentLoaded)
function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    answer.style.display = answer.style.display === "none" ? "block" : "none";
}

// Função para registro de voluntário
function registerVolunteer(event) {
    event.preventDefault(); // Impede o envio do formulário

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Aqui você pode adicionar a lógica para processar os dados do formulário
    console.log("Nome Completo:", fullName);
    console.log("E-mail:", email);
    console.log("Telefone:", phone);
    console.log("Endereço:", address);

    // Exemplo de mensagem de sucesso
    alert("Cadastro realizado com sucesso!");

    // Limpar o formulário após o envio
    document.getElementById('volunteerForm').reset();
}
 // FAQ interativo
 document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});