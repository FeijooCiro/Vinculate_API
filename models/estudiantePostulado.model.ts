import { ApellidoEstudiante } from "./apellidoEstudiante.model"
import { NombreEstudiante } from "./nombreEstudiante.model"
import { NombreInstitucion } from "./nombreInstitucion.model"
import { TituloEgreso } from "./tituloEgreso.model"
import { LoginEntry } from "./usuario.model"

export interface estudiantePostulado {
    idEstudiantePostulado?: number
    dni: string
    anioEgreso: number
    nombreEstudiante: NombreEstudiante
    apellidoEstudiante: ApellidoEstudiante
    tituloEgreso: TituloEgreso
    usuario: LoginEntry
    nombreInstitucion: NombreInstitucion
}

export type EstudiantePostulado = Omit<estudiantePostulado, 'idEstudiantePostulado'> 