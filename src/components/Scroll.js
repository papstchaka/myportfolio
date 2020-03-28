import React from 'react';

function Scroll(props) {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '530px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;