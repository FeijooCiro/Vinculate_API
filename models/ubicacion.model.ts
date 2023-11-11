import { calle } from "./calle.model"
import { localidad } from "./localidad.model"
import { provincia } from "./provincia.model"

export interface ubicacion {
    idUbicacion?: number
    provincia: provincia
    localidad: localidad
    codigoPostal: string
    calle: calle
}