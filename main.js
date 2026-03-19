// main.js - Punto de entrada principal
console.log('CV de Sofia Salazar Mata cargado correctamente');

// Importar módulos cuando los crees
// import { saludar } from './modules/utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            alert('¡Gracias por tu interés! Pronto podrás descargar mi CV.');
        });
    }
});

