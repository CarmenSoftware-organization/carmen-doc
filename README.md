# Carmen ERP System Documentation

Comprehensive documentation for Carmen, a hospitality-focused Enterprise Resource Planning (ERP) system designed for hotels, restaurants, and hospitality operations.

## Overview

Carmen is a complete end-to-end hospitality management system that streamlines operations from procurement to service delivery, with intelligent automation, real-time analytics, and seamless integration across all hotel departments.

## Documentation Structure

### Core System Documentation

- [`SYSTEM-DOCUMENTATION-INDEX.md`](doc/SYSTEM-DOCUMENTATION-INDEX.md) - Complete documentation index
- [`DOCUMENTATION-CATALOG.md`](doc/DOCUMENTATION-CATALOG.md) - Catalog of all documentation
- [`DOCUMENTATION-SUMMARY-REPORT.md`](doc/DOCUMENTATION-SUMMARY-REPORT.md) - Documentation summary report
- [`MODULE-VERIFICATION-REPORT.md`](doc/MODULE-VERIFICATION-REPORT.md) - Module verification and validation
- [`SYSTEM-GAPS-AND-ROADMAP.md`](doc/SYSTEM-GAPS-AND-ROADMAP.md) - System gaps and future roadmap
- [`carmen-erp-system-requirements-documentation.md`](doc/carmen-erp-system-requirements-documentation.md) - Complete system requirements
- [`comprehensive-schema-analysis.md`](doc/comprehensive-schema-analysis.md) - Database schema analysis
- [`module-spec-template.md`](doc/module-spec-template.md) - Template for module specifications

### Architecture Documentation

- **[Architecture](doc/architecture/)** - System architecture and technical design
  - System architecture overview
  - Technical architecture patterns
  - Integration architecture

### Module Documentation

#### Procurement & Purchasing

- **[PR (Purchase Request)](doc/pr/)** - Purchase requisition workflows
  - Purchase request module specification
  - Implementation specifications
  - User flows and interaction guides
  - Component documentation
  - System analysis

- **[PO (Purchase Order)](doc/po/)** - Purchase order management
  - Purchase order specifications
  - API documentation
  - Component details
  - User interaction guides

- **[GRN (Goods Receipt Note)](doc/grn/)** - Goods receipt and verification
  - GRN complete specifications
  - API documentation
  - Component documentation
  - User interaction guides
  - Screenshot references

- **[PRT (Purchase Request Templates)](doc/prt/)** - Purchase request template management
  - Template specifications
  - API documentation
  - Component details
  - User guides

- **[VM (Vendor Management)](doc/vm/)** - Vendor relationships and contracts
  - Vendor management module overview
  - Vendor profiles and management
  - Pricelists and campaigns
  - Vendor portal
  - Templates
  - Complete analysis and specifications

- **[CN (Credit Note)](doc/cn/)** - Credit note management
  - Credit note specifications
  - API documentation
  - Component details
  - User guides

#### Inventory & Materials

- **[INV (Inventory)](doc/inv/)** - Inventory management and tracking
  - Inventory management specifications
  - Sitemap and navigation
  - Analysis summaries
  - Glossary and gaps
  - Screenshot guides
  - Pages and components specifications

- **[Inventory](doc/inventory/)** - Advanced inventory operations
  - Advanced inventory management
  - Screenshot documentation
  - Detailed specifications

- **[Store Operations](doc/store-ops/)** - Store and warehouse management
  - Store operations module overview
  - Store requisitions
  - Stock replenishment
  - Wastage reporting
  - Shared components
  - Feature gaps and glossary
  - Screenshot summaries

- **[SC (Spot Check)](doc/sc/)** - Spot check and stock verification
  - Spot check specifications
  - Sitemap
  - Screenshot references

- **[SO (Store Operations)](doc/so/)** - Store operations management
  - Store operations specifications
  - Sitemap
  - Screenshot references

