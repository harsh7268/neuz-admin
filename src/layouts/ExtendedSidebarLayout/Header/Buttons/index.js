import { Box } from '@mui/material';
import HeaderNotifications from './Notifications'; 
import FolderIcon from '@mui/icons-material/Folder';

function HeaderButtons() {
  return (
    <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
      <FolderIcon sx={{opacity:"0.6"}}/>
      <HeaderNotifications />
   
    </Box>
  );
}

export default HeaderButtons;
