// assets
import { MedicineBoxOutlined, UserOutlined, ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// icons
const icons = {
  medicine: MedicineBoxOutlined,
  customer: UserOutlined,
  supplier: ShopOutlined,
  purchase: ShoppingCartOutlined
};

// Menu items configuration
const menuItems = [
  {
    id: 'medicine',
    title: 'Medicine',
    type: 'item',
    url: '/medecine',
    icon: icons.medicine,
    target: true
  },
  {
    id: 'customer',
    title: 'Customer',
    type: 'item',
    url: '/customer',
    icon: icons.customer,
    target: true
  },
  {
    id: 'supplier',
    title: 'Supplier',
    type: 'item',
    url: '/supplier',
    icon: icons.supplier,
    target: true
  },
  {
    id: 'purchase',
    title: 'Purchase',
    type: 'item',
    url: '/purchase',
    icon: icons.purchase,
    target: true
  }
];

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'inventory',
  title: 'Inventory Management',
  type: 'group',
  children: menuItems
};

export default pages;
