export interface apellidoEstudiante {
    idApellidoEstudiante?: number
    apellidoEstudiante: string
}

export type ApellidoEstudiante = Omit<apellidoEstudiante, 'idApellidoEstudiante'>