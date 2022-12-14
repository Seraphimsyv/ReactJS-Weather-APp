import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as UkraineMap } from './ukraine.svg';
import './index.css';

const Map = ({ handler, region}) => {

  useEffect(() => {

    const handlerSelectRegion = (region) => {
      handler( region );
    }

    if (document.getElementById('map') !== null)
      document.getElementById('map').childNodes.forEach(item => {
        item.onclick = function handlerClick() {
          handlerSelectRegion( item );
        };
        item.onmouseover = function handlerOver() {
          if (item !== region)
            item.firstChild.style.fill = "yellow";
        };
        item.onmouseout = function handlerOut() {
          if (item !== region)
            item.firstChild.style.fill = "#202020";
        };

        if (region != null)
          if (item === region)
            item.firstChild.style.fill = "blue";
          else
            item.firstChild.style.fill = "#202020";
      })
  }, [handler, region])

  return (
    <div className="map">
      <UkraineMap />
    </div>
  )
}

Map.propTypes = {
  handler: PropTypes.func,
  region: PropTypes.object
}

export default Map;