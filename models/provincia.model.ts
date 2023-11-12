export interface provincia {
    idProvincia?: number
    nomProvincia: string
}

export type Provincia = Omit<provincia, 'idProvincia'>