import { AreaTrabajo } from '../models/areaTrabajo.model';
import { Compania } from '../models/compania.model'
import { NombreOfertaLaboral } from '../models/nombreOfertaLaboral.model';
import { NombrePuesto } from '../models/nombrePuesto.model';
import { NombreRedSocial } from '../models/nombreRedSocial.model';
import { NombreServicio } from '../models/nombreServicio.model'
import { OfertaLaboral } from '../models/ofertaLaboral.model';
import { OfertaCompania } from '../models/oferta_compania.model';
import { PuestoLaboral } from '../models/puestoLaboral.model';
import { RedSocial } from '../models/redSocial.model';
import { RedCompania } from '../models/red_compania.model';
import { Servicio } from '../models/servicio.model'
import { LoginEntry } from '../models/usuario.model';
import { ZonaIncumbencia } from '../models/zonaIncumbencia.model';

import parse from './parse.utils'


// Nombres

const toNewNameService = (object: any): NombreServicio => {
    const newNameService: NombreServicio = {
        nombre: parse.string(object.nombre, 'nombre')
    };
    return newNameService;
};

const toNewNameJobOffer = (object: any): NombreOfertaLaboral => {
    const newNameJobOffer: NombreOfertaLaboral = {
        titulo: parse.string(object.titulo, 'titulo')
    };
    return newNameJobOffer;
};

const toNewNameJob = (object: any): NombrePuesto => {
    const newNameJob: NombrePuesto = {
        nomPuesto: parse.string(object.nomPuesto, 'nomPuesto')
    };
    return newNameJob;
};

const toNewNameSocialNetwork = (object: any): NombreRedSocial => {
    const newNameSocialNetwork: NombreRedSocial = {
        nombre: parse.string(object.nombre, 'nombre')
    };
    return newNameSocialNetwork;
};


// Atributos

const toNewIncumbencyArea = (object: any): ZonaIncumbencia => {
    const newIncumbencyArea: ZonaIncumbencia = {
        localidad: parse.string(object.localidad, 'localidad')
    };
    return newIncumbencyArea;
};

const toNewWorkArea = (object: any): AreaTrabajo => {
    const newWorkArea: AreaTrabajo = {
        nomArea: parse.string(object.nomArea, 'nomArea')
    };
    return newWorkArea;
};


// Parámetros

const toNewService = (object: any): Servicio => {
    const newService: Servicio = {
        descripcionServicio: parse.string(object.descripcionServicio, 'descripcionServicio'),
        nombreServicio: toNewNameService(object.nombreServicio)
    };
    return newService;
};

const toNewUser = (object: any): LoginEntry => {
    const newUser: LoginEntry = {
        nombreUsuario: parse.string(object.nombreUsuario, 'nombreUsuario'),
        correo: parse.string(object.correo, 'correo'),
        fechaPerfilCreacion: parse.date(object.fechaPerfilCreacion, 'fechaPerfilCreacion'),
        Permiso: parse.permissions(object.Permiso)
    };
    return newUser;
};

const toNewJob = (object: any): PuestoLaboral => {
    const newJob: PuestoLaboral = {
        nombrePuesto: toNewNameJob(object.nombrePuesto),
        descripcionPuesto: parse.string(object.descripcionPuesto, 'descripcionPuesto'),
        areaTrabajo: toNewWorkArea(object.areaTrabajo),
        estadoPuesto: parse.jobState(object.estadoPuesto, 'estadoPuesto'),
        modalidadTrabajo: parse.jobModality(object.modalidadTrabajo, 'modalidadTrabajo')
    };
    return newJob;
};

const toNewJobOffer = (object: any): OfertaLaboral => {
    const newJobOffer: OfertaLaboral = {
        descripcionOferta: parse.string(object.descripcionOferta, 'descripcionOferta'),
        cantHorasLaborales: parse.number(object.cantHorasLaborales, 'cantHorasLaborales'),
        nombreOfertaLaboral: toNewNameJobOffer(object.nombreOfertaLaboral),
        zonaIncumbencia: toNewIncumbencyArea(object.zonaIncumbencia),
        puestoLaboral: toNewJob(object.puestoLaboral)
    };
    return newJobOffer;
};

const toNewCompany = (object: any): Compania => {
    const newCompany: Compania = {
        nombreComp: parse.string(object.nombreComp, 'nombreComp'),
        razonSocial: parse.string(object.razonSocial, 'razonSocial'),
        descripcionComp: parse.string(object.descripcionComp, 'descripcionComp'),
        numTelefono: parse.string(object.numTelefono, 'numTelefono'),
        servicio: toNewService(object.servicio),
        usuario: toNewUser(object.usuario)
    };
    return newCompany;
};

const toNewSocialNetwork = (object: any): RedSocial => {
    const newSocialNetwork: RedSocial = {
        link: parse.string(object.link, 'link'),
        nombreRedSocial: toNewNameSocialNetwork(object.nombreRedSocial)
    };
    return newSocialNetwork;
};


// Intermedias

const toNewOfferCompany = (object: any): OfertaCompania => {
    const newOfferCompany: OfertaCompania = {
        ofertaLaboral: toNewJobOffer(object.ofertaLaboral),
        compania: toNewCompany(object.compania)
    };
    return newOfferCompany;
};

const toNewCompanyNetwork = (object: any): RedCompania => {
    const newCompanyNetwork: RedCompania = {
        redSocial: toNewSocialNetwork(object.redSocial),
        compania: toNewCompany(object.compania)
    };
    return newCompanyNetwork;
};


export default { 
    toNewNameService, 
    toNewNameJobOffer,
    toNewNameJob,
    toNewNameSocialNetwork,

    toNewIncumbencyArea,
    toNewWorkArea,

    toNewService, 
    toNewUser,
    toNewJob,
    toNewJobOffer,
    toNewCompany,
    toNewSocialNetwork,

    toNewOfferCompany,
    toNewCompanyNetwork 
}