import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WindPowerIcon from '@mui/icons-material/WindPower';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';

const LoadedWeatherCard = (props) => {

  const Title = () => {
    return <Chip label={`${props.title}`} sx={{ color: 'whitesmoke' }} />
  }

  const Icon = () => {
    const style = { margin: 'auto', marginTop: '.25em', marginBottom: '.25em', fontSize: 60 };
    return props.title === 'temperature' ? (
      <DeviceThermostatIcon
        color='action'
        sx={style}
      />) : props.title === 'wind' ? (
      <WindPowerIcon
        color='action'
        sx={style}
      /> ) : props.title === 'cloud_cover' ? (
      <CloudIcon
        color='action'
        sx={style}
      />
      ) : (
      <ThunderstormIcon
        color='action'
        sx={style}
      />)
  }

  const Info = () => {
    return typeof props.data === 'object' ? Object.keys(props.data).map((subItem, subKey) => (
      <Chip
        key={subKey}
        label={`${props.data[subItem]}`}
        sx={{ color: 'whitesmoke', margin: '0.25em' }}
        variant="outlined" 
      />
    )) : (
      <Chip
        label={props.title === 'temperature' ? `${props.data}°C` : `${props.data}%`}
        sx={{ color: 'whitesmoke' }}
        variant="outlined" 
      />
    )
  }

  return (
    <Card sx={{
        minWidth: '175px',
        margin: '.25em',
        background: '#6f6f6f'
      }}
    >
      <CardActionArea>
        <Stack
          sx={{
            padding: '.5em',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Title />
          <Icon />
          <Stack
            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
          >
            <Info />
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  )
}

export default LoadedWeatherCard;