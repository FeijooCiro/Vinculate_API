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
    return param === 'disponible' || param === 'cubierto';
};

const isJobModaity = (param: any): boolean => {
    return param === 'presencial' || param === 'virtual' || param === 'mixta';
};


//////////////////////////////////////// OBJETOS ///////////////////////////////////////////////////////////////

///////////////COMPANÍA////////////////////

// Nombres

const isNameService = (param: any): boolean => {
    return param && typeof param === 'object' && 
    'nombre' in param;
}

const isNameJobOffer = (param: any): boolean => {
    return (
        typeof param === 'object' &&
        'titulo' in param
    )
}

const isNameJob = (param: any): boolean => {
    return param && typeof param === 'object' && 
    'nomPuesto' in param;
}

const isNameSocialNetwork = (param: any): boolean => {
    return param && typeof param === 'object' && 
    'nombre' in param;
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


export default { 
    isString, 
    isPermissions, 
    isNumber, 
    isBoolean, 
    isDate, 
    isJobState,
    isJobModaity,

    isNameService, 
    isNameJobOffer,
    isNameJob,
    isNameSocialNetwork,

    isIncumbencyArea,
    isWorkArea,

    isService, 
    isUser,
    isJob,
    isJobOffer,
    isCompany,
    isSocialNetwork,

    isOfferCompany,
    isCompanyNetwork
 }