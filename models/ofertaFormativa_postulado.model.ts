import { EstudiantePostulado } from "./estuduantePostulado.model"
import { OfertaFormativa } from "./ofertaFormativa.model"

export interface ofertaFormativa_postulado {
    idOfertaFormativaPostulado?: number
    tipoEducacion: 'Secundaria' | 'Técnica' | 'EPS' | 'Formación Profesional' | 'Tecnicatura Superior'
    ofertaFormativa: OfertaFormativa
    estudiantePostulado: EstudiantePostulado
}