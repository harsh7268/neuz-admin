import PageHeader from 'src/content/Dashboards/Reports/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Box, Grid, Typography } from '@mui/material';
import Block1 from 'src/content/Dashboards/Reports/Block1';
import Label from 'src/components/Label';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {backLogTasks,inProcess,toDoTask} from 'src/constant/data';

function DashboardReportsContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item md={3}>
          <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"15px"}}>
            <Box sx={{display:"flex",alignItems:"center",gap:"10px",justifyContent:"space-between"}}>
              <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
              <Typography variant='h5'>BacklogTask</Typography>
            <Label sx={{fontSize:"10px"}} color='warning'>{backLogTasks.length}</Label> 
              </Box>
              <MoreHorizIcon sx={{opacity:"0.6",fontSize:"16px"}} />
            </Box>
          <Box sx={{display:"flex",flexDirection:'column',gap:"10px",justifyContent:"center"}}>
            {backLogTasks.length>0 && backLogTasks.map((item, index)=>(
           <Block1 key={index} data={item} />
           ))}
           </Box>
           </Box>
        </Grid>
        <Grid item md={3}>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"15px"}}>
            <Box sx={{display:"flex",alignItems:"center",gap:"10px",justifyContent:"space-between"}}>
              <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
              <Typography variant='h5'>To DO Task</Typography>
            <Label sx={{fontSize:"10px"}} color='warning'>2</Label> 
              </Box>
              <MoreHorizIcon sx={{opacity:"0.6",fontSize:"16px"}} />
            </Box>
          <Box sx={{display:"flex",flexDirection:'column',gap:"10px",justifyContent:"center"}}>
          {toDoTask.length>0 && toDoTask.map((item, index)=>(
           <Block1 key={index} data={item} />
           ))}
           </Box>
           </Box>
        </Grid>
        <Grid item md={3}>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"15px"}}>
            <Box sx={{display:"flex",alignItems:"center",gap:"10px",justifyContent:"space-between"}}>
              <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
              <Typography variant='h5'>In Process</Typography>
            <Label sx={{fontSize:"10px"}} color='warning'>2</Label> 
              </Box>
              <MoreHorizIcon sx={{opacity:"0.6",fontSize:"16px"}} />
            </Box>
          <Box sx={{display:"flex",flexDirection:'column',gap:"10px",justifyContent:"center"}}>
          {inProcess.length>0 && inProcess.map((item, index)=>(
           <Block1 key={index} data={item} />
           ))}
           </Box>
           </Box>
        </Grid>
        <Grid item md={3}>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"15px"}}>
            <Box sx={{display:"flex",alignItems:"center",gap:"10px",justifyContent:"space-between"}}>
              <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
              <Typography variant='h5'>Done</Typography>
            <Label sx={{fontSize:"10px"}} color='success'>2</Label> 
              </Box>
              <MoreHorizIcon sx={{opacity:"0.6",fontSize:"16px"}} />
            </Box>
          <Box sx={{display:"flex",flexDirection:'column',gap:"10px",justifyContent:"center"}}>
          {backLogTasks.length>0 && backLogTasks.map((item, index)=>(
           <Block1 key={index} data={item} />
           ))}
           </Box>
           </Box>
        </Grid>
       
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardReportsContent;
