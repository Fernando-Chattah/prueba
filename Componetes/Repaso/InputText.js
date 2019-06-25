import React from 'react';

const InputText = ({value, onChange}) => {

    return (
        <input type="text" value={value} onChange={(e) => onChange && onChange(e.target.value)}></input>
    )
    }
export default InputText;