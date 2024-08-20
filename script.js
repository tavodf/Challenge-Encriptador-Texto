// Encriptar el texto sustituyendo letras por otros caracteres
function encriptarTexto() {
    const input = document.getElementById('textoInput').value;
    let output = input
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  
    document.getElementById('textoOutput').value = output;
    mostrarAlerta('¡Texto encriptado exitosamente!');
  }
  
  // Desencriptar el texto volviendo a sustituir los caracteres
  function desencriptarTexto() {
    const input = document.getElementById('textoInput').value;
    let output = input
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  
    document.getElementById('textoOutput').value = output;
    mostrarAlerta('¡Texto desencriptado exitosamente!');
  }
  
  // Copiar el texto encriptado al portapapeles
  function copiarTexto() {
    const output = document.getElementById('textoOutput');
    output.select();
    document.execCommand('copy');
    mostrarAlerta('¡Texto copiado al portapapeles!');
  }
  
  // Mostrar una alerta temporal
  function mostrarAlerta(mensaje) {
    const alerta = document.getElementById('alerta');
    alerta.textContent = mensaje;
    alerta.classList.add('show');
    setTimeout(() => {
      alerta.classList.remove('show');
    }, 3000);
  }
  
  // Alternar entre modo oscuro y modo claro
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  