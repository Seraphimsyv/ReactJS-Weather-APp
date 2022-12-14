import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';

import Board from './Board';
import { LoadedInfoCard, NotLoadedInfoCard } from './Cards';

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  width: '100%',
  height: '25vh',
  background: '#0009'
}

const Bar = ({ data, region }) => {
  
  const prepareBaseData = () => {
    if (Object.keys(data).length !== 0) {
      return {
        base: data.current,
          cards: {
            temperature: data.current.temperature,
            wind: data.current.wind,
            precipitation: data.current.precipitation,
            cloud_cover: data.current.cloud_cover
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
        {(region !== undefined &&
          region !== null &&
          region !== "") && Object.keys(data).length !== 0  ? (
          <LoadedInfoCard region={ region } data={ prepareBaseData() } />
        ) : (
          <NotLoadedInfoCard />
        )}
      </Stack>
      <Board data={ prepareBaseData() } />
    </div>
  )
}

Bar.propTypes = {
  data: PropTypes.object,
  region: PropTypes.any
}

Bar.defaultProps = {
  data: {},
  region: null
}

export default Bar;