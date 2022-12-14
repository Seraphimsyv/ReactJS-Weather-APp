import React from 'react';
import { Skeleton } from '@mui/material';

const NotLoadedWeatherCard = () => {
  return (
    <Skeleton variant="rounded" sx={{ margin: '.25em' }} width={160} height={100} />
  )
}

export default NotLoadedWeatherCard;