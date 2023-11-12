export interface localidad {
    idLocalidad?: number
    nomLocalidad: string
}

export type Localidad = Omit<localidad, 'idLocalidad'>
