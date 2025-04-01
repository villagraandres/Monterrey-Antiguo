const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuración
const config = {
  inputRoot: path.join(__dirname, 'images'),       // Carpeta raíz de imágenes
  outputExtension: '.webp',                       // Extensión de salida
  quality: 80,                                    // Calidad WebP (1-100)
  overwrite: false,                               // ¿Reemplazar WebP existentes?
  excludeFolders: ['webp', 'processed','icons']           // Carpetas a ignorar
};

// Función para recorrer carpetas recursivamente
async function processDirectory(currentDir, relativePath = '') {
  const items = fs.readdirSync(currentDir);
  
  for (const item of items) {
    const fullPath = path.join(currentDir, item);
    const relativeItemPath = path.join(relativePath, item);
    const stat = fs.statSync(fullPath);

    // Ignorar carpetas excluidas
    if (stat.isDirectory()) {
      if (!config.excludeFolders.includes(item.toLowerCase())) {
        await processDirectory(fullPath, relativeItemPath);
      }
      continue;
    }

    // Procesar solo JPG/JPEG
    if (/\.jpe?g$/i.test(item)) {
      const outputDir = path.join(config.inputRoot, '..', 'converted', relativePath);
      const outputFile = item.replace(/\.jpe?g$/i, config.outputExtension);
      const outputPath = path.join(outputDir, outputFile);

      // Saltar si ya existe el WebP y no queremos sobrescribir
      if (!config.overwrite && fs.existsSync(outputPath)) {
        console.log(`⏩ Saltando (existente): ${relativeItemPath}`);
        continue;
      }

      // Crear carpeta de destino si no existe
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Convertir imagen
      try {
        await sharp(fullPath)
          .webp({ quality: config.quality })
          .toFile(outputPath);
        console.log(`✅ Convertido: ${relativeItemPath} → ${outputFile}`);
      } catch (error) {
        console.error(`❌ Error convirtiendo ${relativeItemPath}:`, error.message);
      }
    }
  }
}

// Function to log messages with styles
function logMessage(message, type = 'info') {
  const logContainer = document.querySelector('.conversion-logs');
  if (logContainer) {
    const logEntry = document.createElement('div');
    logEntry.className = `log-${type}`;
    logEntry.textContent = message;
    logContainer.appendChild(logEntry);
    logContainer.scrollTop = logContainer.scrollHeight; // Auto-scroll to the bottom
  }
}

// Update console.log to use styled logs
console.log = (message) => logMessage(message, 'info');
console.error = (message) => logMessage(message, 'error');

// Verificación inicial
console.log('🔍 Iniciando conversión recursiva...');
if (!fs.existsSync(config.inputRoot)) {
  console.error(`❌ No existe la carpeta: ${config.inputRoot}`);
  process.exit(1);
}

// Ejecutar
processDirectory(config.inputRoot)
  .then(() => console.log('🎉 Conversión completada!'))
  .catch(err => console.error('Error general:', err));