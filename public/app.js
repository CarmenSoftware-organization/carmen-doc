/**
 * Carmen ERP Documentation Website
 * Main Application JavaScript
 */

// Configuration - Now using pre-converted HTML files
const DOC_BASE_PATH = 'docs/';
const USE_HTML = true; // Use pre-converted HTML files

// State
let currentFile = '';
let documentStructure = {};
let allDocuments = [];

// Initialize Mermaid
mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
    }
});

// Configure Marked
marked.setOptions({
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(code, { language: lang }).value;
            } catch (err) {}
        }
        return hljs.highlightAuto(code).value;
    },
    breaks: true,
    gfm: true
});

// Document Structure
const docStructure = {
    'Overview': {
        icon: 'fa-home',
        files: [
            { name: 'System Documentation Index', file: 'SYSTEM-DOCUMENTATION-INDEX.html' },
            { name: 'Documentation Catalog', file: 'DOCUMENTATION-CATALOG.html' },
            { name: 'Documentation Summary', file: 'DOCUMENTATION-SUMMARY-REPORT.html' },
            { name: 'Module Verification', file: 'MODULE-VERIFICATION-REPORT.html' },
            { name: 'System Gaps & Roadmap', file: 'SYSTEM-GAPS-AND-ROADMAP.html' }
        ]
    },
    'Architecture': {
        icon: 'fa-sitemap',
        files: [
            { name: 'System Architecture', file: 'architecture/SYSTEM-ARCHITECTURE.html' }
        ]
    },
    'Stakeholders': {
        icon: 'fa-users',
        files: [
            { name: 'Business Value', file: 'stakeholders/BUSINESS-VALUE.html' }
        ]
    },
    'Procurement': {
        icon: 'fa-shopping-cart',
        files: [
            { name: 'Purchase Requests', file: 'pr/README.html' },
            { name: 'Purchase Orders', file: 'po/README.html' },
            { name: 'Goods Received Note', file: 'grn/README.html' },
            { name: 'Credit Notes', file: 'cn/README.html' },
            { name: 'PR Templates', file: 'prt/README.html' }
        ]
    },
    'Inventory Management': {
        icon: 'fa-boxes',
        files: [
            { name: 'Inventory Overview', file: 'inv/README.html' },
            { name: 'Inventory Specification', file: 'inv/inventory-management-specification.html' },
            { name: 'Inventory Sitemap', file: 'inv/inventory-management-sitemap.html' },
            { name: 'Physical Count', file: 'pc/README.html' },
            { name: 'Spot Check', file: 'sc/README.html' }
        ]
    },
    'Vendor Management': {
        icon: 'fa-handshake',
        files: [
            { name: 'Vendor Management Overview', file: 'vm/README.html' },
            { name: 'Vendor Management Module', file: 'vm/VENDOR-MANAGEMENT-MODULE.html' },
            { name: 'Manage Vendors', file: 'vm/MANAGE-VENDORS.html' },
            { name: 'Templates', file: 'vm/TEMPLATES.html' },
            { name: 'Campaigns', file: 'vm/CAMPAIGNS.html' },
            { name: 'Pricelists', file: 'vm/PRICELISTS.html' },
            { name: 'Vendor Portal', file: 'vm/VENDOR-PORTAL.html' }
        ]
    },
    'Product Management': {
        icon: 'fa-cube',
        files: [
            { name: 'Product Management Overview', file: 'pm/README.html' },
            { name: 'Product Management Specification', file: 'pm/product-management-specification.html' },
            { name: 'Product Management Sitemap', file: 'pm/product-management-sitemap.html' }
        ]
    },
    'Store Operations': {
        icon: 'fa-store',
        files: [
            { name: 'Store Operations Overview', file: 'store-ops/README.html' },
            { name: 'Store Operations Module', file: 'store-ops/STORE-OPERATIONS-MODULE.html' },
            { name: 'Store Requisitions', file: 'store-ops/STORE-REQUISITIONS.html' },
            { name: 'Stock Replenishment', file: 'store-ops/STOCK-REPLENISHMENT.html' },
            { name: 'Wastage Reporting', file: 'store-ops/WASTAGE-REPORTING.html' },
            { name: 'Glossary', file: 'store-ops/GLOSSARY.html' }
        ]
    },
    'Dashboard': {
        icon: 'fa-chart-line',
        files: [
            { name: 'Dashboard Overview', file: 'dashboard/README.html' },
            { name: 'Dashboard Sitemap', file: 'dashboard/sitemap.html' }
        ]
    },
    'System Requirements': {
        icon: 'fa-clipboard-list',
        files: [
            { name: 'System Requirements', file: 'carmen-erp-system-requirements-documentation.html' },
            { name: 'Schema Analysis', file: 'comprehensive-schema-analysis.html' }
        ]
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Carmen ERP Documentation...');

    initializeNavigation();
    initializeEventListeners();

    // Load initial content based on URL hash or show welcome screen
    const hash = window.location.hash.substring(1);
    if (hash) {
        loadDocument(hash);
    }
});

