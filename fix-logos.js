const https = require('https');
const fs = require('fs');
const path = require('path');

// Function to download file
function downloadFile(url, filename) {
    return new Promise((resolve, reject) => {
        const assetsDir = path.join(__dirname, 'public', 'assets');
        const filePath = path.join(assetsDir, filename);
        const file = fs.createWriteStream(filePath);

        https.get(url, (response) => {
            // Follow redirects
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadFile(response.headers.location, filename);
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                console.log(`✅ Fixed: ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => { });
            console.log(`❌ Error fixing ${filename}:`, err.message);
            reject(err);
        });
    });
}

// Fix the problematic logos with better URLs
const logosToFix = [
    { name: 'expo.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/firebase/firebase-plain.svg' }, // Using Firebase as placeholder for Expo
    { name: 'aws.svg', url: 'https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'github-actions.svg', url: 'https://raw.githubusercontent.com/actions/runner-images/main/images/win/scripts/ImageHelpers/TestsHelpers/testdata/github-actions.svg' },
    { name: 'prisma.svg', url: 'https://raw.githubusercontent.com/prisma/docs/main/src/images/database/prisma.svg' },
    { name: 'tailwind.svg', url: 'https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/tailwindcss/tailwindcss-plain.svg' },
];

// Download the fixed logos
async function fixLogos() {
    console.log('🔧 Fixing problematic logos...\n');

    for (const logo of logosToFix) {
        try {
            await downloadFile(logo.url, logo.name);
        } catch (error) {
            console.log(`❌ Could not fix ${logo.name}, creating placeholder...`);

            // Create a simple placeholder SVG
            const placeholder = `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="#4A90E2" rx="8"/>
  <text x="32" y="40" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#FFF">${logo.name.split('.')[0].toUpperCase()}</text>
</svg>`;

            const assetsDir = path.join(__dirname, 'public', 'assets');
            const filePath = path.join(assetsDir, logo.name);
            fs.writeFileSync(filePath, placeholder);
            console.log(`✅ Created placeholder for: ${logo.name}`);
        }
    }

    console.log('\n✅ Logo fixing complete!');
}

// Run the fix
fixLogos();
