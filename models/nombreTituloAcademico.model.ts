export interface nombreTituloAcademico {
    idNiombreTituloAcademico?: number
    nomTitulo: string
}

export type NombreTituloAcademico = Omit<nombreTituloAcademico, 'idnombreTituloAcademico'>