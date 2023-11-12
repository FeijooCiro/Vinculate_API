import { ofertaFormativa } from "./ofertaFormativa.model"

export interface nombreOfertaLaboral {
    idNombreOfertaLaboral?: number
    titulo: string
}

export type NombreOfertaLaboral = Omit<ofertaFormativa, 'idOfertaLaboral'>