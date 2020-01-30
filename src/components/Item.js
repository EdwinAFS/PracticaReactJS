import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({data}) => (
    <React.Fragment>
        <Link className='grid-item-link' to={`/detail/${data.id}`}>    
            <div className="grid-item">
                <img className='preview-image' ref={ element => fadeIn( element )} src={ data.image} alt={data.character}/>
                <div className='preview-title'>{data.character}</div>
                <p className='preview-quote'>{data.quote}</p>
            </div>
        </Link>
    </React.Fragment>
);

function fadeIn(element) {
    element.style.opacity = 0;
  
    var last = +new Date();
    var tick = function() {
      element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
      last = +new Date();
  
      if (+element.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
  }

Item.propTypes = {
    data: PropTypes.object.isRequired
}

export default Item;