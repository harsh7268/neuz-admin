import {
  Box,
  Card,
  Tooltip,
  Typography,
  Container,
  Alert,
  styled
} from '@mui/material';
import Head from 'next/head';
import { Guest } from 'src/components/Guest';
import { useAuth } from 'src/hooks/useAuth'; 
import { RegisterJWT } from 'src/content/Auth/Register/RegisterJWT'; 
import { useTranslation } from 'react-i18next'; 
import BaseLayout from 'src/layouts/BaseLayout';
import Link from 'src/components/Link';
import { useRouter } from 'next/router';

 

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
  () => `
  display: flex;
  width: 100%;
  flex: 1;
  padding: 20px;
`
);

function RegisterBasic() {
  const { method } = useAuth();
  const { t } = useTranslation();

  const router = useRouter();
  const { demo } = router.query;

  return (
    <>
      <Head>
        <title>Register - Basic</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="sm">
          <Typography
                  variant="h2"
                  sx={{
                    mb: 1,
                    textAlign:"center"
                  }}
                >
                  {t('Dashboard')}
                </Typography>
            <Card
              sx={{
                mt: 3,
                px: 4,
                pt: 5,
                pb: 3
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1
                  }}
                >
                  {t('Create account')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {t('Fill in the fields below to sign up for an account.')}
                </Typography>
              </Box> 
              {method === 'JWT' && <RegisterJWT />} 
              <Box mt={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t('Already have an account?')}
                </Typography>{' '}
                <Link
                  href={
                    demo
                      ? `/auth/login/basic?demo=${demo}`
                      : '/auth/login/basic'
                  }
                >
                  <b>Sign in here</b>
                </Link>
              </Box>
            </Card>
          
            <Alert severity="warning">
              {t(
                'Learn how to switch between auth methods by reading the section we’ve prepared in the documentation.'
              )}
            </Alert>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

RegisterBasic.getLayout = (page) => (
  <Guest>
    <BaseLayout>{page}</BaseLayout>
  </Guest>
);

export default RegisterBasic;
