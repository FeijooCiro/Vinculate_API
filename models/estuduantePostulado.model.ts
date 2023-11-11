import { apellidoEstudiante } from "./apellidoestudiante.model"
import { nombreEstudiante } from "./nombreEstudiante.model"
import { tituloEgreso } from "./tituloEgreso.model"
import { usuario } from "./usuario.model"

export interface estudiantePostulado {
    idEstudiantePostulado?: number
    dni: string
    anioEgreso: number
    nombreEstudiante: nombreEstudiante
    apellidoEstudiante: apellidoEstudiante
    tituloEgreso: tituloEgreso
    usuario: usuario
}
