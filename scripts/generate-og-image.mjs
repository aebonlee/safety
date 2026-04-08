import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public');

const WIDTH = 1200;
const HEIGHT = 630;

// Dark blue theme matching #1D4ED8
const PRIMARY = '#1D4ED8';
const PRIMARY_DARK = '#1E40AF';
const BG_DARK = '#0F172A';
const BG_GRADIENT_END = '#1E293B';

// Create SVG for the OG image
const svgImage = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${BG_DARK};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${BG_GRADIENT_END};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${PRIMARY};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${PRIMARY_DARK};stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />

  <!-- Decorative circles -->
  <circle cx="1050" cy="120" r="200" fill="${PRIMARY}" opacity="0.08" />
  <circle cx="150" cy="530" r="150" fill="${PRIMARY}" opacity="0.06" />
  <circle cx="900" cy="500" r="100" fill="${PRIMARY}" opacity="0.05" />

  <!-- Top accent line -->
  <rect x="0" y="0" width="${WIDTH}" height="6" fill="url(#accent)" />

  <!-- Shield icon -->
  <g transform="translate(80, 160)">
    <path d="M50 0 L100 25 L100 65 C100 95 75 120 50 130 C25 120 0 95 0 65 L0 25 Z"
          fill="${PRIMARY}" opacity="0.9"/>
    <path d="M50 15 L88 35 L88 63 C88 87 68 108 50 116 C32 108 12 87 12 63 L12 35 Z"
          fill="${BG_DARK}" opacity="0.6"/>
    <text x="50" y="78" font-family="Arial, sans-serif" font-size="36" font-weight="bold"
          fill="white" text-anchor="middle">&#x2713;</text>
  </g>

  <!-- Title -->
  <text x="210" y="210" font-family="Arial, sans-serif" font-size="56" font-weight="900" fill="white">
    DreamIT Safety
  </text>

  <!-- Subtitle Korean -->
  <text x="210" y="270" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#94A3B8">
    &#xC548;&#xC804;&#xBCF4;&#xAC74;&#xAD00;&#xB9AC; &#xD559;&#xC2B5; &#xD50C;&#xB7AB;&#xD3FC;
  </text>

  <!-- Divider -->
  <rect x="210" y="300" width="120" height="4" rx="2" fill="${PRIMARY}" />

  <!-- Description -->
  <text x="210" y="355" font-family="Arial, sans-serif" font-size="22" fill="#CBD5E1">
    &#xC0B0;&#xC5C5;&#xC548;&#xC804;&#xBCF4;&#xAC74;&#xBC95; | &#xC548;&#xC804;&#xAD00;&#xB9AC; | &#xBCF4;&#xAC74;&#xAD00;&#xB9AC; | &#xC704;&#xD5D8;&#xC131;&#xD3C9;&#xAC00;
  </text>
  <text x="210" y="390" font-family="Arial, sans-serif" font-size="22" fill="#CBD5E1">
    &#xC0B0;&#xC5C5;&#xC7AC;&#xD574; &#xC608;&#xBC29; | &#xC548;&#xC804;&#xBCF4;&#xAC74;&#xAD50;&#xC721; | &#xC791;&#xC5C5;&#xD658;&#xACBD; | &#xBE44;&#xC0C1;&#xB300;&#xC751;
  </text>

  <!-- URL -->
  <text x="210" y="460" font-family="Arial, sans-serif" font-size="20" font-weight="600" fill="${PRIMARY}">
    safety.dreamitbiz.com
  </text>

  <!-- Bottom bar -->
  <rect x="0" y="${HEIGHT - 60}" width="${WIDTH}" height="60" fill="${PRIMARY}" opacity="0.15" />
  <text x="80" y="${HEIGHT - 25}" font-family="Arial, sans-serif" font-size="18" font-weight="600" fill="#94A3B8">
    DreamIT Biz &#xB4DC;&#xB9BC;&#xC544;&#xC774;&#xD2F0;
  </text>
  <text x="${WIDTH - 80}" y="${HEIGHT - 25}" font-family="Arial, sans-serif" font-size="16" fill="#64748B" text-anchor="end">
    8 Categories &#xB7; 48 Topics
  </text>
</svg>`;

async function generate() {
  try {
    await sharp(Buffer.from(svgImage))
      .png()
      .toFile(path.join(outDir, 'og-image.png'));
    console.log('OG image generated: public/og-image.png (1200x630)');
  } catch (err) {
    console.error('Failed to generate OG image:', err);
    process.exit(1);
  }
}

generate();
