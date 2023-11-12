import { AreaTrabajo } from "./areaTrabajo.model"
import { NombrePuesto } from "./nombrePuesto.model"

export interface puestoLaboral {
    idPuestoLaboral?: number
    nombrePuesto: NombrePuesto
    descripcionPuesto: string
    areaTrabajo: AreaTrabajo
    estadoPuesto: 'disponible' | 'cubierto'
    modalidadTrabajo: 'presencial' | 'virtual' | 'mixta'
}

export type PuestoLaboral = Omit<puestoLaboral, 'idPuestoLaboral'>