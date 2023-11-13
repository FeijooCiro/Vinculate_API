import { InstitucionETP } from "./institucionETP.model"
import { TituloInstitucion } from "./tituloInstitucion.model"

export interface tituloAcademico_Institucion {
    idTituloAcademicoInstitucion?: number
    tituloInstitucion: TituloInstitucion
    institucionETP: InstitucionETP
} 

export type TituloAcademicoInstitucion = Omit<tituloAcademico_Institucion, 'idTituloAcademicoInstitucion'>