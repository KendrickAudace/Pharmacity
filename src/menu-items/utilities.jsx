// assets
import {
  UnorderedListOutlined,
  ShoppingCartOutlined,
  StockOutlined,
  FileTextOutlined,
  LineChartOutlined,
  ToolOutlined
} from '@ant-design/icons';

// icons mapping
const icons = {
  stock: UnorderedListOutlined,
  sales: ShoppingCartOutlined,
  reports: FileTextOutlined,
  analytics: LineChartOutlined,
  settings: ToolOutlined,
  inventory: StockOutlined
};

// Menu items configuration
const utilityItems = [
  {
    id: 'stock',
    title: 'Stock List',
    type: 'item',
    url: '/stock',
    icon: icons.stock
  },
  {
    id: 'sales',
    title: 'Sales',
    type: 'item',
    url: '/sales',
    icon: icons.sales
  },
  {
    id: 'reports',
    title: 'Reports',
    type: 'item',
    url: '/reports',
    icon: icons.reports
  },
  {
    id: 'analytics',
    title: 'Analytics',
    type: 'item',
    url: '/analytics',
    icon: icons.analytics
  }
];

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: utilityItems
};

export default utilities;