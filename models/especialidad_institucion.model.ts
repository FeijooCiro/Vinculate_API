import { Especialidad } from "./especialidad.model"
import { InstitucionETP } from "./institucionETP.model"

export interface especialidad_Institucion {
    idEspecialidadInstitucion?: number
    especialidad: Especialidad
    institucionETP: InstitucionETP
}