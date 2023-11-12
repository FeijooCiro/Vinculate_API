import { ApellidoEstudiante } from "./apellidoestudiante.model"
import { NombreEstudiante } from "./nombreEstudiante.model"
import { TituloEgreso } from "./tituloEgreso.model"
import { Usuario } from "./usuario.model"

export interface estudiantePostulado {
    idEstudiantePostulado?: number
    dni: string
    anioEgreso: number
    nombreEstudiante: NombreEstudiante
    apellidoEstudiante: ApellidoEstudiante
    tituloEgreso: TituloEgreso
    usuario: Usuario
}

export type EstudiantePostulado = Omit<estudiantePostulado, 'idEstudiantePostulado'>