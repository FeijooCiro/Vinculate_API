export interface usuario {
    idUsuario?: number
    correo: string
    contrasenia: string
    fechaPerfilCreacion: Date
}

export type Usuario = Omit<usuario, 'idUsuario'>