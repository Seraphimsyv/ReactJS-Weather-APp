import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import { City } from '../../../constants';

const LoadedInfoCard = ({ data, region }) => {
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
        { City[region.attributes.id.nodeValue] } region
      </Typography>
      <Typography variant='p' color='whitesmoke'>
        {data.base.summary}  
      </Typography>
    </Box>
  )
}

LoadedInfoCard.propTypes = {
  data: PropTypes.object,
  region: PropTypes.object
}

export default LoadedInfoCard;