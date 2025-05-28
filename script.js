document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    const successMessageDiv = document.getElementById('successMessage');

    if (quoteForm) {
        quoteForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío tradicional del formulario (que recargaría la página)

            // Aquí puedes agregar lógica para "enviar" los datos del formulario,
            // por ejemplo, usando fetch() para enviar a un servidor.
            // Por ahora, solo simularemos un envío exitoso.

            // Mostrar el mensaje de éxito
            successMessageDiv.textContent = '¡Su cotización fue enviada con éxito! Nos pondremos en contacto pronto.';
            successMessageDiv.style.display = 'block'; // Hacer visible el mensaje

            // Opcional: Limpiar el formulario después del envío
            quoteForm.reset();

            // Opcional: Ocultar el mensaje después de unos segundos
            setTimeout(() => {
                successMessageDiv.textContent = '';
                successMessageDiv.style.display = 'none';
            }, 5000); // El mensaje desaparecerá después de 5 segundos
        });
    }
});