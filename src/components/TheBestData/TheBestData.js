import React from 'react';

const TheBestData = (props) => {

    const {icon, title, description} = props.data;
    return (
        <div>
            <div style={{width: '20rem'}} className="mx-3 mt-2 mb-5 px-4 py-5 bg-light shadow rounded">
                <div className="text-success fs-2 mb-3">
                    <i className={icon}></i>
                </div>
                <h4 className="mb-3 pb-2">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TheBestData;