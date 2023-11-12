export interface nombreOfertaFormativa {
    idNombreOfertaFormativa?: number
    nombreOferta: string
}

export type NombreOfertaFormativa = Omit<nombreOfertaFormativa, 'idNombreOfertaFormativa'>