import { NombreTituloAcademico } from "./nombreTituloAcademico.model"

export interface tituloInstitucion {
    idTituloInstitucion?: number
    nombreTituloAcademico: NombreTituloAcademico
    descripcionTitulo: string
}

export type TituloInstitucion = Omit<tituloInstitucion, 'idTituloInstitucion'>