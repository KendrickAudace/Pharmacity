// assets
import { 
  SettingOutlined, 
  QuestionCircleOutlined,
  CustomerServiceOutlined,
  FileTextOutlined 
} from '@ant-design/icons';

// icons mapping
const icons = {
  settings: SettingOutlined,
  help: QuestionCircleOutlined,
  support: CustomerServiceOutlined,
  documentation: FileTextOutlined
};

// Support menu items configuration
const supportItems = [
  {
    id: 'store-settings',
    title: 'Store Settings',
    type: 'item',
    url: '/settings',
    icon: icons.settings
  },
  {
    id: 'help-center',
    title: 'Help Center',
    type: 'item',
    url: '/help',
    icon: icons.help
  },
  {
    id: 'documentation',
    title: 'Documentation',
    type: 'item',
    url: 'https://codedthemes.gitbook.io/mantis/',
    icon: icons.documentation,
    external: true,
    target: true
  }
];

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: supportItems
};

export default support;