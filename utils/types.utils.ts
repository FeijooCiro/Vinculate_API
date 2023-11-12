import { Permisos } from "../models/usuario.model"

const isString = (param: any): boolean => {
    return typeof param === 'string' || param instanceof String
}

const isPermissions = (param: any): boolean => {
    return Object.values(Permisos).includes(param)
} 

const isNumber = (param: any): boolean => {
    return typeof param === 'number'
}

const isBoolean = (param: any): boolean => {
    return typeof param === 'boolean'
}

const isDate = (param: any): boolean => {
    return Object.values(Date).includes(param) || param instanceof Date
}

export default { isString, isPermissions, isNumber, isBoolean, isDate }