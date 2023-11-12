import { NombreOfertaLaboral } from "./nombreOfertaLaboral.model"
import { PuestoLaboral } from "./puestoLaboral.model"
import { ZonaIncumbencia } from "./zonaIncumbencia.model"

export interface ofertaLaboral {
    idOfertaLaboral?: number
    descripcionOferta: string
    cantHorasLaborales: number
    nombreOfertaLaboral: NombreOfertaLaboral
    zonaIncumbencia: ZonaIncumbencia
    puestoLaboral: PuestoLaboral
}

export type OfertaLaboral = Omit<ofertaLaboral, 'idOfertaLaboral'>