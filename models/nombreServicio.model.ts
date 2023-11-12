export interface nombreServicio {
    idNombreServicio?: number
    nombre: string
}

export type NombreServicio = Omit<nombreServicio, 'idNombreServicio'>