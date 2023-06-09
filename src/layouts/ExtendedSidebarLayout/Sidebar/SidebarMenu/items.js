import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import InboxIcon from '@mui/icons-material/Inbox';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LockIcon from '@mui/icons-material/Lock';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import TuneIcon from '@mui/icons-material/Tune';
import TagIcon from '@mui/icons-material/Tag';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const menuItems = [
  {
    heading: 'Dashboard',
    items: [
      {
        name: 'Inbox',
        icon: InboxIcon,
        link: '/management/inbox/#',
        badge:4
      },
      {
        name: 'Drive Files',
        link: '/management/files',
        icon: BackupTableIcon,
        badge:435
      },
      {
        name: 'Boards',
        icon: DashboardCustomizeIcon,
        link: '/management/bords',
        badge:5
      },
      {
        name: 'Updates',
        link: '/management/updates',
        icon: ScheduleIcon,
        
      },
      {
        name: 'Analytics',
        icon: DataSaverOffIcon,
        link: '/management/analytics',
        badge:2
      },
      {
        name: 'CRM Dashboard',
        link: '/management/dashboards',
        icon: DashboardIcon,
        badge:2
      },
      {
        name: 'Ecommerce',
        icon: LocalOfferIcon,
        link: '/management/ecommerce'
      },
      {
        name: 'Cryptocurrency',
        link: '/management/cryptocurrency',
        icon:AccountBalanceWalletIcon,
        
      },
      {
        name: 'Projects',
        icon: LockIcon,
        link: '/management/projects', 
      },
      {
        name: 'NFT Marketplace',
        link: '/management/nftMaketPlace',
        icon: ImageSearchIcon, 
      },
      {
        name: 'Setting',
        icon: TuneIcon,
        link: '/management/setting',
        badge:2
      }
    ]
  },
 
  {
    heading: 'Projects',
    items: [
      {
        name: 'Additional Calender',
        icon: TagIcon,
        link: '/management/calender',
        badge:6
      },
      {
        name: 'Brand Logo Design',
        icon: TagIcon,
        link: '/management/logo',
        badge:11
      },
      {
        name: 'User Research',
        icon: TagIcon,
        link: '/management/userResearch',
      
      },
      {
        name: 'Marketing Sales',
        icon: TagIcon,
        link: '/management/marketingSales',
        badge:23
      },
      {
        name: 'New Project Template',
        icon: TagIcon,
        link: '/management/template',
        badge:2
      },
      {
        name: 'Add New Projects',
        link: '/management/addNewProjects',
        icon: AddCircleIcon, 
      },

    ]
  },
 
   
];

export default menuItems;
