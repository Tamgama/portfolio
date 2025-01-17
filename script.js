// Este script maneja el envío del formulario de contacto y valida los campos

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Validar que los campos no estén vacíos
    if (name === "" || email === "") {
      alert("Por favor, completa todos los campos.");
    } else {
      alert(`¡Gracias por contactarme, ${name}! Te responderé pronto.`);
      // Aquí podrías agregar el código para enviar los datos a un servidor, por ejemplo.
    }
  });
  