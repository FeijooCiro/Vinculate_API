import { Servicio } from "./servicio.model"
import { Usuario } from "./usuario.model"

export interface compania {
    idCompania?: number
    nombreComp: string
    razonSocial: string
    descripcionComp: string
    numTelefono: string
    servicio: Servicio
    usuario: Usuario
} 

export type Compania = Omit<compania, 'idCompania'> 