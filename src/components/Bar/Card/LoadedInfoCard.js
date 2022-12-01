import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import { City } from '../../../constants';

const LoadedInfoCard = (props) => {
  return (
    <Box
      sx={{
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center'
      }}
    >
      <Typography variant='h5' color='whitesmoke'>
        { City[props.selected.attributes.id.nodeValue] } region
      </Typography>
      <Typography variant='p' color='whitesmoke'>
        {props.data.base.summary}  
      </Typography>
    </Box>
  )
}

export default LoadedInfoCard;