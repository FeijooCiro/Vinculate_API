export interface nombreExperienciaLaboral {
    idNombreExperienciaLaboral?: number
    nombre: string
}

export type NombreExperienciaLaboral = Omit<nombreExperienciaLaboral, 'idNombreExperienciaLaboral'>