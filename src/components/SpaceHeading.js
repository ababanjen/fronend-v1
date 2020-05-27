import React from 'react'

const SpaceHeading = ({title, key, isSocialMedia, className}) => {
    const str = title.toUpperCase().split('')
    const wrapperClass = isSocialMedia ?  'social-media-wrapper' : 'heading-title'
    return(
        <div className={wrapperClass} key={key}>
            <div className={`content-title sm ${className}`} key={key}>
                {str.map(s => (
                    s === ' ' ? <>&nbsp;&nbsp;</>: <>{s}&nbsp;</>
                ))}
            </div>
        </div>
    )
}

export default SpaceHeading