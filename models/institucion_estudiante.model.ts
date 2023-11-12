import { EstudiantePostulado } from "./estuduantePostulado.model"
import { InstitucionETP } from "./institucionETP.model"

export interface institucion_estudiante {
    idInstitucionEstudiante?: number
    institucionETP: InstitucionETP
    estudiantePostulado: EstudiantePostulado
}