import { NombreCalle } from "./nombreCalle.models"

export interface calle {
    idCalle?: number
    numCalle: number
    NombreCalle: NombreCalle
} 

export type Calle = Omit<calle, 'idCalle'>