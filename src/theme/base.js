import React from 'react';

import { Theme } from '@mui/material';
import { PureLightTheme } from './schemes/PureLightTheme'; 
import { NebulaFighterTheme } from './schemes/NebulaFighterTheme'; 

const themeMap = {
  PureLightTheme,
  
  NebulaFighterTheme, 
};

export function themeCreator(theme) {
  return themeMap[theme];
}
