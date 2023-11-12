export interface nombreRedSocial {
    idNombreRedSocial?: number
    nombre: string
}

export type NombreRedSocial = Omit<nombreRedSocial, 'idNombreRedSocial'>