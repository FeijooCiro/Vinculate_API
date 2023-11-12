import { NombreServicio } from "./nombreServicio.model"

export interface servicio {
    idServicio?: number
    descripcionServicio: string
    nombreServicio: NombreServicio
} 

export type Servicio = Omit<servicio, 'idServicio'>