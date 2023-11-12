import { NombreInstitucion } from "./nombreInstitucion.model"
import { Ubicacion } from "./ubicacion.model"
import { Usuario } from "./usuario.model"

export interface institucionETP {
    idInstitucionETP?: number
    nombreInstitucion: NombreInstitucion
    cue: string
    tipoEducacion: 'Secundaria' | 'Técnica' | 'EPS' | 'Formación Profesional' | 'Tecnicatura Superior'
    descripcionInstitucion: string
    ubicacion: Ubicacion
    usuario: Usuario
}

export type InstitucionETP = Omit<institucionETP, 'idInstitucionETP'> 