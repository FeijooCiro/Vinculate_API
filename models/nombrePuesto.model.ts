export interface nombrePuesto {
    idNombrePuesto?: number
    nomPuesto: string
}

export type NombrePuesto = Omit<nombrePuesto, 'idnombrePuesto'>