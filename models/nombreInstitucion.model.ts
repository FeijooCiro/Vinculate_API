export interface nombreInstitucion {
    idNombreInstitucion?: number
    nomInstitucion: string
}

export type NombreInstitucion = Omit<nombreInstitucion, 'idNombreInstitucion'>