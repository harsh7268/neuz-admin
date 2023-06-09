import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';

import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  lighten,
  Typography,
  darken
} from '@mui/material';

import SidebarTopSection from './SidebarTopSection';
import SidebarMenu from './SidebarMenu'; 
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.black[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 61px;
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background:
            theme.palette.mode === 'dark'
              ? alpha(lighten(theme.header.background, 0.1), 0.5)
              :alpha(lighten(theme.header.background, 0.1), 0.5),
          boxShadow:
            theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
        }}
      >
        <Scrollbar>
          <Box mt={3}>
            <Box
              mx={2}
              sx={{ 
                display:'flex',
                justifyContent:"space-between",
                alignItems:'center'
              }}
            >
           <Typography
                  variant="h3"

                  sx={{
                    mb: 1,
                    textAlign:"center",
                    opacity:"0.9"
                  }}
                >
                 Dashboard
                </Typography>
            <MenuOpenIcon sx={{opacity:"0.5"}} />
            </Box>
           
          </Box>
          <Divider  sx={{mt:3,mb:4}} />
       
          <SidebarTopSection />
          <Divider sx={{mt:2,mb:4}} />
          <SidebarMenu />
        </Scrollbar>
        <Divider
          sx={{
            background: theme.colors.alpha.trueWhite[10]
          }}
        />
     
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[100]
                : darken(theme.colors.alpha.black[100], 0.5)
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52
                }}
              >
             
              </Box>
            </Box>
            <Divider
              sx={{
                my: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />
            <SidebarTopSection />
            <Divider
              sx={{
                my: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.black[100]
              }}
            />
            <SidebarMenu />
          </Scrollbar>
        
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
