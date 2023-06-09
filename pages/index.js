import { Box, Card, Container, Button, styled } from '@mui/material';

import BaseLayout from 'src/layouts/BaseLayout';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  const { t } = useTranslation();
   const router = useRouter();
   useEffect(()=>{
    router.push("/dashboards/reports")
   })
  return (
    <div>
      <Head>
        <title>Neuz Admin Panel</title>
      </Head>
      
    </div>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
