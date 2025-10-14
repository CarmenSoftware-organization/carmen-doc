# Recipe Management

**Submodule**: Recipe Management
**Route**: `/operational-planning/recipe-management`
**Status**: ✅ Production
**Parent Module**: [Operational Planning](./OPERATIONAL-PLANNING-MODULE.md)

## Overview

Recipe Management provides comprehensive tools for creating, organizing, and analyzing recipes. It includes cost tracking, margin analysis, sustainability metrics (CO₂ footprint), and hierarchical organization through categories and cuisine types.

## Screenshots

![Recipe Library](./screenshots/recipe-library.png)
*Recipe Library - Grid view showing recipe cards with key metrics*

![Recipe Categories](./screenshots/recipe-categories.png)
*Category Management - Hierarchical tree structure with expandable categories*

![Cuisine Types](./screenshots/cuisine-types.png)
*Cuisine Types - Regional cuisine classification table*

## Module Structure

### 1. Recipe Library
**Route**: `/operational-planning/recipe-management/recipes`

**Purpose**: Main recipe listing and management interface

**Features**:
- Grid and list view toggle
- Recipe cards with images
- Key metrics display (cost, price, margin, CO₂)
- Status indicators (draft, published)
- Search and filtering
- Bulk selection and operations
- Sort by multiple criteria

**Recipe Card Information**:
- Recipe name and image
- Publication status badge
- Cost per portion
- Selling price
- Margin percentage
- CO₂ equivalent per portion
- Category and cuisine tags

### 2. Recipe Detail
**Route**: `/operational-planning/recipe-management/recipes/[id]`

**Purpose**: Full recipe information and editing

**Sections** (expected):
- Recipe overview
- Ingredients list with quantities
- Preparation instructions
- Cooking methods and times
- Nutrition information
- Cost breakdown
- Allergen information
- Notes and variations

### 3. New Recipe
**Route**: `/operational-planning/recipe-management/recipes/new`

**Purpose**: Recipe creation form

**Form Sections** (expected):
- Basic Information (name, description, category, cuisine)
- Ingredients (with unit conversion)
- Instructions (step-by-step)
- Timing (prep time, cook time, total time)
- Serving information (yields, portion sizes)
- Costing (ingredient costs, overhead)
- Pricing (selling price, margin targets)
- Media (images, videos)

### 4. Categories
**Route**: `/operational-planning/recipe-management/categories`

**Purpose**: Hierarchical category organization

**Features**:
- 3-level hierarchy (Category → Subcategory → Item Group)
- Expandable tree structure
- Category codes
- Recipe count per category
- Active recipe tracking
- Average cost and margin by category
- Search and filtering
- CRUD operations

**Data Displayed**:
- Name and code
- Description
- Status (active/inactive)
- Total recipes
- Active recipes count
- Average cost per portion
- Average margin percentage
- Last updated date
- Actions menu

### 5. Cuisine Types
**Route**: `/operational-planning/recipe-management/cuisine-types`

**Purpose**: Regional cuisine classification

**Features**:
- Cuisine type management
- Regional grouping
- Recipe count tracking
- Search and filtering
- CRUD operations

**Data Displayed**:
- Cuisine name and code
- Description
- Region (Asia, Europe, Americas, etc.)
- Status
- Total recipes
- Active recipes
- Last updated date
- Actions menu

**Example Cuisine Types**:
- Italian (ITA) - Europe
- Chinese (CHN) - Asia
- Mexican (MEX) - Americas
- Indian (IND) - Asia
- French (FRA) - Europe
- Japanese (JPN) - Asia
- Mediterranean (MED) - Europe
- Thai (THA) - Asia

## Key Metrics

### Cost Metrics

**Cost per Portion**
- Calculated from ingredient costs
- Includes overhead allocation
- Updated when ingredient prices change

**Selling Price**
- Configured price per portion
- Can be manually set
- Used in margin calculations

**Margin Percentage**
- Formula: `((Selling Price - Cost) / Selling Price) × 100`
- Displayed on recipe cards
- Color-coded indicators:
  - Green: >70%
  - Yellow: 50-70%
  - Red: <50%

### Sustainability Metrics

**CO₂ Equivalent per Portion**
- Carbon footprint calculation
- Based on ingredient sourcing and preparation
- Displayed in kilograms (kg)
- Helps promote sustainable menu choices

**Example Values**:
- Tiramisu: 0.8 kg CO₂eq
- Margherita Pizza: 2.1 kg CO₂eq
- Beef Wellington: 2.8 kg CO₂eq

### Category Metrics

**Average Cost by Category**
- Mean cost across all recipes in category
- Useful for budget planning
- Updated in real-time

**Average Margin by Category**
- Mean margin percentage
- Identifies profitable categories
- Guides menu engineering decisions

## User Workflows

### Create New Recipe

1. Click "Add Recipe" or "Create New Recipe"
2. Fill in basic information
3. Add ingredients with quantities
4. Enter preparation instructions
5. Configure timing and serving info
6. Upload images
7. Set pricing and costing
8. Save as draft or publish

