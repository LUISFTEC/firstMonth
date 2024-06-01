document.addEventListener('DOMContentLoaded', function() {
    let text = "¡Hola BRI 💋, mi amor 💕💕!"; // Texto a animar
    let typingContainer = document.getElementById('typing'); // Elemento donde se escribe el texto
    let i = 0;
    let speed = 50; // Velocidad en milisegundos

    function typeWriter() {
        if (i < text.length) {
            typingContainer.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); // Inicia la animación al cargar la página
});

function mostrarMensaje() {
    const mensajeAdicional = document.getElementById("mensajeAdicional");
    
    // Mostrar el mensaje adicional
    mensajeAdicional.style.display = "block";

    // Reproducir el audio
    const audio = document.getElementById("miAudio");
    audio.play();
}

function cerrarMensaje() {
    const mensajeAdicional = document.getElementById("mensajeAdicional");
    
    // Ocultar el mensaje adicional
    mensajeAdicional.style.display = "none";

    // Detener y rebobinar el audio
    const audio = document.getElementById("miAudio");
    audio.pause();
    audio.currentTime = 0;
}
