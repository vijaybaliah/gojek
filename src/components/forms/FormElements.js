import React from 'react'

export const FormInput = ( props ) => {
    return (<div>
        <input {...props.input} />
        {props.meta.touched? <span className={'fieldError'}>{props.meta.error || props.error}</span>: ''}
    </div>)
}

export const FormSelect = ( props ) => {
    const { input, options, ...rest } = props
    return (<div>
        <select {...input} {...rest}>
            <option />
            {
                options.map(option => <option name={option.value} key={option.value}>{option.label}</option>)
            }
        </select>
        {props.meta.touched? <span className={'fieldError'}>{props.meta.error || props.error}</span>: ''}
    </div>)
}

