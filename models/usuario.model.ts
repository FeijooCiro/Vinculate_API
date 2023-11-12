export enum Permisos {
    Admin = 'admin',
    Estudiante = 'estudiante',
    Institucion = 'institucion',
    Compania = 'compania'
}


export interface usuario {
    idUsuario?: number
    nombreUsuario: string
    correo: string
    contrasenia: string
    fechaPerfilCreacion: Date
    Permiso: Permisos
}

export type Usuario = Omit<usuario, 'idUsuario'> 
export type NonSensitiveInfoUser = Pick<usuario, 'idUsuario' | 'nombreUsuario' | 'Permiso'>
export type NewUsuario = Omit<usuario, 'idUsuario'>
export type UpdateUsuario = Omit<usuario, 'idUsuario'>
export type LoginEntryData = Pick<usuario, 'correo' | 'contrasenia'>
export type LoginEntry = Omit<usuario, 'contrasenia' >