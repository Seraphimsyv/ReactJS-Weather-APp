import React from 'react';
import Box from '@mui/material/Box';

import { LoadedWeatherCard, NotLoadedWeatherCard } from '../Cards';

const Board = (props) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      {props.selected !== null && Object.keys(props.data).length !== 0  ? (
        Object.keys(props.data.cards).map((item, key) => (
          <LoadedWeatherCard key={key} title={item} data={props.data.cards[item]} />
        ))
      ) : Array.from(new Array(4)).map((value, key) => (
        <NotLoadedWeatherCard key={key} />
      ))}
    </Box>
  )
}

export default Board;