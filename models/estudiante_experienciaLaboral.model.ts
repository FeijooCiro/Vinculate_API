import { EstudiantePostulado } from "./estuduantePostulado.model"
import { ExperienciaLaboral } from "./experienciaLaboral.model"

export interface estudiante_experienciaLaboral {
    idEstudianteExperienciaLaboral?: number
    estudiantePostulado: EstudiantePostulado
    experienciaLaboral: ExperienciaLaboral
}