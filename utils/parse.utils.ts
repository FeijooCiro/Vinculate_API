import { AreaTrabajo } from "../models/areaTrabajo.model"
import { Compania } from "../models/compania.model"
import { NombreOfertaLaboral } from "../models/nombreOfertaLaboral.model"
import { NombrePuesto, nombrePuesto } from "../models/nombrePuesto.model"
import { NombreRedSocial } from "../models/nombreRedSocial.model"
import { NombreServicio } from "../models/nombreServicio.model"
import { OfertaLaboral } from "../models/ofertaLaboral.model"
import { OfertaCompania } from "../models/oferta_compania.model"
import { PuestoLaboral } from "../models/puestoLaboral.model"
import { RedSocial } from "../models/redSocial.model"
import { RedCompania } from "../models/red_compania.model"
import { Servicio } from "../models/servicio.model"
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
        throw new Error(value + ' incorrecto o perdido.');
    }

    return credentialFromRequest
}

const jobState = (param: any, value: string): 'disponible' | 'cubierto' => {
    if (!type.isJobState(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }
    return param as 'disponible' | 'cubierto';
};

const jobModality = (param: any, value: string): 'presencial' | 'virtual' | 'mixta' => {
    if (!type.isJobModaity(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }
    return param as 'presencial' | 'virtual' | 'mixta';
};


//////////////////////////////////////// OBJETOS ///////////////////////////////////////////////////////////////

// Nombres

const nameService = (param: any, value: string): NombreServicio => {
    if (!type.isNameService(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as NombreServicio;
};

const nameJobOffer = (param: any, value: string): NombreOfertaLaboral => {
    if (!type.isNameJobOffer(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as NombreOfertaLaboral;
};

const nameJob = (param: any, value: string): nombrePuesto => {
    if (!type.isNameJob(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as NombrePuesto;
};

const nameSocialNetwork = (param: any, value: string): NombreRedSocial => {
    if (!type.isNameSocialNetwork(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as NombreRedSocial;
};


// Atributos

const incumbencyArea = (param: any, value: string): ZonaIncumbencia => {
    if (!type.isIncumbencyArea(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as ZonaIncumbencia;
};

const workArea = (param: any, value: string): AreaTrabajo => {
    if (!type.isWorkArea(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as AreaTrabajo;
};


// Parámetros

const service = (param: any, value: string): Servicio => {
    if (!type.isService(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as Servicio;
};

const user = (param: any, value: string): LoginEntry => {
    if (!type.isUser(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as LoginEntry;
};

const job = (param: any, value: string): PuestoLaboral => {
    if (!type.isJob(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as PuestoLaboral;
};

const jobOffer = (param: any, value: string): OfertaLaboral => {
    if (!type.isJobOffer(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as OfertaLaboral;
};

const company = (param: any, value: string): Compania => {
    if (!type.isCompany(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as Compania;
};

const socialNetwork = (param: any, value: string): RedSocial => {
    if (!type.isSocialNetwork(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as RedSocial;
};

// Intermedias

const offerCompany = (param: any, value: string): OfertaCompania => {
    if (!type.isOfferCompany(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as OfertaCompania;
};

const companyNetwork = (param: any, value: string): RedCompania => {
    if (!type.isCompanyNetwork(param)) {
        throw new Error(value + ' incorrecto o perdido.');
    }

    return param as RedCompania;
};


export default { 
    string, 
    permissions, 
    trueOrFalse, 
    number, 
    date, 
    jobState,
    jobModality,

    nameService, 
    nameJobOffer,
    nameJob,
    nameSocialNetwork,

    incumbencyArea,
    workArea,

    service, 
    user,
    job,
    jobOffer,
    company,
    socialNetwork,

    offerCompany,
    companyNetwork 
} 