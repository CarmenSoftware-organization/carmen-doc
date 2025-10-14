# Carmen ERP Documentation Website

A modern, self-contained documentation website with **pre-converted HTML files** and full Mermaid diagram support.

## 🎯 Self-Contained Design

All markdown files have been **pre-converted to HTML** with Mermaid diagrams fully rendered. The site is completely self-contained in the `public/` folder - no external dependencies or build process needed!

## Features

✨ **Pre-Converted HTML**
- All 100+ markdown files converted to HTML
- Mermaid diagrams pre-rendered and working
- All images copied and paths resolved
- Ready to deploy anywhere

📊 **Full Mermaid Support**
- All diagram types working:
  - Flowcharts (graph TB, LR)
  - Sequence diagrams
  - State diagrams
  - Pie charts
  - Gantt charts
  - Class diagrams
  - Entity relationship diagrams

🎨 **Modern Design**
- Clean, professional UI
- Responsive layout (desktop/tablet/mobile)
- Syntax highlighting for code
- Smooth animations

🔍 **Navigation**
- Organized sidebar with sections
- Quick links to key documents
- Direct HTML file links
- Fast page loads

## File Structure

```
public/                          # Self-contained website
├── index.html                   # Homepage with navigation
├── styles.css                   # Complete styling
├── app.js                       # Navigation logic
├── serve.sh                     # Quick server script
└── docs/                        # Converted documentation (100+ files)
    ├── SYSTEM-DOCUMENTATION-INDEX.html
    ├── architecture/
    │   └── SYSTEM-ARCHITECTURE.html
    ├── pr/                      # Purchase Requests
    ├── vm/                      # Vendor Management
    ├── inv/                     # Inventory
    ├── pm/                      # Product Management
    ├── store-ops/               # Store Operations
    └── ...                      # All markdown converted to HTML
```

## 🚀 Usage

### Quick Start (Recommended)

```bash
cd public
./serve.sh
```

Select option 1 (Python 3) and navigate to `http://localhost:8080`

### Alternative Methods

```bash
# Python 3
cd public
python3 -m http.server 8080

# Node.js
cd public
npx http-server -p 8080

# PHP
cd public
php -S localhost:8080
```

Then open `http://localhost:8080` in your browser!

## 📦 Deployment

### GitHub Pages

The `public/` folder is completely self-contained and ready to deploy:

```bash
# Push to GitHub
git add public
git commit -m "Add documentation website"
git push

# In repository Settings → Pages:
# Source: Deploy from a branch
# Branch: main
# Folder: /public
```

Your site will be at: `https://yourusername.github.io/carmen-doc/`

### Netlify

Simply drag and drop the `public/` folder to [Netlify](https://netlify.com) - no build configuration needed!

### Vercel / Other Platforms

1. Set publish directory to `public`
2. No build command needed
3. Deploy!

## Navigation Structure

The documentation is organized into the following sections:

- **Overview**: System documentation index, catalogs, and reports
- **Architecture**: System architecture and technical diagrams
- **Stakeholders**: Business value and ROI documentation
- **Procurement**: PR, PO, GRN, Credit Notes modules
- **Inventory Management**: Stock tracking, physical counts, spot checks
- **Vendor Management**: Vendor relationships and price lists
- **Product Management**: Product catalog and categories
- **Store Operations**: Store requisitions, replenishment, wastage
- **Dashboard**: Dashboard analytics and metrics
- **System Requirements**: Complete system requirements

## 🔄 Re-converting Documentation

If you update the markdown files in `doc/`, re-run the conversion:

```bash
# From project root
npm run convert
```

This will:
1. Convert all `.md` files to `.html`
2. Process Mermaid diagrams
3. Copy all images
4. Update paths
5. Output to `public/docs/`

## 📝 Adding New Documents

1. Add your `.md` file to the `doc/` folder
2. Run `npm run convert`
3. Add to navigation in `public/app.js`:

```javascript
'Your Section': {
    icon: 'fa-icon-name',
    files: [
        { name: 'Display Name', file: 'path/to/file.html' }
    ]
}
```

### Styling

All styles are in `styles.css`. CSS variables are defined at the top for easy customization:

```css
:root {
    --primary-color: #4f46e5;     /* Main brand color */
    --bg-primary: #ffffff;         /* Background color */
    --text-primary: #111827;       /* Text color */
    /* ... more variables */
}
```

### Mermaid Theme

Mermaid configuration in `app.js`:

```javascript
mermaid.initialize({
    startOnLoad: false,
    theme: 'default',  // Change to 'dark', 'forest', 'neutral'
    // ... more options
});
```

## 🛠 Technologies Used

**Conversion (Build Time)**:
- **Node.js + Marked.js** - Markdown to HTML conversion
- Pre-processes all diagrams and images

**Runtime (Browser)**:
- **Mermaid.js** - Renders pre-converted diagram code
- **Highlight.js** - Syntax highlighting
- **Font Awesome** - Icons
- **Vanilla JavaScript** - Pure JS, no frameworks

**Key Advantage**: All processing done at build time, fast page loads at runtime!

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Roadmap

- [ ] Print-friendly styles
- [ ] Export to PDF
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Full-text search with fuzzy matching
- [ ] Bookmark/favorites system
- [ ] Version history

## Performance

- Lazy loading of documents
- Efficient Mermaid rendering
- Minimal dependencies
- Optimized CSS and JavaScript
- Fast page transitions

## 🔍 How It Works

### Pre-Conversion Process

1. **Markdown Parsing**: `marked.js` converts markdown to HTML
2. **Mermaid Processing**: Mermaid code blocks wrapped in `<div class="mermaid">`
3. **Image Path Resolution**: Relative paths converted to absolute
4. **HTML Template**: Each file wrapped in styled template
5. **File Output**: Saved to `public/docs/` with same structure

### Runtime Rendering

1. User clicks document in navigation
2. Browser loads pre-converted HTML file
3. Mermaid.js renders diagram divs on page load
4. Highlight.js colors code blocks
5. Instant display - no conversion needed!

## Troubleshooting

### Mermaid diagrams not showing

- Check browser console for Mermaid errors
- Verify Mermaid CDN is loading: `https://cdn.jsdelivr.net/npm/mermaid/`
- Diagrams should be in `<div class="mermaid">` tags

### Need to re-convert docs

```bash
npm run convert
```

### Images not displaying

- Verify images were copied to `public/docs/`
- Check image paths are relative in markdown
- Re-run conversion if images are missing

## License

This documentation website is part of the Carmen ERP project.

## Support

For issues or questions:
- Check browser console for errors
- Verify all CDN resources are loading
- Ensure proper web server configuration

---

**Built with ❤️ for Carmen ERP**
