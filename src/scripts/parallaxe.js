let jax = document.getElementById('section-principal');
let beam = document.getElementById('beam');
let shouldStopUpdating = false;
let SEUIL = 500; // Définir votre seuil ici

window.addEventListener('scroll', () => {
    if (!shouldStopUpdating) {
        let value = window.scrollY;
        console.log(value);
        // jax.style.marginTop = value * -2.5 + 'px';
        jax.style.opacity = 1 - value / 500;
        jax.style.marginBottom = 100 - value / 2 + 'px';

        // Vérifier si la valeur de défilement dépasse le seuil
        if (value >= SEUIL) {
            shouldStopUpdating = true;
        }
    } else {
        // Si la mise à jour doit être arrêtée, vérifier si le défilement est revenu en dessous du seuil
        let value = window.scrollY;
        if (value < SEUIL) {
            shouldStopUpdating = false;
        }
    }
});
