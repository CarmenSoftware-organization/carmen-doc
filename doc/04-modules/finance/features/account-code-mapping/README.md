# Account Code Mapping

> **Feature:** Finance > Account Code Mapping
> **Pages:** 1
> **Status:** ✅ Production Ready

---

## Overview

Account Code Mapping provides the critical link between Carmen ERP's inventory categories and external General Ledger (GL) systems. This feature enables automatic posting of transactions to the correct GL accounts based on store location, product category hierarchies, and department assignments.

### Key Capabilities

1. **Hierarchical Mapping** - Store → Category → Subcategory → Item Group → GL Account
2. **Department Integration** - Link mappings to specific departments/cost centers
3. **View Management** - Multiple mapping views for different purposes (AP posting, inventory, etc.)
4. **Bulk Operations** - Import/export mappings via CSV/Excel
5. **Search & Filter** - Quick lookup of specific mappings
6. **Print Reports** - Generate mapping documentation

---

## Page Structure

### Account Code Mapping Table
**Route:** `/finance/account-code-mapping`

---

## Data Model

```typescript
interface AccountCodeMapping {
  // Location
  store: string; // Store code or location identifier
  storeDescription?: string;

  // Product Hierarchy
  category: string; // Top-level category
  subCategory: string; // Secondary classification
  itemGroup: string; // Detailed grouping

  // Financial Assignment
  department: string; // Department/cost center code
  accountCode: string; // GL account code

  // Metadata
  viewName?: string; // Mapping view identifier
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
}

interface MappingView {
  id: string;
  name: string; // e.g., "Posting to AP", "Inventory", "Sales"
  description: string;
  defaultView: boolean;
  mappings: AccountCodeMapping[];
}

// Example Mapping Data
const exampleMappings: AccountCodeMapping[] = [
  {
    store: "Mini Bar",
    category: "Beverage",
    subCategory: "Beers",
    itemGroup: "Beer",
    department: "35",
    accountCode: "5000020"
  },
  {
    store: "MIN1",
    category: "2",
    subCategory: "21",
    itemGroup: "2100",
    department: "35",
    accountCode: "5000020"
  },
  {
    store: "Rooms - Housekeeping",
    category: "Food",
    subCategory: "Dry Goods",
    itemGroup: "Coffee/Tea/Hot Bev.",
    department: "21",
    accountCode: "1116007"
  }
];
```

---

## Features & Functionality

### 1. Posting to AP (Accounts Payable)

**Overview:**
This view handles postings directly related to Accounts Payable. It manages invoices from suppliers and vendors for inventory purchased, linking inventory procurement transactions directly with payable invoices.

**Columns:**
- **Business Unit**: Division or department within the organization (Required)
- **Store/Location**: Specific store or location where items are used/stored (Required)
- **Category**: Broad classification of inventory items (e.g., Food, Beverage) (Required)
- **Sub-Category**: Detailed classification within a category (Required)
- **Item Group**: Exact types of items within a sub-category (Required)
- **Department**: Department responsible for the items (Required)
- **Account Code**: Specific GL account code for accounting purposes (**Debit Account Only**)
- **Actions**: View, Edit, Duplicate, Delete (CRUD operations)

**Business Rules:**
1. **Account Restrictions**: Only Debit Accounts are allowed
2. **Tax Accounts**: Default from Vendor Profile in Carmen
3. **Mapping**: Links inventory procurement transactions with payable invoices

### 2. Posting to GL (General Ledger)

**Overview:**
This view focuses on posting transactions into the General Ledger. It ensures that all financial data related to inventory—whether purchases, adjustments, or disposals—are accurately reflected in the company's main accounting records.

**Columns:**
- **Business Unit**: Division or department within the organization (Required)
- **Store/Location**: Specific store or location (Required)
- **Category**: Higher-level classification of inventory or expense (Required)
- **Item Group**: Further breakdown within the category (Required)
- **Movement Type**: Type of transaction (sale, purchase, transfer) (Required)
- **Dr. Department**: Department to be debited (Using "To" Location)
- **Cr. Department**: Department to be credited (Using "To" Location)
- **Dr. Account**: GL account to be debited (Using "To" Location Account)
- **Cr. Account**: GL account to be credited (Using "To" Location Account)
- **Actions**: View, Edit, Duplicate, Delete (CRUD operations)

**Business Rules:**
1. **Location Usage**: Uses the "To" Location for department assignments
2. **Account Assignment**: Uses the "To" Location Account for GL postings
3. **Internal Cost Allocation**: Tracks which departments are debited and credited
4. **Accuracy**: Crucial for accurate financial accounting

### 3. Mapping Table View