// Initialize Navigation
function initializeNavigation() {
    const navMenu = document.getElementById('navMenu');
    navMenu.innerHTML = '';

    Object.keys(docStructure).forEach(section => {
        const sectionData = docStructure[section];

        const navGroup = document.createElement('div');
        navGroup.className = 'nav-group';

        const header = document.createElement('div');
        header.className = 'nav-group-header';
        header.innerHTML = `
            <i class="fas fa-chevron-down"></i>
            <i class="fas ${sectionData.icon}"></i>
            <span>${section}</span>
        `;

        const items = document.createElement('div');
        items.className = 'nav-items';

        sectionData.files.forEach(fileData => {
            const item = document.createElement('a');
            item.className = 'nav-item';
            item.href = `#${fileData.file}`;
            item.dataset.file = fileData.file;
            item.innerHTML = `
                <i class="fas fa-file-alt"></i>
                <span>${fileData.name}</span>
            `;

            item.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = `${DOC_BASE_PATH}${fileData.file}`;
            });

            items.appendChild(item);
            allDocuments.push({ ...fileData, section });
        });

        header.addEventListener('click', () => {
            navGroup.classList.toggle('collapsed');
        });

        navGroup.appendChild(header);
        navGroup.appendChild(items);
        navMenu.appendChild(navGroup);
    });
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebar = document.getElementById('sidebar');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');
        });
    }

    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeMobileSidebar);
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }

    // Welcome screen quick links
    document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const file = card.dataset.file;
            if (file) {
                loadDocument(file);
            }
        });
    });
}

// Load Document
async function loadDocument(filePath) {
    console.log('Loading document:', filePath);
    currentFile = filePath;

    // Update URL hash
    window.location.hash = filePath;

    // Update active nav item
    updateActiveNavItem(filePath);

    // Update breadcrumb
    updateBreadcrumb(filePath);

    // For HTML files, navigate directly
    if (filePath.endsWith('.html')) {
        window.location.href = `${DOC_BASE_PATH}${filePath}`;
    }
}

// Render Mermaid Diagrams
async function renderMermaidDiagrams() {
    const mermaidBlocks = document.querySelectorAll('pre code.language-mermaid');

    for (let i = 0; i < mermaidBlocks.length; i++) {
        const block = mermaidBlocks[i];
        const code = block.textContent;
        const pre = block.parentElement;

        try {
            const id = `mermaid-${Date.now()}-${i}`;
            const { svg } = await mermaid.render(id, code);

            const container = document.createElement('div');
            container.className = 'mermaid';
            container.innerHTML = svg;

            pre.replaceWith(container);
        } catch (error) {
            console.error('Mermaid rendering error:', error);
            const errorDiv = document.createElement('div');
            errorDiv.className = 'mermaid-error';
            errorDiv.innerHTML = `
                <p style="color: var(--danger-color); padding: 1rem; background: var(--bg-secondary); border-radius: var(--border-radius);">
                    <i class="fas fa-exclamation-triangle"></i> Mermaid diagram rendering failed: ${error.message}
                </p>
            `;
            pre.replaceWith(errorDiv);
        }
    }
}

