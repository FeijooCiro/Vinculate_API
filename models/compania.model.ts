import { servicio } from "./servicio.model"
import { usuario } from "./usuario.model"

export interface compania {
    idCompania?: number
    nombreComp: string
    razonSocial: string
    descripcionComp: string
    numTelefono: string
    servicio: servicio
    usuario: usuario
}