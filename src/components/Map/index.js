import React, { useEffect } from 'react';
import { ReactComponent as UkraineMap } from './ukraine.svg';
import './index.css';

const Map = (props) => {

  useEffect(() => {

    const handlerSelectRegion = (region) => {
      props.handler( region );
    }

    document.getElementById('map').childNodes.forEach(item => {
      item.onclick = function handlerClick() {
        handlerSelectRegion( item );
      };
      item.onmouseover = function handlerOver() {
        if (item !== props.selected)
          item.firstChild.style.fill = "yellow";
      };
      item.onmouseout = function handlerOut() {
        if (item !== props.selected)
          item.firstChild.style.fill = "#202020";
      };

      if (props.selected != null)
        if (item === props.selected)
          item.firstChild.style.fill = "blue";
        else
          item.firstChild.style.fill = "#202020";
    })
  }, [props])

  return (
    <div className="map">
      <UkraineMap />
    </div>
  )
}

export { Map };