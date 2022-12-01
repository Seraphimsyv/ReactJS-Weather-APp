import React from 'react';
import Stack from '@mui/material/Stack';

import { Base } from './Board';
import { LoadedInfoCard, NotLoadedInfoCard } from './Card';

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  width: '100%',
  height: '25vh',
  background: '#0009'
}

const Bar = (props) => {
  
  const prepareBaseData = () => {
    if (Object.keys(props.data).length !== 0) {
      return {
        base: props.data.current,
          cards: {
            temperature: props.data.current.temperature,
            wind: props.data.current.wind,
            precipitation: props.data.current.precipitation,
            cloud_cover: props.data.current.cloud_cover
          }
        } 
    } else {
      return {}
    }
  }

  return (
    <div style={ style }>
      <Stack
        spacing={1}
        sx={{
          marginLeft: '1em',
          minWidth: '240px',
          justifyContent: 'space-around'
        }}
      >
        {props.selected !== null && Object.keys(props.data).length !== 0  ? (
          <LoadedInfoCard selected={props.selected} data={ prepareBaseData() } />
        ) : (
          <NotLoadedInfoCard />
        )}
      </Stack>
      <Base data={ prepareBaseData() } />
    </div>
  )
}

export default Bar