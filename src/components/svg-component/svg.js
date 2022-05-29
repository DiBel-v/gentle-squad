import * as React from 'react';

const SvgComponent = (svg) => {
    return (
        <svg className={`icon_${svg.name} ${svg.className.length ? svg.className : ''}`} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`/sprite.svg#${svg.name}`} xmlnsXlink="http://www.w3.org/1999/xlink"></use>
        </svg>
    )
}

export default SvgComponent;
