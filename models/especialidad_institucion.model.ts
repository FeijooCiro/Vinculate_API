import { especialidad } from "./especialidad.model"
import { institucionETP } from "./institucionETP.model"

export interface especialidad_Institucion {
    idEspecialidadInstitucion?: number
    especialidad: especialidad
    institucionETP: institucionETP
}