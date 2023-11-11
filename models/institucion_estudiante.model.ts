import { estudiantePostulado } from "./estuduantePostulado.model"
import { institucionETP } from "./institucionETP.model"

export interface institucion_estudiante {
    idInstitucionEstudiante?: number
    institucionETP: institucionETP
    estudiantePostulado: estudiantePostulado
}