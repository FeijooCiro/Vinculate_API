import { Permisos } from "../models/usuario.model"

const isString = (param: any): boolean => {
    return typeof param === 'string' || param instanceof String
}

const isPermissions = (param: any): boolean => {
    return Object.values(Permisos).includes(param)
} 

const isNumber = (param: any): boolean => {
    return typeof param === 'number'
}

const isBoolean = (param: any): boolean => {
    return typeof param === 'boolean'
}

const isDate = (param: any): boolean => {
    return Object.values(Date).includes(param) || param instanceof Date
}

const isJobState = (param: any): boolean => {
    return param === 'disponible' || param === 'cubierto'
}

const isJobModaity = (param: any): boolean => {
    return param === 'presencial' || param === 'virtual' || param === 'mixta'
}

const isEducationType = (param: any): boolean => {
    return param ==='Secundaria' || param === 'Técnica' || param === 'EPS' || param === 'Formación Profesional' || param === 'Tecnicatura Superior'
}


//////////////////////////////////////// OBJETOS ///////////////////////////////////////////////////////////////

///////////////COMPANÍA////////////////////

// Nombres

const isNameService = (param: any): boolean => {
    return param && typeof param === 'object' && 
    'nombre' in param
}

const isNameJobOffer = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'titulo' in param
    )
}

const isNameJob = (param: any): boolean => {
    return param && typeof param === 'object' && 
    'nomPuesto' in param
}

const isNameSocialNetwork = (param: any): boolean => {
    return param && typeof param === 'object' && 
    'nombre' in param
}


// Atributos

const isIncumbencyArea = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'localidad' in param
    )
}

const isWorkArea = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'nomArea' in param
    )
}


// Parámetros

const isService = (param: any): boolean => {
    return (
        param &&
        typeof param === 'object' &&
        'descripcionServicio' in param &&
        isNameService(param.nombreServicio)
    )
}

const isUser = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'nombreUsuario' in param &&
        'correo' in param &&
        'fechaPerfilCreacion' in param &&
        isPermissions(param.Permiso)
    )
}

const isJob = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isNameJob(param.nombrePuesto) &&
        'descripcionPuesto' in param &&
        isWorkArea(param.areaTrabajo) &&
        isJobState(param.estadoPuesto) &&
        isJobModaity(param.modalidadTrabajo) 
    )
}

const isJobOffer = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'descripcionOferta' in param &&
        'cantHorasLaborales' in param &&
        isNameJobOffer(param.nombreOfertaLaboral) &&
        isIncumbencyArea(param.zonaIncumbencia) &&
        isJob(param.puestoLaboral)
    )
}

const isCompany = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'nombreComp' in param &&
        'razonSocial' in param &&
        'descripcionComp' in param &&
        'numTelefono' in param &&
        isService(param.servicio) &&
        isUser(param.usuario)
    )
}

const isSocialNetwork = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'link' in param &&
        isNameSocialNetwork(param.nombreRedSocial) 
    )
}


// Intermedias

const isOfferCompany = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isJobOffer(param.ofertaLaboral) &&
        isCompany(param.compania)
    )
}

const isCompanyNetwork = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isSocialNetwork(param.redSocial) &&
        isCompany(param.compania)
    )
}


//////////////////INSTITUCIONES/////////////////////////////

// Nombres
const isNameInstitution = (param: any): boolean => {
    return param && typeof param === 'object' && 
    'nomInstitution' in param
}

const isNameStreet = (param: any): boolean => {
    return param && typeof param === 'object' && 
    'nomCalle' in param
}

const isNameAcademicTitle = (param: any): boolean => {
    return param && typeof param === 'object' && 
    'nomTitulo' in param
}

const isNameTrainingOffer = (param: any): boolean => {
    return param && typeof param === 'object' && 
    'nombreOferta' in param
}


// Atributos
const isProvince = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'nomProvincia' in param 
    )
}

const isLocation = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'nomLocalidad' in param 
    )
}
const isSpecialty = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'nombreEspecialidad' in param 
    )
}


