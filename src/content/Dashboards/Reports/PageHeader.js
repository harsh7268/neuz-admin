import { useRef, useState } from 'react';
import {
  Typography, 
  Box, 
  Avatar, 
  AvatarGroup,
  Tooltip, 
  useTheme, 
  styled,
  Divider,
  InputBase,
  Card,
  Grid
} from '@mui/material';
import { useTranslation } from 'react-i18next'; 
import EditIcon from '@mui/icons-material/Edit';
import Link from 'src/components/Link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { BorderRight } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import LockIcon from '@mui/icons-material/Lock';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';

const SearchInputWrapper = styled(InputBase)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(18)};
    padding: ${theme.spacing(2)};
    width: 100%;
`
);

function PageHeader() {
  const { t } = useTranslation(); 
  const theme = useTheme();

  
  return (
    <Box sx={{display:"flex", flexDirection:'column', gap:"40px",justifyContent:'center'}}>
    <Box
      display="flex"
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box display="flex" gap="20px" alignItems="center">
        
        <Box>
          <Typography variant="h2" component="h3" gutterBottom>
            {t('Task Board')}
          </Typography>
         
        </Box>
        <EditIcon sx={{opacity:"0.6"}} />
      </Box>

      <Box sx={{display:{md:"flex",xs:"none"},alignItems:"center",gap:"20px"}}>
       <Typography variant='h5' sx={{borderBottom:`1px solid ${theme.colors.primary['dark']}`, color:theme.colors.primary['dark']}}>Timeline</Typography>
       <Typography variant='h5' sx={{opacity:"0.6"}} >Calendar</Typography>
       <Typography variant='h5' sx={{opacity:"0.6"}} >Dashboard</Typography>
       <Typography variant='h5' sx={{opacity:"0.6"}} >Progress</Typography>
       <Typography variant='h5' sx={{opacity:"0.6"}} >Forms</Typography>
       <Typography variant='h5' sx={{opacity:"0.6"}} >More</Typography>   
      </Box>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Box display="flex" mt={1} alignItems="flex-start">
                      <AvatarGroup max={4}>
                        <Tooltip arrow title="Remy Sharp">
                          <Avatar
                            component={Link}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            href="#"
                            alt="Remy Sharp"
                            src="/static/images/avatars/1.jpg"
                          />
                        </Tooltip>
                        <Tooltip arrow title="Travis Howard">
                          <Avatar
                            component={Link}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            href="#"
                            alt="Travis Howard"
                            src="/static/images/avatars/2.jpg"
                          />
                        </Tooltip>
                        <Tooltip arrow title="Cindy Baker">
                          <Avatar
                            component={Link}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            href="#"
                            alt="Cindy Baker"
                            src="/static/images/avatars/4.jpg"
                          />
                        </Tooltip>
                        <Tooltip arrow title="Agnes Walker">
                          <Avatar
                            component={Link}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            href="#"
                            alt="Agnes Walker"
                            src="/static/images/avatars/5.jpg"
                          />
                        </Tooltip>
                        <Tooltip arrow title="Agnes Walker">
                          <Avatar
                            component={Link}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            href="#"
                            alt="Agnes Walker"
                            src="/static/images/avatars/5.jpg"
                          />
                        </Tooltip>
                        <Tooltip arrow title="Agnes Walker">
                          <Avatar
                            component={Link}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            href="#"
                            alt="Agnes Walker"
                            src="/static/images/avatars/5.jpg"
                          />
                        </Tooltip>
                      </AvatarGroup>
                    </Box>
                    <Card sx={{width:"35px",height:"35px",borderRadius:'50%',display:"flex",alignItems:"center",justifyContent:'center'}}>
                      <AddCircleOutlineIcon sx={{opacity:"0.2"}}/>
                    </Card>
                    </Box>
    </Box>

    <Box>
    <Grid alignItems="center" spacing={1} container>
      <Grid item md={3} xs={12}>
        <Card sx={{display:"flex",gap:"20px", alignItems:"center",padding:"10px"}}>
      <Box sx={{display:"flex", gap:"5px",alignItems:"center"}}>
        <DashboardIcon sx={{opacity:"0.3"}} />
        <Typography sx={{opacity:"0.6"}} variant='h5'>Board View</Typography>
      </Box> 
      <Box sx={{display:"flex", alignItems:"center",gap:"10px"}}>
        <MenuIcon sx={{opacity:"0.3"}}/>
        <Typography sx={{opacity:"0.6"}} variant='h5'>List View</Typography>
      </Box>

    </Card>
      </Grid>
      <Grid item md={2} xs={12}>
      
      <Box sx={{display:"flex", gap:"5px",alignItems:"center"}}>
        <LockIcon sx={{opacity:"0.3"}} />
        <Typography sx={{opacity:"0.6"}} variant='h5'>Board View</Typography>
        <KeyboardArrowDownIcon sx={{opacity:"0.3"}} />
      </Box> 
     
      </Grid>
      
      <Grid item md={3} xs={12}>
      
      <Box sx={{display:"flex", gap:"20px",alignItems:"center"}}>
      <Typography sx={{opacity:"0.6"}} variant='h5'>Owners</Typography>
        <Card sx={{width:"30px",height:"30px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <TwitterIcon sx={{opacity:"0.7",fontSize:'15px',color:theme.colors.primary['main']}} />
        </Card>
        <Typography sx={{opacity:"0.6"}} variant='h5'>Twitter Team</Typography>
        
      </Box> 
     
      </Grid>
      <Grid item md={2} xs={12}>
      <Card sx={{display:{md:'flex',xs:"none",height:"50px",paddingRight:"10px"}}}  display="flex" alignItems="center">
              <Box flexGrow={1} display="flex" alignItems="center">
                <SearchTwoToneIcon
                  sx={{
                    ml: 2,
                    color: theme.colors.secondary.main,
                    fontSize:"15px"
                  }}
                />
                <SearchInputWrapper 
                sx={{fontSize:"12px"}}
                  autoFocus
                  placeholder={t('Search tasks')}
                  fullWidth
                /> 
              </Box>
           
              </Card>
      </Grid>

      <Grid item md={2} xs={12}>
      
      <Box sx={{display:"flex", gap:"10px",alignItems:"center"}}>
     
        <Card sx={{width:"40px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <InsertDriveFileIcon sx={{opacity:"0.7"}} />
        </Card>
       
        <Card sx={{width:"40px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <FilterListIcon sx={{opacity:"0.7"}} />
        </Card>
        <Card sx={{width:"40px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <SortIcon sx={{opacity:"0.7"}} />
        </Card>
        <Card sx={{width:"40px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <HdrWeakIcon sx={{opacity:"0.7"}} />
        </Card>
      </Box> 
     
      </Grid>

    </Grid>
   
    </Box>

    </Box>
  );
}

export default PageHeader;
