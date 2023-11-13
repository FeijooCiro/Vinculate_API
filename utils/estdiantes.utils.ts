import { NombreEstudiante } from '../models/nombreEstudiante.model'
import { ApellidoEstudiante } from '../models/apellidoEstudiante.model'
import { NombreExperienciaLaboral } from '../models/nombreExperienciaLaboral.model'
import { NombreCurso } from '../models/nombreCurso.model'
import { TituloEgreso } from '../models/tituloEgreso.model'
import { EstudiantePostulado } from '../models/estudiantePostulado.model'
import { ExperienciaLaboral } from '../models/experienciaLaboral.model'
import { Curso } from '../models/curso.model'
import { OfertaFormativaPostulado } from '../models/ofertaFormativa_postulado.model'
import { EstudianteExperienciaLaboral } from '../models/estudiante_experienciaLaboral.model'
import { EstudianteCurso } from '../models/estudiante_curso.model'

import parse from './parse.utils'
import { NombreInstitucion } from '../models/nombreInstitucion.model'
import { OfertaFormativa } from '../models/ofertaFormativa.model'
import { NombreOfertaFormativa } from '../models/nombreOfertaFormativa.model'
import { LoginEntry } from '../models/usuario.model'

// Nombres
const toNewNameStudent = (object: any): NombreEstudiante => {
    const newNameStudent: NombreEstudiante = {
        nombre: parse.string(object.nombre, 'nombre'),
    }
    return newNameStudent
}

const toNewLastNameStudent = (object: any): ApellidoEstudiante => {
    const newLastNameStudent: ApellidoEstudiante = {
        apellidoEstudiante: parse.string(object.apellidoEstudiante, 'apellidoEstudiante'),
    }
    return newLastNameStudent
}

const toNewNameWorkExperience = (object: any): NombreExperienciaLaboral => {
    const newNameWorkExperience: NombreExperienciaLaboral = {
        nombre: parse.string(object.nombre, 'nombre'),
    }
    return newNameWorkExperience
}

const toNewNameCourse = (object: any): NombreCurso => {
    const newNameCourse: NombreCurso = {
        nombre: parse.string(object.nombre, 'nombre'),
    }
    return newNameCourse
}

const toNewNameInstitution = (object: any): NombreInstitucion => {
    const newNameInstitution: NombreInstitucion = {
        nomInstitucion: parse.string(object.nomInstitucion, 'nomInstitucion')
    }
    return newNameInstitution
}

const toNewNameTrainingOffer = (object: any): NombreOfertaFormativa => {
    const newNameTrainingOffer: NombreOfertaFormativa = {
        nombreOferta: parse.string(object.nombreOferta, 'nombreOferta')
    }
    return newNameTrainingOffer
}

// Atributos
const toNewGraduationTitle = (object: any): TituloEgreso => {
    const newGraduationTitle: TituloEgreso = {
        titulo: parse.string(object.titulo, 'titulo'),
    }
    return newGraduationTitle
}

// Parámetros
const toNewUser = (object: any): LoginEntry => {
    const newUser: LoginEntry = {
        nombreUsuario: parse.string(object.nombreUsuario, 'nombreUsuario'),
        correo: parse.string(object.correo, 'correo'),
        fechaPerfilCreacion: parse.date(object.fechaPerfilCreacion, 'fechaPerfilCreacion'),
        Permiso: parse.permissions(object.Permiso)
    }
    return newUser
}

const toNewNominatedStudent = (object: any): EstudiantePostulado => {
    const newNominatedStudent: EstudiantePostulado = {
        dni: parse.string(object.dni, 'dni'),
        anioEgreso: parse.number(object.anioEgreso, 'anioEgreso'),
        nombreEstudiante: toNewNameStudent(object.nombreEstudiante),
        apellidoEstudiante: toNewLastNameStudent(object.apellidoEstudiante),
        tituloEgreso: toNewGraduationTitle(object.tituloEgreso),
        usuario: toNewUser(object.usuario),
        nombreInstitucion: toNewNameInstitution(object.nombreInstitucion)
    }
    return newNominatedStudent
}

const toNewWorkExperience = (object: any): ExperienciaLaboral => {
    const newWorkExperience: ExperienciaLaboral = {
        descripcion: parse.string(object.descripcion, 'descripcion'),
        nombreExperienciaLaboral: toNewNameWorkExperience(object.nombreExperienciaLaboral),
    }
    return newWorkExperience
}

const toNewCourse = (object: any): Curso => {
    const newCourse: Curso = {
        descripcion: parse.string(object.descripcion, 'descripcion'),
        nombreCurso: toNewNameCourse(object.nombreCurso),
    }
    return newCourse
}

const toNewTrainingOffer = (object: any): OfertaFormativa => {
    const newTrainingOffer: OfertaFormativa = {
        descripcionOfertaFormativa: parse.string(object.descripcionOfertaFormativa, 'descripcionOfertaFormativa'),
        nombreOfertaFormativa: toNewNameTrainingOffer(object.nombreOfertaFormativa)
    }
    return newTrainingOffer
}

// Intermedios
const toNewTrainingOfferStudent = (object: any): OfertaFormativaPostulado => {
    const newTrainingOfferStudent: OfertaFormativaPostulado = {
        estudiantePostulado: toNewNominatedStudent(object.estudiantePostulado),
        ofertaFormativa: toNewTrainingOffer(object.ofertaFormativa),
        tipoEducacion: parse.educationType(object.tipoEducacion, 'tipoEducacion')
    }
    return newTrainingOfferStudent
}

const toNewStudentWorkExperience = (object: any): EstudianteExperienciaLaboral => {
    const newStudentWorkExperience: EstudianteExperienciaLaboral = {
        estudiantePostulado: toNewNominatedStudent(object.estudiantePostulado),
        experienciaLaboral: toNewWorkExperience(object.experienciaLaboral),
    }
    return newStudentWorkExperience
}

const toNewStudentCourse = (object: any): EstudianteCurso => {
    const newStudentCourse: EstudianteCurso = {
        estudiantePostulado: toNewNominatedStudent(object.estudiantePostulado),
        curso: toNewCourse(object.curso),
    }
    return newStudentCourse
}

export default {
    toNewNameStudent,
    toNewLastNameStudent,
    toNewNameWorkExperience,
    toNewNameCourse,
    toNewNameInstitution,
    toNewNameTrainingOffer,

    toNewUser,
    toNewGraduationTitle,
    toNewNominatedStudent,
    toNewWorkExperience,
    toNewCourse,
    toNewTrainingOffer,
    
    toNewTrainingOfferStudent,
    toNewStudentWorkExperience,
    toNewStudentCourse,
}