import React from 'react';

function Scroll(props) {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '53em'}}>
            {props.children}
        </div>
    )
};

export default Scroll;