import { NewUsuario, LoginEntryData, usuario } from '../models/usuario.model'

import parse from './parse.utils'

const toNewUsuario = (object: any): NewUsuario => {
    const newEntry: NewUsuario = {
        nombreUsuario: parse.string(object.nombreUsuario, 'nombreUsuario'),
        Permiso: parse.permissions(object.Permiso),
        contrasenia: parse.string(object.contrasenia, 'contrasenia'),
        fechaPerfilCreacion: parse.date(object.fechaPerfilCreacion, 'fechaPerfilCreacion'),
        correo: parse.string(object.correo, 'correo')
    } 
    return newEntry
}
 
const asUser = (object: any): usuario => {
    const updateEntry: usuario = {
        idUsuario: parse.number(object.idUsuario, 'idUsuario'),
        nombreUsuario: parse.string(object.nombreUsuario, 'nombreUsuario'),
        Permiso: parse.permissions(object.Permiso),
        contrasenia: parse.string(object.contrasenia, 'contrasenia'),
        fechaPerfilCreacion: parse.date(object.fechaPerfilCreacion, 'fechaPerfilCreacion'),
        correo: parse.string(object.correo, 'correo')
    }
    return updateEntry
}

const updateLoginUserData = (object: any): LoginEntryData => {
    const updateLoginEntryData: LoginEntryData = {
        contrasenia: parse.string(object.contrasenia, 'contrasenia'),
        correo: parse.string(object.correo, 'correo')
    }
    return updateLoginEntryData
}

export default { toNewUsuario, asUser, updateLoginUserData }