// Parámetros
const isStreet = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isNameStreet(param.nombreCalle) &&
        'numCalle' in param 
    )
}

const isUbication = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isProvince(param.provincia) &&
        isLocation(param.localidad) &&
        'codigoPostal' in param &&
        isStreet(param.calle) 
    )
}

const isInstitution = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isNameInstitution(param.nombreInstitucion) &&
        'cue' in param &&
        isEducationType(param.tipoEducacion) &&
        'descripcionInstitucion' in param &&
        isUbication(param.ubicacion) &&
        isUser(param.usuario)
    )
}

const isTitleInstitution = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isNameAcademicTitle(param.tituloInstitucion) &&
        'descripcionTitulo' in param
    )
}

const isTrainingOffer = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isNameTrainingOffer(param.nombreOfertaFormativa) &&
        'descripcionOfertaFormativa' in param
    )
}


// Intermedias
const isAcademicTitleInstitution = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isTitleInstitution(param.tituloInstitucion) &&
        isInstitution(param.institucionETP) 
    )
}

const isSpecialtyInstitution = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isInstitution(param.institucionETP) &&
        isSpecialty(param.especialidad) 
    )
}

const isTrainingOfferInstitution = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isInstitution(param.institucionETP) &&
        isTrainingOffer(param.ofertaFormativa) 
    )
}


//////////////////ESTUDIANTES/////////////////////////////

// Nombres
const isNameStudent = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'nombre' in param  
    )
}

const isLastNameStudent = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'apellidoEstudiante' in param  
    )
}

const isNameWorkExperience = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'nombre' in param  
    )
}

const isNameCourse = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'nombre' in param  
    )
}


// Atributos
const isGraduationTitle = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'titulo' in param  
    )
}

// Parámetros
const isNominatedStudent = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'dni' in param &&
        'anioEgreso' in param &&
        isNameStudent(param.nombreEstudiante) &&
        isLastNameStudent(param.apellidoEstudiante) &&
        isGraduationTitle(param.tituloEgreso) &&
        isUser(param.usuario) &&
        isNameInstitution(param.nombreInstitucion) 
    )
}

const isWorkExperience = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'dni' in param &&
        isNameWorkExperience(param.nombreExperienciaLaboral) 
    )
}

const isCourse = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'descripcion' in param &&
        isNameCourse(param.nombreCurso) 
    )
}

// Intermedios
const isTrainingOfferStudent = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isNominatedStudent(param.estudiantePostulado) &&
        isTrainingOffer(param.ofertaFormativa) 
    )
}

const isStudentWorkExperience = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isNominatedStudent(param.estudiantePostulado) &&
        isWorkExperience(param.experienciaLaboral) 
    )
}

const isStudentCourse  = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        isNominatedStudent(param.estudiantePostulado) &&
        isCourse(param.curso) 
    )
}


export default { 
    isString, 
    isPermissions, 
    isNumber, 
    isBoolean, 
    isDate, 
    isJobState,
    isJobModaity,
    isEducationType,

    isNameService, 
    isNameJobOffer,
    isNameJob,
    isNameSocialNetwork,
    isNameInstitution,
    isNameStreet,
    isNameAcademicTitle,
    isNameTrainingOffer,
    isNameStudent,
    isLastNameStudent,
    isNameWorkExperience,
    isNameCourse,

    isIncumbencyArea,
    isWorkArea,
    isProvince,
    isLocation,
    isSpecialty,
    isGraduationTitle,

    isService, 
    isUser,
    isJob,
    isJobOffer,
    isCompany,
    isSocialNetwork,
    isStreet,
    isUbication,
    isInstitution,
    isTitleInstitution,
    isTrainingOffer,
    isNominatedStudent,
    isWorkExperience,
    isCourse,

    isOfferCompany,
    isCompanyNetwork,
    isAcademicTitleInstitution,
    isSpecialtyInstitution,
    isTrainingOfferInstitution,
    isTrainingOfferStudent,
    isStudentWorkExperience,
    isStudentCourse
 }