- **[SR (Store Requisitions)](doc/sr/)** - Store requisition workflows
  - Complete store requisition documentation
  - Navigation and UI systems
  - Dashboard and analytics
  - Procurement integration
  - Vendor integration
  - Inventory integration
  - User authentication context
  - System administration

#### Operations & Planning

- **[PM (Product Management)](doc/pm/)** - Product catalog and specifications
  - Product management specifications
  - Sitemap
  - Screenshot references

- **[PC (Physical Count)](doc/pc/)** - Physical inventory counting
  - Physical count specifications
  - Sitemap
  - Screenshot references

- **[Dashboard](doc/dashboard/)** - Analytics and reporting
  - Dashboard specifications
  - Completion summary
  - Sitemap
  - API specifications
  - Business logic
  - Components overview

### Stakeholder Documentation

- **[Stakeholders](doc/stakeholders/)** - Business value and stakeholder information
  - Business value documentation
  - Stakeholder requirements

## System Features

### Authentication & User Management
- Mock authentication system for development
- Role-based access control (staff, manager, financial-manager, purchasing-staff, chef, counter)
- Department and location context switching
- Permission-based UI and functionality control

### Dashboard & Analytics
- Real-time procurement metrics
- Order trends and spend analysis
- Supplier network insights
- Activity tracking and reporting
- KPI dashboards

### Core Capabilities

- **Procurement Management** - End-to-end purchasing workflows with approval systems
- **Inventory Control** - Real-time stock tracking and management with multiple counting methods
- **Vendor Relations** - Supplier management, performance tracking, and vendor portals
- **Financial Integration** - Cost tracking, payment processing, and credit note management
- **Operational Planning** - Production planning, resource allocation, and forecasting
- **Store Operations** - Store requisitions, stock replenishment, and wastage tracking
- **Analytics & Reporting** - Business intelligence, custom reports, and data visualization
- **Physical Counting** - Spot checks and full physical inventory counts
- **Product Management** - Product catalog, categories, and unit management

## Technology Stack

- Next.js 14+ with App Router
- TypeScript with strict mode
- Tailwind CSS + Shadcn/ui components
- Zustand for global state management
- React Query for server state
- Mock authentication for prototype development
- Context-based user management
- Real-time data visualization

## Getting Started

1. Review the [System Documentation Index](doc/SYSTEM-DOCUMENTATION-INDEX.md) for a complete overview
2. Read the [system requirements documentation](doc/carmen-erp-system-requirements-documentation.md)
3. Explore [module verification report](doc/MODULE-VERIFICATION-REPORT.md) to understand implementation status
4. Check [system gaps and roadmap](doc/SYSTEM-GAPS-AND-ROADMAP.md) for future enhancements
5. Dive into module-specific documentation in respective folders
6. Reference the [schema analysis](doc/comprehensive-schema-analysis.md) for data structures

## Documentation Standards

All module documentation follows a consistent structure:
- README.md - Module overview
- Sitemap - Navigation structure
- Specifications - Detailed functional requirements
- API Documentation - Server actions and endpoints
- Component Documentation - UI component specifications
- User Guides - Interaction patterns and workflows
- Screenshots - Visual references

## Vision

A unified hospitality management platform that:
- Streamlines operations across all departments
- Provides intelligent automation and workflow management
- Delivers real-time analytics and business insights
- Ensures seamless integration across all modules
- Supports end-to-end service delivery from procurement to customer service
- Enables data-driven decision making
- Reduces operational costs and improves efficiency

## Module Status

Refer to the [Module Verification Report](doc/MODULE-VERIFICATION-REPORT.md) for detailed implementation status of each module, including:
- Feature completion percentage
- Known gaps and limitations
- Planned enhancements
- Testing status

## Contributing

Refer to module-specific documentation for detailed specifications and implementation guidelines. Use the [module specification template](doc/module-spec-template.md) when creating new modules.

## Last Updated

October 2025

## License

[License information to be added]