// Generate Table of Contents
function generateTableOfContents() {
    const content = document.getElementById('content');
    const tocNav = document.getElementById('tocNav');
    const headings = content.querySelectorAll('h1, h2, h3');

    if (headings.length === 0) {
        tocNav.innerHTML = '<p style="color: var(--text-tertiary); font-size: 0.875rem;">No headings found</p>';
        return;
    }

    tocNav.innerHTML = '';

    headings.forEach((heading, index) => {
        const level = heading.tagName.toLowerCase();
        const text = heading.textContent;
        const id = `heading-${index}`;
        heading.id = id;

        const link = document.createElement('a');
        link.className = `toc-link level-${level.charAt(1)}`;
        link.href = `#${id}`;
        link.textContent = text;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Update active state
            document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });

        tocNav.appendChild(link);
    });
}

// Update Active Nav Item
function updateActiveNavItem(filePath) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.file === filePath) {
            item.classList.add('active');

            // Expand parent group
            const group = item.closest('.nav-group');
            if (group) {
                group.classList.remove('collapsed');
            }
        }
    });
}

// Update Breadcrumb
function updateBreadcrumb(filePath) {
    const breadcrumb = document.getElementById('breadcrumb');
    const parts = filePath.split('/');
    const fileName = parts[parts.length - 1].replace('.md', '');

    let breadcrumbHTML = '<a href="#" class="breadcrumb-item" onclick="window.location.hash=\'\'; return false;">Home</a>';

    // Find section
    let section = '';
    for (const [sectionName, sectionData] of Object.entries(docStructure)) {
        if (sectionData.files.some(f => f.file === filePath)) {
            section = sectionName;
            break;
        }
    }

    if (section) {
        breadcrumbHTML += `<span class="breadcrumb-item">${section}</span>`;
    }

    breadcrumbHTML += `<span class="breadcrumb-item">${formatFileName(fileName)}</span>`;

    breadcrumb.innerHTML = breadcrumbHTML;
}

// Format File Name
function formatFileName(fileName) {
    return fileName
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
}

// Handle Search
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 2) {
        initializeNavigation();
        return;
    }

    const navMenu = document.getElementById('navMenu');
    navMenu.innerHTML = '';

    const results = allDocuments.filter(doc =>
        doc.name.toLowerCase().includes(query) ||
        doc.file.toLowerCase().includes(query) ||
        doc.section.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        navMenu.innerHTML = '<p style="padding: 1rem; color: var(--text-tertiary); text-align: center;">No results found</p>';
        return;
    }

    const resultGroup = document.createElement('div');
    resultGroup.className = 'nav-section';

    const title = document.createElement('div');
    title.className = 'nav-section-title';
    title.textContent = `Search Results (${results.length})`;
    resultGroup.appendChild(title);

    results.forEach(result => {
        const item = document.createElement('a');
        item.className = 'nav-item';
        item.href = `#${result.file}`;
        item.dataset.file = result.file;
        item.innerHTML = `
            <i class="fas fa-file-alt"></i>
            <div>
                <div>${result.name}</div>
                <div style="font-size: 0.75rem; color: var(--text-tertiary);">${result.section}</div>
            </div>
        `;

        item.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = `${DOC_BASE_PATH}${result.file}`;
        });

        resultGroup.appendChild(item);
    });

    navMenu.appendChild(resultGroup);
}

// Close Mobile Sidebar
function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('mobile-open');
}

// Utility: Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle browser back/forward
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        loadDocument(hash);
    }
});
