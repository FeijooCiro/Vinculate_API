import { EstudiantePostulado } from "./estudiantePostulado.model"
import { ExperienciaLaboral } from "./experienciaLaboral.model"

export interface estudiante_experienciaLaboral {
    idEstudianteExperienciaLaboral?: number
    estudiantePostulado: EstudiantePostulado
    experienciaLaboral: ExperienciaLaboral
}

export type EstudianteExperienciaLaboral = Omit<estudiante_experienciaLaboral, 'idEstudianteExperienciaLaboral'>