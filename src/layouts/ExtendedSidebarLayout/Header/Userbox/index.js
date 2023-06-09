 

import {
  Avatar, 
  IconButton, 
  styled, 
} from '@mui/material'; 

 

const UserBoxButton = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  padding: 0;
  height: ${theme.spacing(4)};
  margin-left: ${theme.spacing(1)};
  border-radius: ${theme.general.borderRadiusLg};
  
  &:hover {
    background: ${theme.colors.primary.main};
  }
`
);

const UserAvatar = styled(Avatar)(
  ({ theme }) => `
        height: 90%;
        width: 90%;
        border-radius: ${theme.general.borderRadiusLg};
`
);
 
 

function HeaderUserbox() {
  const user = {
    avatar: '/static/images/avatars/1.jpg',
    name: 'Rachael Simons',
    jobtitle: 'Lead Developer'
  }; 

  return (
    <>
      <UserBoxButton color="primary"   >
        <UserAvatar alt={user.name} src={user.avatar} />
      </UserBoxButton>
      
    </>
  );
}

export default HeaderUserbox;
