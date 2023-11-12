import { Calle } from "./calle.model"
import { Localidad } from "./localidad.model"
import { Provincia } from "./provincia.model"

export interface ubicacion {
    idUbicacion?: number
    provincia: Provincia
    localidad: Localidad
    codigoPostal: string
    calle: Calle
}

export type Ubicacion = Omit<ubicacion, 'idUbicacion'>