import {
  Fragment,
  forwardRef,
  Ref,
  useState,
  ReactElement,
  ChangeEvent
} from 'react';
import {
  Box,
  Divider,
  IconButton, 
  InputBase,
  Tooltip,
  Typography,
  Card,
  Dialog,
  alpha,
  Slide,
  styled,
  useTheme
} from '@mui/material'; 

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useTranslation } from 'react-i18next';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone'; 
import LogoutIcon from '@mui/icons-material/Logout';
import MicIcon from '@mui/icons-material/Mic';

const wait = (time) => new Promise((res) => setTimeout(res, time));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogWrapper = styled(Dialog)(
  () => `
    .MuiDialog-container {
        height: auto;
    }
    
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px)
    }
`
);

const SearchInputWrapper = styled(InputBase)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(18)};
    padding: ${theme.spacing(2)};
    width: 100%;
`
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
        width: ${theme.spacing(4)};
        height: ${theme.spacing(4)};
        border-radius: ${theme.general.borderRadiusLg};
`
);

 

function HeaderSearch() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [searchValue, setSearchValue] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

  const submitSearch = async (event) => {
    event.preventDefault();
    setSearchResults(false);
    setSearchLoading(true);
    await wait(1500);
    setSearchLoading(false);
    setSearchResults(true);
  };

  const handleSearchChange = async (event) => {
    event.preventDefault();

    if (event.target.value) {
      setSearchResults(false);
      setSearchValue(event.target.value);
      setSearchLoading(true);
      await wait(1500);
      setSearchLoading(false);
      setSearchResults(true);
    } else {
      setSearchValue('');
      setSearchResults(false);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{display:"flex",gap:"10px",alignItems:"center",justifyContent:"center"}}>
     <Card sx={{display:{md:'flex',xs:"none",height:"50px",paddingRight:"10px"}}}  display="flex" alignItems="center">
              <Box flexGrow={1} display="flex" alignItems="center">
                <SearchTwoToneIcon
                  sx={{
                    ml: 2,
                    color: theme.colors.secondary.main
                  }}
                />
                <SearchInputWrapper
                  value={searchValue}
                  onChange={handleSearchChange}
                  autoFocus
                  placeholder={t('Search terms here...')}
                  fullWidth
                />
                   <LogoutIcon sx={{opacity:"0.6"}} />
              </Box>
           
              </Card>
              <MicIcon sx={{opacity:"0.6"}} />
              </Box>

              <Tooltip sx={{display:{md:'none',xs:"flex"}}}   arrow title={t('Search')}>
        <IconButtonWrapper color="primary" onClick={handleClickOpen}>
          <SearchTwoToneIcon fontSize="small" />
        </IconButtonWrapper>
      </Tooltip>
      <DialogWrapper
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="sm"
        fullWidth
        scroll="paper"
        onClose={handleClose}
      >
        <Box>
          <form onSubmit={submitSearch}>
            <Box display="flex" alignItems="center">
              <Box flexGrow={1} display="flex" alignItems="center">
                <SearchTwoToneIcon
                  sx={{
                    ml: 2,
                    color: theme.colors.secondary.main
                  }}
                />
                <SearchInputWrapper
                  value={searchValue}
                  onChange={handleSearchChange}
                  autoFocus
                  placeholder={t('Search terms here...')}
                  fullWidth
                />
              </Box>
              <Card
                sx={{
                  ml: 'auto',
                  mr: 2,
                  py: 0.5,
                  px: 1,
                  background: theme.colors.alpha.black[10]
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                >
                  esc
                </Typography>
              </Card>
            </Box>
          </form>
        </Box>
        <Divider />
        {!searchLoading && (
          <>
            {!searchResults && (
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  background: theme.colors.info.lighter,
                  color: theme.colors.info.main,
                  borderRadius: theme.general.borderRadius,
                  fontSize: theme.typography.pxToRem(13),
                  display: 'flex',
                  alignItems: 'center',
                  p: 1,
                  mx: 2,
                  my: 2
                }}
              >
                <ContactSupportTwoToneIcon
                  sx={{
                    mr: 0.8,
                    fontSize: theme.typography.pxToRem(18)
                  }}
                />
                {t('Start typing to see the search results...')}
              </Typography>
            )}
          </>
        )}
       
      </DialogWrapper>
    </>
  );
}

export default HeaderSearch;
