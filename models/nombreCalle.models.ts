export interface nombreCalle {
    idNombreCalle?: number
    nomCalle: string
} 

export type NombreCalle = Omit<nombreCalle, 'idNombreCalle'>