import { estudiantePostulado } from "./estuduantePostulado.model"
import { experienciaLaboral } from "./experienciaLaboral.model"

export interface estudiante_experienciaLaboral {
    idEstudianteExperienciaLaboral?: number
    estudiantePostulado: estudiantePostulado
    experienciaLaboral: experienciaLaboral
}