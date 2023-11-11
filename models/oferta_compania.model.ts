import { compania } from "./compania.model";
import { ofertaLaboral } from "./ofertaLaboral.model";

export interface oferta_compania {
    idOfertaCompania?: number;
    ofertaLaboral: ofertaLaboral;
    compania: compania;
}