function switchSectionLanguage(sectionId, lang) {
    const engElement = document.getElementById(sectionId + '-eng');
    const ptbrElement = document.getElementById(sectionId + '-ptbr');

    if (lang === 'eng') {
        engElement.style.display = 'block';
        ptbrElement.style.display = 'none';
    } else if (lang === 'ptbr') {
        engElement.style.display = 'none';
        ptbrElement.style.display = 'block';
    }
}

// Função para alterar o idioma para inglês
function switchToEnglish() {
    switchSectionLanguage('home', 'eng');
    switchSectionLanguage('jairel', 'eng');
    switchSectionLanguage('flappycupy', 'eng');
    switchSectionLanguage('10songs', 'eng');
    //switchSectionLanguage('linktree', 'eng');

    document.querySelector('.enbtn').style.borderBottom = 'solid 1px rgb(224, 171, 25)';
    document.querySelector('.ptbtn').style.border = 'none';
}

// Função para alterar o idioma para português
function switchToPortuguese() {
    switchSectionLanguage('home', 'ptbr');
    switchSectionLanguage('jairel', 'ptbr');
    switchSectionLanguage('flappycupy', 'ptbr');
    switchSectionLanguage('10songs', 'ptbr');
    //switchSectionLanguage('linktree', 'ptbr');

    document.querySelector('.enbtn').style.border = 'none';
    document.querySelector('.ptbtn').style.borderBottom = 'solid 1px rgb(224, 171, 25)';
}

function showProject(projectId) {
    // Oculta todas as seções de projetos
    const projectSections = ['home', 'jairel', 'flappycupy', '10songs'];
    projectSections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            if (sectionId === projectId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        }
    });

    // Atualiza o estilo do botão do projeto selecionado
    const projectButtons = document.querySelectorAll('.pjbtn');
    projectButtons.forEach(button => {
        const buttonClasses = button.classList;
        if (buttonClasses.contains(projectId)) {
            button.style.color = 'rgb(224, 171, 25)';
        } else {
            button.style.color = 'azure';
        }
    });
}

