# Menu Engineering

**Submodule**: Menu Engineering
**Route**: `/operational-planning/menu-engineering`
**Status**: ✅ Production
**Parent Module**: [Operational Planning](./OPERATIONAL-PLANNING-MODULE.md)

## Overview

Menu Engineering analyzes menu item performance using the BCG Matrix (Boston Consulting Group Matrix) adapted for food service. Items are categorized into four quadrants based on popularity and profitability, enabling data-driven menu optimization decisions.

![Menu Engineering Dashboard](./screenshots/menu-engineering-dashboard.png)

## BCG Matrix Quadrants

### Stars ⭐
**High Popularity, High Profitability**
- **Action**: Promote heavily, feature prominently
- **Marketing**: Highlight in menu, train staff to recommend
- **Strategy**: Maintain quality, keep prices stable

### Plow Horses 🐴
**High Popularity, Low Profitability**
- **Action**: Increase prices or reduce costs
- **Analysis**: Review portion sizes, ingredient costs
- **Strategy**: Optimize recipe, negotiate supplier prices

### Puzzles 🧩
**Low Popularity, High Profitability**
- **Action**: Increase marketing, reposition on menu
- **Marketing**: Create promotions, improve descriptions
- **Strategy**: Make more visible, bundle with popular items

### Dogs 🐕
**Low Popularity, Low Profitability**
- **Action**: Consider removing or reformulating
- **Analysis**: Determine if keeping for variety/completion
- **Strategy**: Phase out or complete recipe overhaul

## Page Structure

### Performance Matrix Tab

**Purpose**: Visualize menu items on BCG matrix

**Features**:
- Interactive scatter plot
- Quadrant classification
- Item count per quadrant
- Filtering by date range, category, location
- Export functionality

**Filters Available**:
- **Date Range**: Custom date picker
- **Category**: Filter by menu category
- **Location**: Filter by restaurant location
- **Quick Actions**: Reset filters, export data

### Portfolio Analysis Tab

**Purpose**: Overall menu health assessment

**Metrics Displayed**:
- Portfolio Health Score (0-100%)
- Total Items in Portfolio
- Distribution across quadrants
- Trend analysis over time
- Recommendations for optimization

### Recipe Details Tab

**Purpose**: Detailed performance metrics per recipe

**Data Displayed**:
- Recipe name and category
- Sales volume
- Revenue generated
- Contribution margin
- Popularity score
- Profitability score
- Quadrant classification

### Cost Alerts Tab

**Purpose**: Monitor and manage cost variances

**Alert Types**:
- **Critical**: Cost increased >15%
- **Warning**: Cost increased 10-15%
- **Info**: Cost increased <10%

**Alert Details**:
- Recipe name
- Previous cost vs current cost
- Percentage change
- Suggested actions
- Alert timestamp

### Data Import Tab

**Purpose**: Import sales data for analysis

**Import Options**:
- CSV file upload
- Excel file upload
- Manual data entry
- POS system integration (planned)

**Required Fields**:
- Item name
- Sales quantity
- Revenue
- Cost
- Date range

## Key Metrics

### Dashboard Statistics

**Total Items**
- Count of active menu items
- Description: Active menu items in portfolio

**Total Revenue**
- Sum of all item revenues
- Trend indicator (% change from previous period)

**Average Contribution**
- Mean contribution margin per item
- Displayed as currency per item

**Active Alerts**
- Count of cost alerts
- Breakdown by severity (critical/warning/info)

**Portfolio Health**
- Overall optimization score
- Percentage (0-100%)
- Based on quadrant distribution

## User Interactions

### Filter Actions
1. Click "Filters" button to expand filter panel
2. Select date range using date picker
3. Choose category from dropdown
4. Select location from dropdown
5. Click "Apply" or filters auto-apply
6. Use "Reset" icon to clear all filters

### Data Export
1. Click "Export Report" button
2. Select export format (PDF/Excel/CSV)
3. Choose data to include
4. Download generated file

### Import Sales Data
1. Navigate to "Data Import" tab
2. Click "Import Sales Data" button
3. Select file or drag-and-drop
4. Map columns to required fields
5. Validate data
6. Confirm import

## Technical Implementation

### Components

**MenuEngineeringDashboard**
- Main container component
- Manages tab state
- Coordinates data flow

**PerformanceMatrix**
- BCG matrix visualization
- Uses Recharts scatter plot
- Interactive tooltips
- Quadrant overlays

**SalesDataImport**
- File upload handling
- CSV/Excel parsing
- Data validation
- Error handling

**RecipePerformanceMetrics**
- Tabular data display
- Sorting and filtering
- Export functionality

**CostAlertManagement**
- Alert list display
- Alert dismissal
- Action suggestions

### Data Structure

```typescript
interface MenuItem {
  id: string
  name: string
  category: string
  popularity: number  // 0-100
  profitability: number  // percentage
  revenue: number
  cost: number
  margin: number
  salesVolume: number
  quadrant: 'stars' | 'plow-horses' | 'puzzles' | 'dogs'
}

interface CostAlert {
  id: string
  recipeId: string
  recipeName: string
  previousCost: number
  currentCost: number
  percentageChange: number
  severity: 'critical' | 'warning' | 'info'
  timestamp: Date
  dismissed: boolean
}
```

### Mock Data

Current implementation uses mock data with 4 sample menu items representing each quadrant.

## Business Rules

### Quadrant Classification

**Popularity Calculation**:
- Based on sales volume relative to average
- High: Above 50th percentile
- Low: Below 50th percentile

**Profitability Calculation**:
- Based on contribution margin percentage
- High: Above median margin
- Low: Below median margin

### Alert Thresholds

- **Critical Alert**: Cost increase ≥15%
- **Warning Alert**: Cost increase 10-14.9%
- **Info Alert**: Cost increase <10%

### Portfolio Health Score

Formula:
```
Health Score = (Stars% × 0.4) + (Plow Horses% × 0.2) + (Puzzles% × 0.2) + (1 - Dogs%) × 0.2
```

Ideal distribution:
- Stars: 30-40%
- Plow Horses: 20-30%
- Puzzles: 20-30%
- Dogs: <15%

## Integration Points

### Data Sources
- Sales data from POS (planned)
- Recipe costs from Recipe Management
- Inventory prices from Procurement
- Manual data import (current)

### Data Outputs
- Performance reports to Management
- Menu optimization recommendations
- Cost alerts to Operations
- Analytics to Reporting module

## Future Enhancements

1. **Real-time POS Integration**: Live sales data sync
2. **Predictive Analytics**: Forecast menu item performance
3. **A/B Testing**: Test menu changes impact
4. **Seasonal Analysis**: Compare performance across seasons
5. **Competitive Analysis**: Benchmark against industry
6. **Automated Recommendations**: AI-powered optimization suggestions
7. **Mobile Dashboard**: Responsive mobile view
8. **Multi-location Comparison**: Compare performance across locations

## Related Documentation

- [Operational Planning Module](./OPERATIONAL-PLANNING-MODULE.md)
- [Recipe Management](./RECIPE-MANAGEMENT.md)
- [Product Management](../pm/)

---

**Last Updated**: October 10, 2025
**Version**: 1.0
**Status**: Production
