import React from 'react';

function SocialLink({network, link}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <i className={`fa fa-${network.toLowerCase()} fa-inverse`}></i>
        </a>
    )
};

export default SocialLink;