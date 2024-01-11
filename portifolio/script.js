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

function switchToEnglish() {
    showLoadingBar()

    switchSectionLanguage('home', 'eng');
    switchSectionLanguage('jairel', 'eng');
    switchSectionLanguage('flappycupy', 'eng');
    switchSectionLanguage('nodein', 'eng');
    switchSectionLanguage('proj', 'eng')

    document.querySelector('.enbtn').style.borderBottom = 'solid 1px rgb(224, 171, 25)';
    document.querySelector('.ptbtn').style.border = 'none';
}

function switchToPortuguese() {
    showLoadingBar()

    switchSectionLanguage('home', 'ptbr');
    switchSectionLanguage('jairel', 'ptbr');
    switchSectionLanguage('flappycupy', 'ptbr');
    switchSectionLanguage('nodein', 'ptbr');
    switchSectionLanguage('proj', 'ptbr')

    document.querySelector('.enbtn').style.border = 'none';
    document.querySelector('.ptbtn').style.borderBottom = 'solid 1px rgb(224, 171, 25)';
}

function showProject(projectId) {
    showLoadingBar();

    const projectSections = ['home', 'jairel', 'flappycupy', 'nodein'];
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
  


/* ANIMATIONS */

function showLoadingBar() {
    // Exibe a barra de carregamento
    document.getElementById('loading-bar').style.display = 'block';

    const articleContent = document.querySelector('article');
    articleContent.classList.add('loading-content-hidden');

    let progress = 0;

    updateLoadingProgress(progress);

    function simulateLoading() {
        progress += 7;
        updateLoadingProgress(progress);

        if (progress >= 100) {
            hideLoadingBar(articleContent);
        } else {
            setTimeout(simulateLoading, 50);
        }
    }

    simulateLoading();
}

function hideLoadingBar(articleContent) {
    document.getElementById('loading-bar').style.display = 'none';

    articleContent.classList.remove('loading-content-hidden');
    articleContent.classList.add('fade-in');
}

function updateLoadingProgress(progress) {
    document.getElementById('loading-progress').style.width = `${progress}%`;
}
