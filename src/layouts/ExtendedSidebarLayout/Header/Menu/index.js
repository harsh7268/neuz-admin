import { useRef, useState } from 'react';
import {
  Box, 
  useTheme, 
  Typography, 
} from '@mui/material'; 

import { useTranslation } from 'react-i18next'; 
 
function HeaderMenu() {
  const { t } = useTranslation();
  const theme = useTheme();
 
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'inline-flex' },
          gap:"15px"
        }}
      >
       <Typography sx={{color:theme.colors.alpha.black[100]}} variant='h5'>Dashboard</Typography>
       <Typography variant='h5'>My Tasks</Typography>
       <Typography variant='h5'>Reporting</Typography>
       <Typography variant='h5'>Portfolio</Typography>
       <Typography variant='h5'>Goals</Typography>
      </Box>
     
    </>
  );
}

export default HeaderMenu;
