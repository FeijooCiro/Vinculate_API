import { curso } from "./curso.model"
import { estudiantePostulado } from "./estuduantePostulado.model"

export interface estudiante_curso {
    idEstudianteCurso?: number
    estudiantePostulado: estudiantePostulado
    curso: curso
}