import { InstitucionETP } from "./institucionETP.model"
import { OfertaFormativa } from "./ofertaFormativa.model"

export interface ofertaFormativa_institucion {
    idOfertaFormativaInstitucion?: number
    ofertaFormativa: OfertaFormativa
    institucionETP: InstitucionETP
}

export type OfertaFormativaInstitucion = Omit<ofertaFormativa_institucion, 'idOfertaFormativaInstitucion'>