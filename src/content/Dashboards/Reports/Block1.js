import {
    Divider,
    Box,
    Card,
    Typography,
    Avatar, 
    AvatarGroup,
    Tooltip, 
    styled,
    useTheme,
    linearProgressClasses
  } from '@mui/material';
  import TaskIcon from '@mui/icons-material/Task';
  import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import Link from 'src/components/Link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChatIcon from '@mui/icons-material/Chat';

  
  function Block1({data}) {
    const { t } = useTranslation();
    const theme = useTheme();
   
  
    return (

      <Card sx={{display:"flex",flexDirection:"column",justifyContent:'center',gap:"10px",padding:"20px 15px"}}>
       <Box sx={{display:"flex",alignItems:'center',justifyContent:"space-between"}}>
        <Typography variant='h5'>{data && data.name && data.name}</Typography>
        <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
            <TaskIcon sx={{color:theme.colors.primary['light'],fontSize:"18px"}} />
        <Typography sx={{opacity:"0.6"}} variant='h5'>{data && data.taskComplete && data.taskComplete}</Typography>
        </Box>
       </Box>
       <Box sx={{display:"flex",alignItems:"center",gap:"5px"}}>
       {data && data.ids && data.ids.id1 &&  <Label sx={{fontSize:"10px"}} color='warning'>{data.ids.id1}</Label>}
       {data && data.ids && data.ids.id2 &&<Label sx={{fontSize:"10px"}} color='primary'>{data.ids.id2}</Label>}
       {data && data.ids && data.ids.id3 &&<Label sx={{fontSize:"10px"}} color='info'> {data.ids.id3}</Label> }
       </Box>
       <Box sx={{display:"flex",alignItems:"center",justifyContent:'space-between'}}>
        <Box sx={{display:"flex",alignItems:"center"}}>
      <Box display="flex" mt={1} alignItems="flex-start">
                      <AvatarGroup max={4}>
                        {data && data.images && data.images.length>0 && data.images.map((item,index)=>(
                        <Tooltip key={index} arrow title="Remy Sharp">
                          <Avatar
                            component={Link}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            href="#"
                            alt="Remy Sharp"
                            src={item}
                          />
                        </Tooltip>
                      ))}
                      </AvatarGroup>
                    </Box>
                  
                    </Box>
                  <Box sx={{display:"flex",alignItems:"center",gap:"5px"}}>
                    <InsertDriveFileIcon sx={{opacity:"0.6",fontSize:"16px"}} />{data && data.insert && data.insert}
                    <ChatIcon sx={{opacity:"0.6",fontSize:"16px"}} /> {data && data.chat && data.chat}
                  </Box>  
       </Box>
      </Card>
    );
  }
  
  export default Block1;
  