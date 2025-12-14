# Holly Acres - Official Website

Official website for Holly Acres, an Ottawa-based pop punk band bringing back the energy and emotion of early 2000s pop punk with heartfelt lyrics and nostalgic sound.

Built as a lightweight single-page application (SPA) using vanilla JavaScript, HTML5, and CSS3 with a modern dark neon aesthetic.

## About Holly Acres

Holly Acres is a pop punk band from Ottawa, Canada, known for their nostalgic early 2000s sound, driving guitar riffs, infectious melodies, and heartfelt lyrics that capture the spirit of the genre's golden era.

## Features

- **Dark Neon Theme**: Cyberpunk-inspired design with neon blue (#00d4ff) and pink (#ff66b2) accents
- **Animated Neon Logo**: SVG-based cursive neon sign in the navbar with pulsing glow effects
- **Single Page Application**: Smooth client-side routing without page reloads
- **Responsive Design**: Mobile-first approach that works on all devices
- **Smooth Scrolling**: Natural navigation between sections with active link tracking
- **Animated Elements**: Scroll-triggered animations with neon glow effects
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Performance Optimized**: No heavy frameworks, pure vanilla JS

## Integrated Services

- **Spotify Player**: Embedded artist profile with full discography
- **Apple Music Player**: Embedded artist profile for iOS users
- **Songkick Widget**: Live tour dates with ticket links and RSVP functionality
- All widgets styled to match the dark neon theme

## Sections

- **Home**: Hero section with band photo banner and bio about Ottawa pop punk roots
- **Music**: Side-by-side Spotify and Apple Music embedded players with direct links
- **Tour**: Live Songkick widget displaying upcoming shows with country filters
- **Gallery**: Photo grid with neon hover effects (placeholder emojis for now)
- **Contact**: Email and social media links with neon styling

## Getting Started

### Prerequisites

No build tools or dependencies required! Just a modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it!

### Local Development

For local development with live reload, you can use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have it installed)
npx serve

# VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

Then navigate to `http://localhost:8000` in your browser.

## Project Structure

```
HollyAcresWeb/
├── .github/
│   └── copilot-instructions.md  # Development guidelines
├── index.html                    # Main HTML file with embedded widgets
├── css/
│   └── styles.css               # Dark neon theme styling
├── js/
│   └── app.js                   # SPA router and interactivity
├── assets/
│   ├── black-logo.png           # Logo (dark backgrounds)
│   ├── white-logo.png           # Logo (light backgrounds)
│   ├── colour-logo.jpeg         # Color logo
│   ├── group-banner.jpeg        # Hero banner image
│   └── README.md                # Asset guidelines
└── README.md                     # This file
```

## Design System

### Color Palette
- **Neon Pink**: `#ff66b2` - Primary accent, hover states
- **Neon Blue**: `#00d4ff` - Secondary accent, links, buttons
- **Dark Background**: `#0a0a0a` - Main background
- **Card Background**: `#1a1a1a` - Section cards
- **Text Light**: `#ffffff` - Primary text
- **Text Muted**: `#888888` - Secondary text

### Neon Effects
- All interactive elements have neon glow on hover
- Section titles have permanent blue glow with shadow
- Cards have colored borders that glow on interaction
- Buttons use pink-to-blue gradients with glow effects
- SVG logo has pulsing animation

### Typography
- **Logo**: Cursive script with neon gradient
- **Body**: 'Segoe UI' and system fonts
- **Headings**: Bold with neon glow effects

## Customization

### Updating Band Content

1. **Bio**: Edit text in `#home` section in `index.html`
2. **Gallery**: Replace emoji placeholders with actual images in `assets/` folder
3. **Social Links**: Update URLs in `#contact` section
4. **Colors**: Modify CSS variables in `:root` selector in `styles.css`

### Adding Gallery Images

```html
<!-- Replace this: -->
<div class="gallery-placeholder">📸</div>

<!-- With this: -->
<img src="assets/images/photo.jpg" alt="Band Photo">
```

### JavaScript Features

All features in `js/app.js`:

- **Router**: Hash-based navigation with smooth scrolling
- **Navigation**: Mobile menu toggle, scroll-based active link updates
- **SmoothScroll**: Smooth scrolling to all anchor links
- **AnimationObserver**: Fade-in animations for cards and items on scroll

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Zero dependencies**: No frameworks or libraries
- **Lightweight**: Total size < 100KB (before images)
- **Fast loading**: Optimized CSS and vanilla JS
- **SEO friendly**: Semantic HTML5 structure

## Deployment Options

### GitHub Pages (Recommended - Free)

1. Push your code to GitHub
2. Go to Settings > Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/HollyAcresWeb`

### Netlify (Easy Drag-and-Drop)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag your project folder to their deployment area
3. Instant deployment with free HTTPS and custom domain support

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import from GitHub or deploy directly
3. Automatic deployments on every push

### Cloudflare Pages

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repo
3. Fast global CDN with free unlimited bandwidth

All hosting options are free and include HTTPS/SSL certificates.

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, flexbox, grid, animations
- **Vanilla JavaScript**: ES6+, classes, async/await
- **SVG**: Custom neon logo with filters and gradients
- **External APIs**: Spotify, Apple Music, Songkick widgets

## Links

- **Spotify**: [Holly Acres on Spotify](https://open.spotify.com/artist/0pVuSJKSb44X2uTqOWJlPr)
- **Apple Music**: [Holly Acres on Apple Music](https://music.apple.com/ca/artist/holly-acres/1545279771)
- **Songkick**: [Holly Acres Tour Dates](https://www.songkick.com/artists/10369031)

## License

All rights reserved © 2025 Holly Acres

## Contact

For booking inquiries and press:
- 📧 info@hollyacres.com
- 🎵 Follow us on social media
- Email: info@hollyacres.com
- Follow us on social media

---

Built with ❤️ for Holly Acres