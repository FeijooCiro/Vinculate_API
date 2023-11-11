import { nombreTituloAcademico } from "./nombreTituloAcademico.model"

export interface tituloInstitucion {
    idTituloInstitucion?: number
    nombreTituloAcademico: nombreTituloAcademico
    descripcionTitulo: string
}