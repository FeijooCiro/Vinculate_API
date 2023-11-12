export interface nombreOfertaLaboral {
    idNombreOfertaLaboral?: number
    titulo: string
}

export type NombreOfertaLaboral = Omit<nombreOfertaLaboral, 'idNombreOfertaLaboral'>