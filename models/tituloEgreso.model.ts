export interface tituloEgreso {
    idTituloEgreso?: number
    titulo: string
}

export type TituloEgreso = Omit<tituloEgreso, 'idTituloEgreso'>