# Carmen ERP System Documentation

Comprehensive documentation for Carmen, a hospitality-focused Enterprise Resource Planning (ERP) system designed for hotels, restaurants, and hospitality operations.

## Overview

Carmen is a complete end-to-end hospitality management system that streamlines operations from procurement to service delivery, with intelligent automation, real-time analytics, and seamless integration across all hotel departments.

## Documentation Structure

### Core Documentation
- [`carmen-erp-system-requirements-documentation.md`](doc/carmen-erp-system-requirements-documentation.md) - Complete system requirements and overview
- [`comprehensive-schema-analysis.md`](doc/comprehensive-schema-analysis.md) - Database schema analysis
- [`module-spec-template.md`](doc/module-spec-template.md) - Template for module specifications

### Module Documentation

#### Procurement & Purchasing
- **[PR (Purchase Request)](doc/pr/)** - Purchase requisition workflows
- **[PO (Purchase Order)](doc/po/)** - Purchase order management
- **[GRN (Goods Receipt Note)](doc/grn/)** - Goods receipt and verification
- **[VM (Vendor Management)](doc/vm/)** - Vendor relationships and contracts

#### Inventory & Materials
- **[INV (Inventory)](doc/inv/)** - Inventory management and tracking
- **[Inventory](doc/inventory/)** - Advanced inventory operations
- **[Store Operations](doc/store-ops/)** - Store and warehouse management
- **[SC (Stock Control)](doc/sc/)** - Stock control and adjustments

#### Operations & Planning
- **[PM (Production Management)](doc/pm/)** - Production planning and execution
- **[PRT (Production)](doc/prt/)** - Production workflows
- **[Dashboard](doc/dashboard/)** - Analytics and reporting

#### Sales & Distribution
- **[SO (Sales Order)](doc/so/)** - Sales order processing
- **[SR (Sales Return)](doc/sr/)** - Sales return management

#### Financial & Accounting
- **[PC (Payment & Costing)](doc/pc/)** - Payment processing and cost management
- **[CN (Credit Note)](doc/cn/)** - Credit note management

## System Features

### Authentication & User Management
- Mock authentication system for development
- Role-based access control (staff, manager, financial-manager, purchasing-staff, chef)
- Department and location context switching

### Dashboard & Analytics
- Real-time procurement metrics
- Order trends and spend analysis
- Supplier network insights
- Activity tracking and reporting

### Core Capabilities
- **Procurement Management** - End-to-end purchasing workflows
- **Inventory Control** - Real-time stock tracking and management
- **Vendor Relations** - Supplier management and performance tracking
- **Financial Integration** - Cost tracking and payment processing
- **Operational Planning** - Production and resource planning
- **Analytics & Reporting** - Business intelligence and insights

## Technology Stack

- Web-based platform
- Mock authentication for prototype development
- Context-based user management
- Real-time data visualization

## Getting Started

1. Review the [system requirements documentation](doc/carmen-erp-system-requirements-documentation.md)
2. Explore module-specific documentation in respective folders
3. Reference the [schema analysis](doc/comprehensive-schema-analysis.md) for data structures

## Vision

A unified hospitality management platform that:
- Streamlines operations across all departments
- Provides intelligent automation
- Delivers real-time analytics
- Ensures seamless integration
- Supports end-to-end service delivery

## Contributing

Refer to module-specific documentation for detailed specifications and implementation guidelines.

## License

[License information to be added]
