import React, { useState } from 'react';
import './index.css';
import Map from '../Map';
import Bar from '../Bar';
import { Url, ApiKey } from '../../constants.js';

const App = () => {
  const [cache, setCache] = useState( {} );
  const [region, setRegion] = useState( null );
  const [regionID, setRegionID] = useState( null );

  const handlerSetRegion = (el) => {
    handlerUploadApi( el );
    setRegion( el );
  }

  const handlerUploadApi = ( el ) => {
    const id = el.attributes.id.nodeValue;

    if (cache[id] === undefined) {
      fetch(`${Url}/point?place_id=${id}&key=${ApiKey}`)
        .catch(err => alert(`1 step - ${err}`))
        .then(res => res.json())
        .catch(err => alert(`2 step - ${err}`))
        .then(res => {
          setCache(Object.assign(cache, {[id]: res}))
          setRegionID( id );
          setRegion( el );
        })
        .catch(err => alert(`3 step - ${err}`))
    } else {
      setRegionID( id );
      setRegion( el );
    }
  }

  return (
    <div className='app'>
      <Map handler={ handlerSetRegion }  region={ region } />
      <Bar
        data={ cache[regionID] !== undefined ? cache[regionID] : {} }
        region={ region }
      />
    </div>
  )
}

export default App;
