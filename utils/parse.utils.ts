import { Permisos } from "../models/usuario.model"

import type from './types.utils' 

const string = (nameFromRequest: any, value: string): string => {
    if (!type.isString(nameFromRequest)) {
        throw new Error(value + ' incorrecto o perdido.')
    }
    return nameFromRequest
} 

const permissions = (permissionsFromRequest: any): Permisos => {
    if (!type.isString(permissionsFromRequest) || !type.isPermissions(permissionsFromRequest)) {
        throw new Error('Permiso incorrecto o perdido.')
    }
    return permissionsFromRequest
}

const number = (credentialFromRequest: any, value: string): number => {
    if (!type.isNumber(credentialFromRequest)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return credentialFromRequest
}

const trueOrFalse = (trueOrFalseFromRequest: any, value: string): boolean => {
    if (!type.isBoolean(trueOrFalseFromRequest)) {
        throw new Error(value + ' incorrecto o perdido.')
    }
    return trueOrFalseFromRequest
}

const date = (credentialFromRequest: any, value: string): Date => {
    if (!type.isDate(credentialFromRequest)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return credentialFromRequest;
};

export default { string, permissions, trueOrFalse, number, date } 