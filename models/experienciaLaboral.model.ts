import { NombreExperienciaLaboral } from "./nombreExperienciaLaboral.model"

export interface experienciaLaboral {
    idExperienciaLaboral?: number
    descripcion: string
    nombreExperienciaLaboral: NombreExperienciaLaboral
}

export type ExperienciaLaboral = Omit<experienciaLaboral, 'idExperiencialaboral'>