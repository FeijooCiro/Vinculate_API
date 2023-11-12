export interface nombreEstudiante {
    idNombreEstudiante?: number
    nombre: string
}

export type NombreEstudiante = Omit<nombreEstudiante, 'idNombreEstudiante'>