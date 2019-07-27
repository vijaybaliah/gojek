import React from 'react'
import styles from '../../cssmods/Forms.css'

export const FieldError = (props) => {
	if (props.meta.touched && (props.meta.error || props.error)) {
		return (
			<span
				className={styles.fieldError} data-test="FieldErrorComponent">
				{props.meta.error || props.error}
			</span>
		)
	} else {
		return null
	}
}

export const FormInput = ( props ) => {
  const { input, ...rest } = props
  return (
		<div data-test="FormInputComponent">
			<input {...input} {...rest} className={styles.inputTextField} />
			<FieldError {...props} />
		</div>
	)
}

export const FormSelect = ( props ) => {
	const { input, options, ...rest } = props
	return (
		<div data-test="FormSelect">
			<select {...input} {...rest}>
				<option />
				{
					options.map(option => <option name={option.value} key={option.value}>{option.label}</option>)
				}
			</select>
			<FieldError {...props} />
		</div>
	)
}

