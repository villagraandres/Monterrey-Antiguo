const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directory containing the .jpg images
const inputDir = path.join(__dirname, 'images');
const outputDir = path.join(__dirname, 'webp-images');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to convert .jpg to .webp
async function convertToWebp() {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        const inputFilePath = path.join(inputDir, file);
        const outputFilePath = path.join(outputDir, file.replace(/\.jpg$/i, '.webp'));

        if (path.extname(file).toLowerCase() === '.jpg') {
            try {
                await sharp(inputFilePath)
                    .webp({ quality: 80 }) // Adjust quality as needed
                    .toFile(outputFilePath);
                console.log(`Converted: ${file} -> ${path.basename(outputFilePath)}`);
            } catch (error) {
                console.error(`Error converting ${file}:`, error);
            }
        }
    }
}

// Run the conversion
convertToWebp();
