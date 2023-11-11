import { institucionETP } from "./institucionETP.model"
import { ofertaFormativa } from "./ofertaFormativa.model"

export interface ofertaFormativa_institucion {
    idOfertaFormativaInstitucion?: number
    ofertaFormativa: ofertaFormativa
    institucionETP: institucionETP
}