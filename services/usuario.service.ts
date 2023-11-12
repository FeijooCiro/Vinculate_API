import { LoginEntry, LoginEntryData, NonSensitiveInfoUser, usuario } from "../models/usuario.model"

import validate from '../utils/usuario.utils'

const getEntriesWithoutSensitiveInfo = (object: any): Array<NonSensitiveInfoUser> => {
    const allUsers: usuario[] = object.map((user: usuario) => {
        return validate.asUser(user)
    })

    return allUsers.map(({ idUsuario, nombreUsuario, Permiso }) => {
        return { idUsuario, nombreUsuario, Permiso }
    })
}

const loginWithEmailAndPassword = (object: any, allEntries: any): LoginEntry => {
    const allUsers: usuario[] = allEntries.map((user: any) => validate.asUser(user))
    const loginData: LoginEntryData = validate.updateLoginUserData(object)
    const user = allUsers.find(({ correo }) => correo === loginData.correo)
    if (user !== undefined) {
        if (user.contrasenia === loginData.contrasenia) {
            const { contrasenia, ...updatedUser } = user
            return updatedUser
        }
        throw new Error('Correo o contrasenia invalidos.')
    }
    throw new Error('Correo o contrasenia invalidos.')
}

export default { getEntriesWithoutSensitiveInfo, loginWithEmailAndPassword }