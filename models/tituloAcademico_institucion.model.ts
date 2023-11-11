import { institucionETP } from "./institucionETP.model"
import { tituloInstitucion } from "./tituloInstitucion.model"

export interface tituloAcademico_Institucion {
    idTituloAcademicoInstitucion?: number
    tituloInstitucion: tituloInstitucion
    institucionETP: institucionETP
}