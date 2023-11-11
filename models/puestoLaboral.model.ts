import { areaTrabajo } from "./areaTrabajo.model"
import { nombrePuesto } from "./nombrePuesto.model"

export interface puestoLaboral {
    idPuestoLaboral?: number
    nombrePuesto: nombrePuesto
    descripcionPuesto: string
    areaTrabajo: areaTrabajo
    estadoPuesto: 'disponible' | 'cubierto'
    modalidadTrabajo: 'presencial' | 'virtual' | 'mixta'
}
