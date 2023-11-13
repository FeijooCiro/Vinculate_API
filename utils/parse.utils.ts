import { ApellidoEstudiante } from "../models/apellidoEstudiante.model"
import { AreaTrabajo } from "../models/areaTrabajo.model"
import { Calle } from "../models/calle.model"
import { Compania } from "../models/compania.model"
import { Curso } from "../models/curso.model"
import { Especialidad } from "../models/especialidad.model"
import { EspecialidadInstitucion } from "../models/especialidad_institucion.model"
import { EstudianteCurso } from "../models/estudiante_curso.model"
import { EstudianteExperienciaLaboral } from "../models/estudiante_experienciaLaboral.model"
import { EstudiantePostulado } from "../models/estudiantePostulado.model"
import { ExperienciaLaboral } from "../models/experienciaLaboral.model"
import { InstitucionETP } from "../models/institucionETP.model"
import { Localidad } from "../models/localidad.model"
import { NombreCalle } from "../models/nombreCalle.models"
import { NombreCurso } from "../models/nombreCurso.model"
import { NombreEstudiante } from "../models/nombreEstudiante.model"
import { NombreExperienciaLaboral } from "../models/nombreExperienciaLaboral.model"
import { NombreInstitucion } from "../models/nombreInstitucion.model"
import { NombreOfertaFormativa } from "../models/nombreOfertaFormativa.model"
import { NombreOfertaLaboral } from "../models/nombreOfertaLaboral.model"
import { NombrePuesto, nombrePuesto } from "../models/nombrePuesto.model"
import { NombreRedSocial } from "../models/nombreRedSocial.model"
import { NombreServicio } from "../models/nombreServicio.model"
import { NombreTituloAcademico } from "../models/nombreTituloAcademico.model"
import { OfertaFormativa } from "../models/ofertaFormativa.model"
import { OfertaFormativaInstitucion } from "../models/ofertaFormativa_institucion.model"
import { OfertaFormativaPostulado } from "../models/ofertaFormativa_postulado.model"
import { OfertaLaboral } from "../models/ofertaLaboral.model"
import { OfertaCompania } from "../models/oferta_compania.model"
import { Provincia } from "../models/provincia.model"
import { PuestoLaboral } from "../models/puestoLaboral.model"
import { RedSocial } from "../models/redSocial.model"
import { RedCompania } from "../models/red_compania.model"
import { Servicio } from "../models/servicio.model"
import { TituloAcademicoInstitucion } from "../models/tituloAcademico_institucion.model"
import { TituloEgreso } from "../models/tituloEgreso.model"
import { TituloInstitucion } from "../models/tituloInstitucion.model"
import { Ubicacion } from "../models/ubicacion.model"
import { LoginEntry, Permisos } from "../models/usuario.model"
import { ZonaIncumbencia } from "../models/zonaIncumbencia.model"

import type from './types.utils' 

const string = (nameFromRequest: any, value: string): string => {
    if (!type.isString(nameFromRequest)) {
        throw new Error(value + ' incorrecto o perdido.')
    }
    return nameFromRequest
} 

const permissions = (permissionsFromRequest: any): Permisos => {
    if (!type.isString(permissionsFromRequest) || !type.isPermissions(permissionsFromRequest)) {
        throw new Error('Permiso incorrecto o perdido.')
    }
    return permissionsFromRequest
}