**Features:**
- Sortable columns
- Searchable across all fields
- Filterable by view
- Row selection for bulk operations
- CRUD operations via action menu

### 4. CRUD Operations

#### View Mapping
- **Action**: Click three-dot menu → View
- **Functionality**: Display read-only details of the selected mapping
- **Information Shown**: All mapped fields for the selected record

#### Create Mapping
- **Action**: Click "Create" button
- **Functionality**: Opens dialog with form fields for new mapping
- **Required Fields**: Depends on view (AP or GL)
- **Validation**: All required fields must be completed

#### Edit Mapping
- **Action**: Click three-dot menu → Edit
- **Functionality**: Opens dialog with pre-populated form fields
- **Validation**: All required fields must be completed
- **Save**: Updates existing mapping record

#### Duplicate Mapping
- **Action**: Click three-dot menu → Duplicate
- **Functionality**: Creates a copy of the selected mapping
- **Use Case**: Quickly create similar mappings with minor variations

#### Delete Mapping
- **Action**: Click three-dot menu → Delete
- **Functionality**: Removes mapping from system
- **Confirmation**: Requires user confirmation before deletion

### 5. View Management

**Purpose:** Different mapping views for different GL posting scenarios

**Standard Views:**
- **Posting to AP**: Accounts Payable posting rules
- **Inventory**: Inventory account assignments
- **Sales**: Revenue account mapping
- **COGS**: Cost of Goods Sold accounts
- **Custom Views**: User-defined mapping sets

**View Selector:**
- Dropdown in header
- Switch between views instantly
- Each view maintains separate mappings

### 6. Search Functionality

**Search Capabilities:**
- Full-text search across all columns
- Real-time filtering as you type
- Case-insensitive matching
- Highlights matching text

**Search Fields:**
- Store code/name
- Category name
- Subcategory name
- Item group
- Department code
- Account code

### 4. Bulk Operations

**Import Functionality:**
```typescript
interface MappingImportFormat {
  // CSV/Excel Columns
  storeCode: string;
  storeName: string;
  category: string;
  subCategory: string;
  itemGroup: string;
  departmentCode: string;
  accountCode: string;
}

// Import Process
1. Upload CSV/Excel file
2. Validate file format
3. Map columns to system fields
4. Validate account codes (optional GL system check)
5. Preview import data
6. Confirm and import
7. Display import summary (success/failures)
```

**Export Functionality:**
- Export current view to CSV
- Export all mappings to Excel
- Export selected rows
- Include/exclude column headers

### 5. Actions Toolbar

**Available Actions:**

**Scan** - Quick scan/search interface
- Barcode scanning for quick lookup
- QR code support
- Fast item location

**Import/Export** - Bulk data management
- CSV import
- Excel import/export
- Template download
- Data validation

**Edit** - Modify mappings
- Inline editing
- Bulk edit selected rows
- Field validation
- Change tracking

**Print** - Generate reports
- Print current view
- Print filtered results
- Print mapping summary
- PDF export

---

## Business Rules

### Mapping Validation

1. **Unique Combinations**: Each (Store, Category, SubCategory, ItemGroup) combination must be unique
2. **Account Code Format**: Must match GL system format (typically 7-10 digits)
3. **Department Required**: Department code mandatory for all mappings
4. **Category Hierarchy**: Subcategory must belong to parent category
5. **Store Validation**: Store code must exist in location master

### Posting Rules

1. **Priority**: Most specific mapping takes precedence
   - Item Group match (highest priority)
   - Subcategory match
   - Category match
   - Store default (lowest priority)

2. **Fallback Logic**: If exact match not found, use parent level mapping

3. **Multi-Store**: Same category can have different accounts per store

### Data Integrity

1. **Account Code Verification**: Optional integration with GL system to validate codes
2. **Orphan Detection**: Alert for mappings referencing deleted stores/categories
3. **Duplicate Prevention**: System prevents duplicate mapping combinations
4. **Audit Trail**: Track all mapping changes with user and timestamp

---

## Integration Points

### General Ledger Systems

**Supported GL Systems:**
- SAP
- Oracle Financials
- QuickBooks Enterprise
- NetSuite
- Custom GL via API

**Integration Methods:**
1. **Real-Time Posting**: API calls for each transaction
2. **Batch Export**: Daily/weekly export files for GL import
3. **Middleware**: Integration platform (e.g., Boomi, MuleSoft)

### Inventory Management

**Data Flow:**
```
Inventory Transaction → Product Category → Account Mapping → GL Account Code
```

**Use Cases:**
- Purchase receipt posting
- Inventory adjustments
- Stock transfers
- Write-offs

### Procurement

