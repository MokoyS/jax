let isEnglish = false;

document.getElementById('language-toggle').addEventListener('click', function() {
    // Basculer entre l'anglais et le français
    isEnglish = !isEnglish;

    // Mettre à jour le texte du bouton en conséquence
    document.getElementById('language-toggle').textContent = isEnglish ? 'EN' : 'FR';

    // Mettre à jour le contenu en fonction de la langue
    updateContent();
    console.log(isEnglish)
    
});

function updateContent() {

    //  ----------- ACCEUIL ---------------

    const slogan = document.querySelector('.slogan');
    const sousslogan = document.querySelector('.sous-slogan'); 
    const decouvrir = document.querySelector('.button-54'); 

    //  ----------- HEADER ---------------

    const header = document.querySelector('.links');


    if (isEnglish) {

        //  ----------- ACCEUIL ---------------
        slogan.innerHTML = `
            <h3>Your vision, our code.</h3>
        `;
        decouvrir.innerHTML = `
            Discover us
        `;
        sousslogan.innerHTML = `
            <p>The agency JAX, founded by three passionate digital students, aims to design websites that perfectly meet your needs and creative aspirations.</p>
        `;

        header.innerHTML = `
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        `;

        //  ----------- HEADER ---------------
        
        document.documentElement.lang = 'en';
    } else {

        //  ----------- ACCEUIL ---------------

        slogan.innerHTML = `
            <h3>Votre vision, notre code.</h3>
        `;

        sousslogan.innerHTML = `
            <p>L'agence JAX, fondée par trois étudiants passionnés du digital, vise à concevoir des sites web qui répondent parfaitement à vos besoins et aspirations créatives.</p>
        `;

        decouvrir.innerHTML = `
            Nous découvrir
        `;

        //  ----------- HEADER ---------------

        header.innerHTML = `
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Qui nous sommes</a></li>
            <li><a href="#">Projets</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        `;

        document.documentElement.lang = 'fr';


    }

    
}

// Appel initial pour mettre à jour le contenu avec la langue actuelle
updateContent();