### Edit Existing Recipe

1. Search or browse to find recipe
2. Click recipe card to open detail view
3. Click "Edit" button
4. Modify desired fields
5. Save changes
6. Optionally create new version

### Organize Categories

1. Navigate to Categories page
2. Click "Add Category" for new category
3. Use "Add Subcategory" for hierarchy
4. Drag-and-drop to reorganize (if supported)
5. Assign recipes to categories
6. Set category status (active/inactive)

### Manage Cuisine Types

1. Navigate to Cuisine Types page
2. Click "Add Cuisine Type"
3. Enter name, code, and description
4. Select region
5. Save cuisine type
6. Assign to recipes

## Technical Implementation

### Components

**RecipeList**
- Grid/list view rendering
- Pagination or infinite scroll
- Search and filter integration

**RecipeCard**
- Compact recipe display
- Image with fallback
- Key metrics overlay
- Status badges
- Click to detail view

**CategoryTree**
- Hierarchical data rendering
- Expand/collapse functionality
- Tree manipulation (add, edit, delete)
- Recipe count aggregation

**CuisineTypeList**
- Table-based display
- Sorting and filtering
- CRUD operations
- Region grouping

### Data Models

```typescript
interface Recipe {
  id: string
  name: string
  description: string
  category: string
  cuisineType: string
  status: 'draft' | 'published'
  costPerPortion: number
  sellingPrice: number
  margin: number
  co2PerPortion: number
  image?: string
  ingredients: Ingredient[]
  instructions: string[]
  prepTime: number // minutes
  cookTime: number
  totalTime: number
  servings: number
  createdAt: Date
  updatedAt: Date
  createdBy: string
}

interface Ingredient {
  productId: string
  productName: string
  quantity: number
  unit: string
  cost: number
}

interface Category {
  id: string
  name: string
  code: string
  description: string
  status: 'active' | 'inactive'
  parentId?: string
  recipeCount: number
  activeRecipeCount: number
  averageCost: number
  averageMargin: number
  lastUpdated: Date
}

interface CuisineType {
  id: string
  name: string
  code: string
  description: string
  region: string
  status: 'active' | 'inactive'
  recipeCount: number
  activeRecipeCount: number
  lastUpdated: Date
}
```

### Mock Data

**Sample Recipes** (8 recipes in mock data):
1. Coq au Vin - French, Main Course
2. Spaghetti Carbonara - Italian, Main Course
3. Beef Wellington - French, Main Course
4. Tiramisu - Italian, Dessert
5. Margherita Pizza - Italian, Main Course
6. Chocolate Pound Cake - American, Dessert
7. (Additional recipes...)

## Business Rules

### Recipe Status Workflow

**Draft**:
- Editable by creator
- Not visible in public menus
- Can be deleted
- No cost tracking

**Published**:
- Locked for editing (versioning required)
- Visible in menu planning
- Cost tracking active
- Used in menu engineering

### Category Hierarchy

- **Level 1**: Main categories (Appetizers, Main Courses, Desserts)
- **Level 2**: Subcategories (Hot Appetizers, Cold Appetizers)
- **Level 3**: Item groups (Seafood Appetizers, Meat Appetizers)

**Rules**:
- Maximum 3 levels deep
- Each category must have unique code
- Cannot delete category with recipes
- Inactive categories hide recipes from some views

### Pricing Rules

**Margin Thresholds**:
- Target margin: ≥65%
- Acceptable margin: 50-65%
- Low margin alert: <50%

**Pricing Recommendations**:
- Stars: Maintain current pricing
- Plow Horses: Increase price by 10-15%
- Puzzles: Consider reducing price
- Dogs: Review complete recipe cost

## Integration Points

### Product Management
- Ingredient linking to products
- Cost updates from product prices
- Unit conversion from product master

### Inventory Management
- Stock availability check
- Recipe feasibility based on inventory
- Par level calculations

### Menu Engineering
- Recipe performance data
- Popularity metrics
- Profitability analysis

### Procurement
- Ingredient sourcing
- Supplier pricing updates
- Cost variance alerts

## Future Enhancements

### Short Term
1. Recipe versioning system
2. Allergen tracking and labeling
3. Nutritional analysis integration
4. Recipe scaling calculator
5. Print-friendly recipe cards

### Medium Term
1. Recipe video uploads
2. Collaborative editing
3. Recipe approval workflow
4. Ingredient substitution suggestions
5. Batch costing for prep items

### Long Term
1. AI-powered recipe recommendations
2. Automated nutritional calculations
3. Recipe optimization for cost/margin
4. Integration with cooking equipment (IoT)
5. Customer feedback integration

## Related Documentation

- [Operational Planning Module](./OPERATIONAL-PLANNING-MODULE.md)
- [Menu Engineering](./MENU-ENGINEERING.md)
- [Product Management](../pm/)
- [Inventory Management](../inv/)

---

**Last Updated**: October 10, 2025
**Version**: 1.0
**Status**: Production