const number = (credentialFromRequest: any, value: string): number => {
    if (!type.isNumber(credentialFromRequest)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return credentialFromRequest
}

const trueOrFalse = (trueOrFalseFromRequest: any, value: string): boolean => {
    if (!type.isBoolean(trueOrFalseFromRequest)) {
        throw new Error(value + ' incorrecto o perdido.')
    }
    return trueOrFalseFromRequest
}

const date = (credentialFromRequest: any, value: string): Date => {
    if (!type.isDate(credentialFromRequest)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return credentialFromRequest
}

const jobState = (param: any, value: string): 'disponible' | 'cubierto' => {
    if (!type.isJobState(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }
    return param as 'disponible' | 'cubierto'
}

const jobModality = (param: any, value: string): 'presencial' | 'virtual' | 'mixta' => {
    if (!type.isJobModaity(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }
    return param as 'presencial' | 'virtual' | 'mixta'
}

const educationType = (param: any, value: string): 'Secundaria' |'Técnica' |'EPS' | 'Formación Profesional' | 'Tecnicatura Superior' => {
    if(!type.isEducationType(param)){
        throw new Error(value + ' incorrecto o perdido.')
    }
    return param as 'Secundaria' |'Técnica' |'EPS' | 'Formación Profesional' | 'Tecnicatura Superior'
}


//////////////////////////////////////// COMPAÑIA ///////////////////////////////////////////////////////////////

// Nombres

const nameService = (param: any, value: string): NombreServicio => {
    if (!type.isNameService(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombreServicio
}

const nameJobOffer = (param: any, value: string): NombreOfertaLaboral => {
    if (!type.isNameJobOffer(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombreOfertaLaboral
}

const nameJob = (param: any, value: string): nombrePuesto => {
    if (!type.isNameJob(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombrePuesto
}

const nameSocialNetwork = (param: any, value: string): NombreRedSocial => {
    if (!type.isNameSocialNetwork(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombreRedSocial
}


// Atributos

const incumbencyArea = (param: any, value: string): ZonaIncumbencia => {
    if (!type.isIncumbencyArea(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as ZonaIncumbencia
}

const workArea = (param: any, value: string): AreaTrabajo => {
    if (!type.isWorkArea(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as AreaTrabajo
}


// Parámetros

const service = (param: any, value: string): Servicio => {
    if (!type.isService(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as Servicio
}

const user = (param: any, value: string): LoginEntry => {
    if (!type.isUser(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as LoginEntry
}

const job = (param: any, value: string): PuestoLaboral => {
    if (!type.isJob(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as PuestoLaboral
}

const jobOffer = (param: any, value: string): OfertaLaboral => {
    if (!type.isJobOffer(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as OfertaLaboral
}

const company = (param: any, value: string): Compania => {
    if (!type.isCompany(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as Compania
}

const socialNetwork = (param: any, value: string): RedSocial => {
    if (!type.isSocialNetwork(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as RedSocial
}

// Intermedias

const offerCompany = (param: any, value: string): OfertaCompania => {
    if (!type.isOfferCompany(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as OfertaCompania
}

const companyNetwork = (param: any, value: string): RedCompania => {
    if (!type.isCompanyNetwork(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as RedCompania
}


////////////////////////////////////////// INSTITUCIONES /////////////////////////////////////////////////

// Nombres
const nameInstitution = (param: any, value: string): NombreInstitucion => {
    if (!type.isNameInstitution(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombreInstitucion
}

const nameStreet = (param: any, value: string): NombreCalle => {
    if (!type.isNameStreet(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombreCalle
}

const nameAcademicTitle = (param: any, value: string): NombreTituloAcademico => {
    if (!type.isNameAcademicTitle(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombreTituloAcademico
}

const nameTrainingOffer = (param: any, value: string): NombreOfertaFormativa => {
    if (!type.isNameTrainingOffer(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombreOfertaFormativa
}

// Atributos
const province = (param: any, value: string): Provincia => {
    if (!type.isProvince(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as Provincia
}

const location = (param: any, value: string): Localidad => {
    if (!type.isLocation(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as Localidad
}

const specialty = (param: any, value: string): Especialidad => {
    if (!type.isSpecialty(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as Especialidad
}

// Parámetros
const street = (param: any, value: string): Calle => {
    if (!type.isStreet(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as Calle
}

const ubication = (param: any, value: string): Ubicacion => {
    if (!type.isUbication(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as Ubicacion
}

const institution = (param: any, value: string): InstitucionETP => {
    if (!type.isInstitution(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as InstitucionETP
}

const titleInstitution = (param: any, value: string): TituloInstitucion => {
    if (!type.isTitleInstitution(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as TituloInstitucion
}

const trainingOffer = (param: any, value: string): OfertaFormativa => {
    if (!type.isTrainingOffer(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as OfertaFormativa
}

// Intermedias
const academicTitleInstitution = (param: any, value: string): TituloAcademicoInstitucion => {
    if (!type.isAcademicTitleInstitution(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as TituloAcademicoInstitucion
}

const specialtyInstitution = (param: any, value: string): EspecialidadInstitucion => {
    if (!type.isSpecialtyInstitution(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as EspecialidadInstitucion
}

const trainingOfferInstitution = (param: any, value: string): OfertaFormativaInstitucion => {
    if (!type.isTrainingOfferInstitution(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as OfertaFormativaInstitucion
}


////////////////////////////////////////// ESTUDIANTES /////////////////////////////////////////////////

// Nombres
const nameStudent = (param: any, value: string): NombreEstudiante => {
    if (!type.isNameStudent(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombreEstudiante
}

const lastNameStudent = (param: any, value: string): ApellidoEstudiante => {
    if (!type.isLastNameStudent(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as ApellidoEstudiante
}

const nameWorkExperience = (param: any, value: string): NombreExperienciaLaboral => {
    if (!type.isNameWorkExperience(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombreExperienciaLaboral
}

const nameCourse = (param: any, value: string): NombreCurso => {
    if (!type.isNameCourse(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as NombreCurso
}

// Atributos
const graduationTitle = (param: any, value: string): TituloEgreso => {
    if (!type.isGraduationTitle(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as TituloEgreso
}

// Parámetros
const nominatedStudent = (param: any, value: string): EstudiantePostulado => {
    if (!type.isNominatedStudent(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as EstudiantePostulado
}

const workExperience = (param: any, value: string): ExperienciaLaboral => {
    if (!type.isWorkExperience(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as ExperienciaLaboral
}

const course = (param: any, value: string): Curso => {
    if (!type.isCourse(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as Curso
}

// Intermedios
const trainingOfferStudent = (param: any, value: string): OfertaFormativaPostulado => {
    if (!type.isTrainingOfferStudent(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as OfertaFormativaPostulado
}

const studentWorkExperience = (param: any, value: string): EstudianteExperienciaLaboral => {
    if (!type.isStudentWorkExperience(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as EstudianteExperienciaLaboral
}

const studentCourse  = (param: any, value: string): EstudianteCurso => {
    if (!type.isStudentCourse(param)) {
        throw new Error(value + ' incorrecto o perdido.')
    }

    return param as EstudianteCurso
}



export default { 
    string, 
    permissions, 
    trueOrFalse, 
    number, 
    date, 
    jobState,
    jobModality,
    educationType,

    nameService, 
    nameJobOffer,
    nameJob,
    nameSocialNetwork,
    nameInstitution,
    nameStreet,
    nameAcademicTitle,
    nameTrainingOffer,
    nameStudent,
    lastNameStudent,
    nameWorkExperience,
    nameCourse,

    incumbencyArea,
    workArea,
    province,
    location,
    specialty,
    graduationTitle,

    service, 
    user,
    job,
    jobOffer,
    company,
    socialNetwork,
    street,
    ubication,
    institution,
    titleInstitution,
    trainingOffer,
    nominatedStudent,
    workExperience,
    course,

    offerCompany,
    companyNetwork,
    academicTitleInstitution,
    specialtyInstitution,
    trainingOfferInstitution,
    trainingOfferStudent,
    studentWorkExperience,
    studentCourse 
}