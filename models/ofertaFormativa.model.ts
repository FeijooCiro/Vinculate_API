import { NombreOfertaFormativa } from "./nombreOfertaFormativa.model"

export interface ofertaFormativa {
    idOfertaFormativa?: number
    descripcionOfertaFormativa: string
    nombreOfertaFormativa: NombreOfertaFormativa
}

export type OfertaFormativa = Omit<ofertaFormativa, 'idOfertaFormativa'>