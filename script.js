const form = document.getElementById('registroForm');
if (form) {

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const pais = document.getElementById('pais').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    if (celular.length < 10 || isNaN(celular)) {
      alert('📞 El número de celular debe tener al menos 10 dígitos y solo números.');
      return;
    }

    alert(
      `✅ Registro exitoso.\n\n` +
      `Nombre: ${nombre}\n` +
      `Correo: ${correo}\n` +
      `Motivo del contacto: ${mensaje}`
    );
  });
} else {
  console.error('El formulario con id "registroForm" no se encontró en el documento.');
}

  
