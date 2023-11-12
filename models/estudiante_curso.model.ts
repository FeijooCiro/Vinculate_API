import { Curso } from "./curso.model"
import { EstudiantePostulado } from "./estuduantePostulado.model"

export interface estudiante_curso {
    idEstudianteCurso?: number
    estudiantePostulado: EstudiantePostulado
    curso: Curso
}