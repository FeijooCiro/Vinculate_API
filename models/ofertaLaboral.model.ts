import { nombreOfertaLaboral } from "./nombreOfertaLaboral.model"
import { puestoLaboral } from "./puestoLaboral.model"
import { zonaIncumbencia } from "./zonaIncumbencia.model"

export interface ofertaLaboral {
    idOfertaLaboral?: number
    descripcionOferta: string
    cantHorasLaborales: number
    nombreOfertaLaboral: nombreOfertaLaboral
    zonaIncumbencia: zonaIncumbencia
    puestoLaboral: puestoLaboral
}
