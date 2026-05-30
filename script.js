// Dicionário com todas as traduções do site
const traducoes = {
    "pt": {
        // Menu
        "nav-inicio": "Início",
        "nav-sobre": "Sobre mim",
        "nav-blog": "Blog Pessoal",

        // Página: index.html
        "titulo-boas-vindas": "Bem-vindo ao meu site pessoal",
        "texto-boas-vindas": "Neste site você encontrará informações sobre meus projetos e interesses.",
        "sobre-titulo-contato": "> Contato & Redes Sociais",

        // Página: sobre.html - Bloco 1 (Perfil e Carreira)
        "sobre-titulo-quem-sou": "> Quem sou eu",
        "sobre-texto-intro": "Tenho 18 anos, nascido no Brasil e criado em Portugal desde os 10 anos. Meus pontos fortes são o desenvolvimento back-end, banco de dados e a estruturação lógica de projetos. Ainda sem muita experiência em frontend e webdesign, mas esse site em questão já está sendo uma excelente oportunidade para praticar e melhorar minhas habilidades 😅.",
        "sobre-texto-personalidade": "Diria que não sou nem extrovertido nem introvertido; gosto de estar em ambientes sociais e conversar, mas também valorizo momentos de tranquilidade.",
        "sobre-titulo-carreira": "> O que ando fazendo da vida",
        "sobre-li-pap": "<strong>Unity & C#:</strong> Estou a desenvolver a minha PAP (Prova de Aptidão Profissional) que é o projeto final e obrigatório dos cursos profissionais.",
        "sobre-li-pap-link": "<strong>Link da minha PAP:</strong> <a style='color: lawngreen;' href='https://github.com/RyanBelonia/PAPE-RYAN' target='_blank'>Acessar PAP</a>",
        "sobre-li-estagio": "<strong>Estagiando na Internet Web Solutions (Málaga):</strong> Trabalhando na estrutura do VOICE app e entre outras atividades.",
        "sobre-titulo-linguas": "> Idiomas",
        "sobre-lang-pt": "<strong>Português:</strong> Nativo",
        "sobre-lang-en": "<strong>Inglês:</strong> Experiente",
        "sobre-lang-outros": "<strong>Italiano, Japonês e Espanhol:</strong> Gostaria de aprender",

        // Página: sobre.html - Bloco 2 (Hobbies e Interesses)
        "sobre-titulo-interesses": "> Interesses e Hobbies",
        "sobre-titulo-midia": "> Mídia & Cultura",
        "sobre-texto-midia": "Quando não estou focado nas lógicas de programação, você provavelmente vai me encontrar vendo um anime, filme ou série, lendo algum livro pelo celular ou explorando novas tecnologias.",
        "sobre-texto-estetica": "Tenho um grande apreço pela estética clássica, especialmente pela pintura e arquitetura tradicionais.",
        "sobre-titulo-musica": "> Música",
        "sobre-texto-musica": "Gosto de ouvir música em geral, mas destaco: Funky, Rock, e músicas menos atuais (com exceção de Bruno Mars e algumas músicas pop que acho bem legais).",
        "sobre-texto-bateria": "Também estou aprendendo a tocar bateria e acho instrumentos de sopro muito interessantes.",

        //blog 
        "nav-blog": "Blog Pessoal",
        "blog-titulo-1": "Meu primeiro post: Primeiros passos no site",
        "blog-texto-1": "Este é o meu blog pessoal. Aqui vou documentar minhas aventuras na programação, updates da minha PAP e qualquer coisa que eu achar interessante compartilhar sobre tecnologia e minha vida ",

    },
    "en": {
        // Menu
        "nav-inicio": "Home",
        "nav-sobre": "About me",
        "nav-blog": "Personal Blog",

        // Página: index.html
        "titulo-boas-vindas": "Welcome to my personal website",
        "texto-boas-vindas": "In this site you will find information about my projects and interests.",
        "sobre-titulo-contato": "> Contact & Socials",

        // Página: sobre.html - Bloco 1 (Perfil e Carreira)
        "sobre-titulo-quem-sou": "> Who am I",
        "sobre-texto-intro": "I am 18 years old, born in Brazil and raised in Portugal since I was 10. My strengths are back-end development, databases, and logical project structuring. I still lack experience in frontend and web design, but this website is already proving to be an excellent opportunity to practice and improve my skills 😅.",
        "sobre-texto-personalidade": "I wouldn't say I'm an extrovert or an introvert; I like being in social environments and talking, but I also value quiet moments.",
        "sobre-titulo-carreira": "> What I'm currently doing",
        "sobre-li-pap": "<strong>Unity & C#:</strong> I am developing my PAP (Prova de Aptidão Profissional), which is the mandatory final project for vocational courses.",
        "sobre-li-pap-link": "<strong>Link to my PAP:</strong> <a style='color: lawngreen;' href='https://github.com/RyanBelonia/PAPE-RYAN' target='_blank'>Access PAP</a>",
        "sobre-li-estagio": "<strong>Interning at Internet Web Solutions (Málaga):</strong> Working on the structure of the VOICE app, among other activities.",
        "sobre-titulo-linguas": "> Languages",
        "sobre-lang-pt": "<strong>Portuguese:</strong> Native",
        "sobre-lang-en": "<strong>English:</strong> Experienced",
        "sobre-lang-outros": "<strong>Italian, Japanese, and Spanish:</strong> I would like to learn",

        // Página: sobre.html - Bloco 2 (Hobbies e Interesses)
        "sobre-titulo-interesses": "> Interests and Hobbies",
        "sobre-titulo-midia": "> Media & Culture",
        "sobre-texto-midia": "When I'm not focused on programming logic, you will probably find me watching an anime, movie, or series, reading a book on my phone, or exploring new technologies.",
        "sobre-texto-estetica": "I have a deep appreciation for classical aesthetics, especially traditional painting and architecture.",
        "sobre-titulo-musica": "> Music",
        "sobre-texto-musica": "I enjoy listening to music in general, but I'd highlight: Funk, Rock, and older songs (with the exception of Bruno Mars and some pop songs that I think are really cool).",
        "sobre-texto-bateria": "I am also learning to play the drums and find wind instruments very interesting.",

        //blog 
        "nav-blog": "Personal Blog",
        "blog-titulo-1": "My first post: First steps on the site",
        "blog-texto-1": "This is my personal blog. Here I will document my programming adventures, updates on my PAP, and anything I find interesting to share about technology and my life",
    }
};

// Função para mudar o idioma e varrer a tela
function mudarIdioma(idioma) {
    const textos = traducoes[idioma];
    for (let id in textos) {
        let elemento = document.getElementById(id);
        // Se ele achar o ID na página atual, ele troca. Se não achar, não dá erro.
        if (elemento) {
            elemento.innerHTML = textos[id];
        }
    }
    // Salva a preferência do usuário no navegador
    localStorage.setItem('idiomaEscolhido', idioma);
}

// Verifica o idioma salvo quando a página carrega
window.onload = function () {
    let idiomaSalvo = localStorage.getItem('idiomaEscolhido');
    if (idiomaSalvo) {
        mudarIdioma(idiomaSalvo);
    }
};