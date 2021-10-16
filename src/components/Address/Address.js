import React from 'react';
import '../../App.css';

const Address = (props) => {
    const {icon, title, address} = props.iAddress;
    return (
        <div>
            <div className="d-flex">
                <div className="fs-1 text-highname">
                    <i className={icon}></i>
                </div>
                <div className="mx-3">
                    <h4>{title}</h4>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    )
}

export default Address;