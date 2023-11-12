import { Servicio } from "./servicio.model"
import { LoginEntry } from "./usuario.model"

export interface compania {
    idCompania?: number
    nombreComp: string
    razonSocial: string
    descripcionComp: string
    numTelefono: string
    servicio: Servicio
    usuario: LoginEntry
} 

export type Compania = Omit<compania, 'idCompania'> 