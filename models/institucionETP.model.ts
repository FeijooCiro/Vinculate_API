import { nombreInstitucion } from "./nombreInstitucion.model"
import { ubicacion } from "./ubicacion.model"
import { usuario } from "./usuario.model"

export interface institucionETP {
    idInstitucionETP?: number
    nombreInstitucion: nombreInstitucion
    cue: string
    tipoEducacion: 'Secundaria' | 'Técnica' | 'EPS' | 'Formación Profesional' | 'Tecnicatura Superior'
    descripcionInstitucion: string
    ubicacion: ubicacion
    usuario: usuario
}