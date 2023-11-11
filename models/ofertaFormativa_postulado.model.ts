import { estudiantePostulado } from "./estuduantePostulado.model"
import { ofertaFormativa } from "./ofertaFormativa.model"

export interface ofertaFormativa_postulado {
    idOfertaFormativaPostulado?: number
    tipoEducacion: 'Secundaria' | 'Técnica' | 'EPS' | 'Formación Profesional' | 'Tecnicatura Superior'
    ofertaFormativa: ofertaFormativa
    estudiantePostulado: estudiantePostulado
}