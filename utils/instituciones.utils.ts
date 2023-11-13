
import { Calle } from '../models/calle.model'
import { Especialidad } from '../models/especialidad.model'
import { EspecialidadInstitucion } from '../models/especialidad_institucion.model'
import { InstitucionETP } from '../models/institucionETP.model'
import { Localidad } from '../models/localidad.model'
import { NombreCalle } from '../models/nombreCalle.models'
import { NombreInstitucion } from '../models/nombreInstitucion.model'
import { NombreOfertaFormativa } from '../models/nombreOfertaFormativa.model'
import { NombreTituloAcademico } from '../models/nombreTituloAcademico.model'
import { OfertaFormativa } from '../models/ofertaFormativa.model'
import { OfertaFormativaInstitucion } from '../models/ofertaFormativa_institucion.model'
import { Provincia } from '../models/provincia.model'
import { TituloAcademicoInstitucion } from '../models/tituloAcademico_institucion.model'
import { TituloInstitucion } from '../models/tituloInstitucion.model'
import { Ubicacion } from '../models/ubicacion.model'
import { LoginEntry } from '../models/usuario.model'
import parse from './parse.utils'


// Nombres
const toNewInstitutionName = (object: any): NombreInstitucion => {
    const newInstitutionName: NombreInstitucion = {
        nomInstitucion: parse.string(object.nomInstitution, 'nomInstitution')
    }
    return newInstitutionName
}

const toNewStreetName = (object: any): NombreCalle => {
    const newStreetName: NombreCalle = {
        nomCalle: parse.string(object.nomCalle, 'nomCalle')
    }
    return newStreetName
}

const toNewAcademicTitleName = (object: any): NombreTituloAcademico => {
    const newAcademicTitleName: NombreTituloAcademico = {
        nomTitulo: parse.string(object.nomTitulo, 'nomTitulo')
    }
    return newAcademicTitleName
}

const toNewTrainingOfferName = (object: any): NombreOfertaFormativa => {
    const newTrainingOfferName: NombreOfertaFormativa = {
        nombreOferta: parse.string(object.nombreOferta, 'nombreOferta')
    }
    return newTrainingOfferName
}


// Atributos
const toNewProvince = (object: any): Provincia => {
    const newProvince: Provincia = {
        nomProvincia: parse.string(object.nomProvincia, 'nomProvincia')
    }
    return newProvince
}

const toNewLocation = (object: any): Localidad => {
    const newLocation: Localidad = {
        nomLocalidad: parse.string(object.nomLocalidad, 'nomLocalidad')
    }
    return newLocation
}

const toNewSpecialty = (object: any): Especialidad => {
    const newSpecialty: Especialidad = {
        nombreEspecialidad: parse.string(object.nombreEspecialidad, 'nombreEspecialidad')
    }
    return newSpecialty
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

const toNewStreet = (object: any): Calle => {
    const newStreet: Calle = {
        NombreCalle: toNewStreetName(object.NombreCalle),
        numCalle: parse.number(object.numCalle, 'numCalle')
    }
    return newStreet
}

const toNewUbication = (object: any): Ubicacion => {
    const newUbication: Ubicacion = {
        provincia: toNewProvince(object.provincia),
        localidad: toNewLocation(object.localidad),
        codigoPostal: parse.string(object.codigoPostal, 'codigoPostal'),
        calle: toNewStreet(object.calle)
    }
    return newUbication
}

const toNewInstitution = (object: any): InstitucionETP => {
    const newInstitution: InstitucionETP = {
        nombreInstitucion: toNewInstitutionName(object.nombreInstitucion),
        cue: parse.string(object.cue, 'cue'),
        tipoEducacion: parse.educationType(object.tipoEducacion, 'tipoEducacion'),
        descripcionInstitucion: parse.string(object.descripcionInstitucion, 'descripcionInstitucion'),
        ubicacion: toNewUbication(object.ubicacion),
        usuario: toNewUser(object.usuario)
    }
    return newInstitution
}

const toNewTitleInstitution = (object: any): TituloInstitucion => {
    const newTitleInstitution: TituloInstitucion = {
        nombreTituloAcademico: toNewAcademicTitleName(object.nombreTituloAcademico),
        descripcionTitulo: parse.string(object.descripcionTitulo, 'descripcionTitulo')
    }
    return newTitleInstitution
}

const toNewTrainingOffer = (object: any): OfertaFormativa => {
    const newTrainingOffer: OfertaFormativa = {
        nombreOfertaFormativa: toNewTrainingOfferName(object.nombreOfertaFormativa),
        descripcionOfertaFormativa: parse.string(object.descripcionOfertaFormativa, 'descripcionOfertaFormativa')
    }
    return newTrainingOffer
}

// Intermedias
const toNewTitleInstitutionInstitution = (object: any): TituloAcademicoInstitucion => {
    const newTitleInstitutionInstitution: TituloAcademicoInstitucion = {
        tituloInstitucion: toNewTitleInstitution(object.tituloInstitucion),
        institucionETP: toNewInstitution(object.institucionETP)
    }
    return newTitleInstitutionInstitution
}

const toNewSpecialtyInstitution = (object: any): EspecialidadInstitucion => {
    const newSpecialtyInstitution: EspecialidadInstitucion = {
        institucionETP: toNewInstitution(object.institucionETP),
        especialidad: toNewSpecialty(object.especialidad)
    }
    return newSpecialtyInstitution
}

const toNewTrainingOfferInstitution = (object: any): OfertaFormativaInstitucion => {
    const newTrainingOfferInstitution: OfertaFormativaInstitucion = {
        institucionETP: toNewInstitution(object.institucionETP),
        ofertaFormativa: toNewTrainingOffer(object.ofertaFormativa)
    }
    return newTrainingOfferInstitution
}

export default {
    toNewInstitutionName,
    toNewStreetName,
    toNewAcademicTitleName,
    toNewTrainingOfferName,

    toNewProvince,
    toNewLocation,
    toNewSpecialty,
    toNewStreet,

    toNewUser,
    toNewUbication,
    toNewInstitution,
    toNewTitleInstitution,
    toNewTrainingOffer,
    
    toNewTitleInstitutionInstitution,
    toNewSpecialtyInstitution,
    toNewTrainingOfferInstitution
}
