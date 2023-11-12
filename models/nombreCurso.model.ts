export interface nombreCurso {
    idNombreCurso?: number
    nombre: string
}

export type NombreCurso = Omit<nombreCurso, 'idNombreCurso'>