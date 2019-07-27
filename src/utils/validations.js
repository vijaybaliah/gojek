export const isEmpty = value => value === undefined || value === null || value === ''

export const required = value => (value ? undefined : 'Required')