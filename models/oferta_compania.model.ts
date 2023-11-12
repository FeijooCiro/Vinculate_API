import { Compania } from "./compania.model";
import { OfertaLaboral } from "./ofertaLaboral.model";

export interface oferta_compania {
    idOfertaCompania?: number;
    ofertaLaboral: OfertaLaboral;
    compania: Compania;
}

export type OfertaCompania = Omit<oferta_compania, 'idOfertaCompania'> 