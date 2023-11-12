export interface especialidad {
    idEspecialidad?: number
    nombreEspecialidad: string
} 

export type Especialidad = Omit<especialidad, 'idEspecialidad'>