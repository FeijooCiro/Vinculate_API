import { InstitucionETP } from "./institucionETP.model"
import { OfertaFormativa } from "./ofertaFormativa.model"

export interface ofertaFormativa_institucion {
    idOfertaFormativaInstitucion?: number
    ofertaFormativa: OfertaFormativa
    institucionETP: InstitucionETP
}