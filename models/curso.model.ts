import { NombreCurso } from "./nombreCurso.model"

export interface curso {
    idCurso?: number
    descripcion: string
    nombreCurso: NombreCurso
} 

export type Curso = Omit<curso, 'idCurso'>