**Purchase Order Posting:**
```
PO Line Item → Category/Department → Account Mapping → GL Expense Account
```

**Accounts Payable:**
```
Vendor Invoice → Item Categories → Account Mapping → AP Posting
```

---

## API Endpoints

```http
# Account Code Mappings
GET /api/finance/account-mappings
POST /api/finance/account-mappings
PUT /api/finance/account-mappings/:id
DELETE /api/finance/account-mappings/:id

# Bulk Operations
POST /api/finance/account-mappings/import
GET /api/finance/account-mappings/export
POST /api/finance/account-mappings/validate

# Views
GET /api/finance/account-mappings/views
GET /api/finance/account-mappings/views/:viewName

# Lookup
GET /api/finance/account-mappings/lookup?store=X&category=Y
POST /api/finance/account-mappings/resolve
```

---

## User Guide

### Creating a Mapping

1. Navigate to Account Code Mapping page
2. Select appropriate view
3. Click "Edit" to enable editing mode
4. Add new row or edit existing row
5. Fill in all required fields:
   - Store/Location
   - Category
   - Subcategory
   - Item Group
   - Department
   - Account Code
6. Save changes

### Importing Mappings

1. Click "Import/Export" button
2. Download template if needed
3. Prepare CSV/Excel file with mappings
4. Click "Import" and select file
5. Map columns if not using template
6. Review preview of data
7. Click "Confirm Import"
8. Review import summary

### Finding a Mapping

**Method 1: Search**
1. Use search box
2. Type store, category, or account code
3. Results filter automatically

**Method 2: View Selection**
1. Select appropriate view from dropdown
2. Browse relevant mappings
3. Use search within view

### Printing Mappings

1. Filter to desired mappings (optional)
2. Click "Print" button
3. Select print options
4. Print or save as PDF

---

## Troubleshooting

### Issue: Mapping Not Found
**Cause**: No exact match for transaction attributes
**Solution**: Check mapping hierarchy, add missing mapping level

### Issue: Import Fails
**Cause**: Invalid account codes or format errors
**Solution**: Validate data against template, check account code format

### Issue: Duplicate Mapping Error
**Cause**: Attempting to create duplicate combination
**Solution**: Edit existing mapping instead of creating new

### Issue: GL Posting Errors
**Cause**: Invalid or inactive account codes
**Solution**: Verify account codes with GL system, update inactive codes

---

## Implementation Notes

### Dialog Fix
The component includes a comprehensive fix for the Radix UI Dialog pointer-events issue:
- **Fixed at shadcn/ui Dialog component level**: Global fix applied to `components/ui/dialog.tsx`
- **Dual protection mechanism**: useEffect cleanup + onCloseAutoFocus with setTimeout(0)
- **Ensures proper interaction**: All dialogs work correctly without blocking application interactions
- **No per-component workarounds needed**: Single fix applies to all dialogs throughout the application

### Component Location
- **File**: `components/account-code-mapping.tsx`
- **Route**: `/finance/account-code-mapping`
- **Framework**: Next.js 14 App Router with React Server Components

### Technical Stack
- React Server Components for data fetching
- Client-side state management for dialog interactions
- shadcn/ui Dialog components for modal operations
- Radix UI primitives with accessibility features
- TypeScript for type safety

## Best Practices

### Mapping Design

1. **Start Generic**: Create category-level mappings first
2. **Add Specificity**: Add subcategory/item group mappings as needed
3. **Store Variations**: Only create store-specific mappings when necessary
4. **Document Views**: Use descriptive view names
5. **Regular Review**: Quarterly mapping review and cleanup

### Data Quality

1. **Standardized Codes**: Use consistent account code format
2. **Validation**: Enable GL account validation if available
3. **Testing**: Test new mappings before going live
4. **Backup**: Export mappings before bulk changes
5. **Version Control**: Maintain mapping documentation

### Performance

1. **Index Search**: Mappings indexed for fast lookup
2. **Cache Strategy**: Frequently used mappings cached
3. **Lazy Loading**: Load views on demand
4. **Pagination**: Large mapping sets paginated

---

## Reporting

### Available Reports

1. **Mapping Summary**: Count of mappings by view/category
2. **Unmapped Categories**: Categories without GL accounts
3. **Account Usage**: Frequency of each GL account
4. **Mapping Changes**: Audit trail of mapping modifications
5. **Validation Report**: Account code validation results

---

## Future Enhancements

**Planned Features:**
- Inline editing with auto-save
- AI-suggested mappings based on patterns
- GL account lookup integration
- Mapping approval workflow
- Multi-GL system support
- Advanced validation rules
- Mapping templates library

---

**Last Updated:** 2025-01-17
**Version:** 1.0.0
