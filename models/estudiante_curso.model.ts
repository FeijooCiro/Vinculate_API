import { Curso } from "./curso.model"
import { EstudiantePostulado } from "./estudiantePostulado.model"

export interface estudiante_curso {
    idEstudianteCurso?: number
    estudiantePostulado: EstudiantePostulado
    curso: Curso
}

export type EstudianteCurso = Omit<estudiante_curso, 'idEstudianteCurso'>