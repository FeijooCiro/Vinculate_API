import { Request, Response } from "express"

import getConnection from "../connection/connection"
import validate from '../utils/compania.utils'

import { Compania } from "../models/compania.model"
import { LoginEntry } from "../models/usuario.model"
import { Servicio } from "../models/servicio.model"
import { NombreServicio } from "../models/nombreServicio.model"
import { RedCompania } from "../models/red_compania.model"
import { RedSocial } from "../models/redSocial.model"
import { NombreRedSocial } from "../models/nombreRedSocial.model"
import { OfertaCompania } from "../models/oferta_compania.model"
import { OfertaLaboral } from "../models/ofertaLaboral.model"
import { ZonaIncumbencia } from "../models/zonaIncumbencia.model"
import { NombreOfertaLaboral } from "../models/nombreOfertaLaboral.model"
import { PuestoLaboral } from "../models/puestoLaboral.model"
import { AreaTrabajo } from "../models/areaTrabajo.model"
import { NombrePuesto } from "../models/nombrePuesto.model"

const getEntries = async (_req: Request, res: Response): Promise<Response | void> => {
    try {
        const connection = await getConnection()
        const query = `
        SELECT 
            comp.*,
                us.*,
                serv.*,
                    nomServ.*,
            redComp.*,
                redSoc.*,
                    nomRedSoc.*,
            oferComp.*,
                oferLab.*,
                    zonInc.*,
                    nomOferLab.*,
                    puesLab.*,
                        arTrab.*,
                        nomPues.*
        FROM 
            compania comp
        INNER JOIN usuario us ON comp.idUsuario = us.idUsuario
        INNER JOIN servicio serv ON comp.idServicio = serv.idServicio
        INNER JOIN nombreServicio nomServ ON serv.idNombreServicio = nomServ.idNombreServicio
        INNER JOIN red_compania redComp ON comp.idCompania = redComp.idCompania
        INNER JOIN redSocial redSoc ON redComp.idRedSocial = redSoc.idRedSocial
        INNER JOIN nombreRedSocial nomRedSoc ON redSoc.idNombreRedSocial = nomRedSoc.idNombreRedSocial
        INNER JOIN ofertalaboral_compania oferComp ON comp.idCompania = oferComp.idCompania
        INNER JOIN ofertaLaboral oferLab ON oferComp.idOfertaLaboral = oferLab.idOfertaLaboral
        INNER JOIN zonaIncumbencia zonInc ON oferLab.idZonaIncumbencia = zonInc.idZonaIncumbencia
        INNER JOIN nombreOfertaLaboral nomOferLab ON oferLab.idNombreOfertaLaboral = nomOferLab.idNombreOfertaLaboral
        INNER JOIN puestoLaboral puesLab ON oferLab.idPuestoLaboral = puesLab.idPuestoLaboral
        INNER JOIN areaTrabajo arTrab ON puesLab.idAreaTrabajo = arTrab.idAreaTrabajo
        INNER JOIN nombrePuesto nomPues ON puesLab.idNombrePuesto = nomPues.idNombrePuesto
        `
        const allEntries = await connection.query(query)
        return res.json(allEntries[0])
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const addEntry = async (req: Request, res: Response) => {
    const connection = await getConnection()
    try {
        const newCompanyEntry: Compania = validate.toNewCompany(req.body)
        const newUserEntry: LoginEntry = validate.toNewUser(req.body)
        const newServiceEntry: Servicio = validate.toNewService(req.body)
        const newNameServiceEntry: NombreServicio = validate.toNewNameService(req.body)
        const newCompanyNetworkEntry: RedCompania = validate.toNewCompanyNetwork(req.body)
        const newSocialNetworkEntry: RedSocial = validate.toNewSocialNetwork(req.body)
        const newNameSocialNetworkEntry: NombreRedSocial = validate.toNewNameSocialNetwork(req.body)
        const newJobOfferCompanyEntry: OfertaCompania = validate.toNewOfferCompany(req.body)
        const newJobOfferEntry: OfertaLaboral = validate.toNewJobOffer(req.body)
        const newIncumbencyAreaEntry: ZonaIncumbencia = validate.toNewIncumbencyArea(req.body)
        const newNameJobOfferEntry: NombreOfertaLaboral = validate.toNewNameJobOffer(req.body)
        const newJobEntry: PuestoLaboral = validate.toNewJob(req.body)
        const newWorkAreaEntry: AreaTrabajo = validate.toNewWorkArea(req.body)
        const newNameJobEntry: NombrePuesto = validate.toNewNameJob(req.body)

        const connection = await getConnection()
        await connection.beginTransaction()

        const [result] = await connection.query('INSERT INTO compania SET ?', [newCompanyEntry])
        const insertedCompanyId = (result as any)?.insertId

        // Insertar en otras tablas relacionadas
        await connection.query('INSERT INTO usuario SET ?', [{newUserEntry}])
        await connection.query('INSERT INTO servicio SET ?', [{newServiceEntry}])
        await connection.query('INSERT INTO nombreServicio SET ?', [{newNameServiceEntry}])
        await connection.query('INSERT INTO red_compania SET ?', [{newCompanyNetworkEntry}])
        await connection.query('INSERT INTO redSocial SET ?', [{newSocialNetworkEntry}])
        await connection.query('INSERT INTO nombreRedSocial SET ?', [{newNameSocialNetworkEntry}])
        await connection.query('INSERT INTO ofertaCompania SET ?', [{newJobOfferCompanyEntry}])
        await connection.query('INSERT INTO ofertaLaboral SET ?', [{newJobOfferEntry}])     
        await connection.query('INSERT INTO zonaIncumbencia SET ?', [{newIncumbencyAreaEntry}])
        await connection.query('INSERT INTO nombreOfertaLaboral SET ?', [{newNameJobOfferEntry}])  
        await connection.query('INSERT INTO pestoLaboral SET ?', [{newJobEntry}])  
        await connection.query('INSERT INTO areaTrabajo SET ?', [{newWorkAreaEntry}])  
        await connection.query('INSERT INTO nombrePuesto SET ?', [{newNameJobEntry}])

        await connection.commit()

        res.json({ message: 'Una compania fue agregada. ', insertedCompanyId })
    }
    catch (err) {
        if (connection) {
            await connection.rollback()
        }
        throw new Error('Error: ' + err)
    } finally {
        if (connection) {
            connection.end()
        }
    }
}

const getEntry = async (req: Request, res: Response) => {
    const connection = await getConnection()
    try {
        const query = `
        SELECT 
            comp.*,
            us.*,
            serv.*,
            nomServ.*,
            redComp.*,
            redSoc.*,
            nomRedSoc.*,
            oferComp.*,
            oferLab.*,
            zonInc.*,
            nomOferLab.*,
            puesLab.*,
            arTrab.*,
            nomPues.*
        FROM compania comp
        INNER JOIN usuario us ON comp.idUsuario = us.idUsuario
        INNER JOIN servicio serv ON comp.idServicio = serv.idServicio
        INNER JOIN nombreServicio nomServ ON serv.idNombreServicio = nomServ.idNombreServicio
        INNER JOIN red_compania redComp ON comp.idCompania = redComp.idCompania
        INNER JOIN redSocial redSoc ON redComp.idRedSocial = redSoc.idRedSocial
        INNER JOIN nombreRedSocial nomRedSoc ON redSoc.idNombreRedSocial = nomRedSoc.idNombreRedSocial
        INNER JOIN ofertalaboral_compania oferComp ON comp.idCompania = oferComp.idCompania
        INNER JOIN ofertaLaboral oferLab ON oferComp.idOfertaLaboral = oferLab.idOfertaLaboral
        INNER JOIN zonaIncumbencia zonInc ON oferLab.idZonaIncumbencia = zonInc.idZonaIncumbencia
        INNER JOIN nombreOfertaLaboral nomOferLab ON oferLab.idNombreOfertaLaboral = nomOferLab.idNombreOfertaLaboral
        INNER JOIN puestoLaboral puesLab ON oferLab.idPuestoLaboral = puesLab.idPuestoLaboral
        INNER JOIN areaTrabajo arTrab ON puesLab.idAreaTrabajo = arTrab.idAreaTrabajo
        INNER JOIN nombrePuesto nomPues ON puesLab.idNombrePuesto = nomPues.idNombrePuesto
        WHERE comp.idCompania = ?`
    


        const [result] = await connection.query(query, [+req.params.idCompania])

        if (Array.isArray(result)) {
            if (result.length === 0) {
                res.status(404).json({ message: 'Compania no encontrada' })
            } else {
                res.json(result[0])
            }
        } else {
            res.json(result)
        }
    }
    catch (err) {
        if (connection) {
            await connection.rollback()
        }
        throw new Error('Error: ' + err)
    } finally {
        if (connection) {
            connection.end()
        }
    }
}

const deleteEntry = async (req: Request, res: Response) => {
    const connection = await getConnection()
    try {
        const companyId = +req.params.idCompania
        await connection.beginTransaction()

        await connection.query('DELETE FROM usuario WHERE idUsuario = (SELECT idUsuario FROM compania WHERE idCompania = ?)', [companyId])
        await connection.query('DELETE FROM servicio WHERE idServicio = (SELECT idServicio FROM compania WHERE idCompania = ?)', [companyId])
        await connection.query('DELETE FROM puestoLaboral WHERE idPuestoLaboral IN (SELECT idPuestoLaboral FROM ofertaLaboral WHERE idOfertaLaboral IN (SELECT idOfertaLaboral FROM ofertalaboral_compania WHERE idCompania = ?))', [companyId])
        await connection.query('DELETE FROM ofertalaboral_compania WHERE idCompania = ?', [companyId])
        await connection.query('DELETE FROM red_compania WHERE idCompania = ?', [companyId])
        await connection.query('DELETE FROM redSocial WHERE idRedSocial IN (SELECT idRedSocial FROM red_compania WHERE idCompania = ?)', [companyId])
        await connection.query('DELETE FROM ofertaLaboral WHERE idOfertaLaboral IN (SELECT idOfertaLaboral FROM ofertalaboral_compania WHERE idCompania = ?)', [companyId])
        await connection.query('DELETE FROM areaTrabajo WHERE idAreaTrabajo IN (SELECT idAreaTrabajo FROM puestoLaboral WHERE idPuestoLaboral IN (SELECT idPuestoLaboral FROM ofertaLaboral WHERE idOfertaLaboral IN (SELECT idOfertaLaboral FROM ofertalaboral_compania WHERE idCompania = ?)))', [companyId])
        await connection.query('DELETE FROM nombreServicio WHERE idNombreServicio IN (SELECT idNombreServicio FROM servicio WHERE idServicio = (SELECT idServicio FROM compania WHERE idCompania = ?))', [companyId])
        await connection.query('DELETE FROM nombreRedSocial WHERE idNombreRedSocial IN (SELECT idNombreRedSocial FROM redSocial WHERE idRedSocial IN (SELECT idRedSocial FROM red_compania WHERE idCompania = ?))', [companyId])
        await connection.query('DELETE FROM nombreOfertaLaboral WHERE idNombreOfertaLaboral IN (SELECT idNombreOfertaLaboral FROM ofertaLaboral WHERE idOfertaLaboral IN (SELECT idOfertaLaboral FROM ofertalaboral_compania WHERE idCompania = ?))', [companyId])
        await connection.query('DELETE FROM nombrePuesto WHERE idNombrePuesto IN (SELECT idNombrePuesto FROM puestoLaboral WHERE idPuestoLaboral IN (SELECT idPuestoLaboral FROM ofertaLaboral WHERE idOfertaLaboral IN (SELECT idOfertaLaboral FROM ofertalaboral_compania WHERE idCompania = ?)))', [companyId])
        await connection.query('DELETE FROM nombrePuesto WHERE idNombrePuesto IN (SELECT idNombrePuesto FROM puestoLaboral WHERE idPuestoLaboral IN (SELECT idPuestoLaboral FROM ofertaLaboral WHERE idOfertaLaboral IN (SELECT idOfertaLaboral FROM ofertalaboral_compania WHERE idCompania = ?)))', [companyId])
        await connection.query('DELETE FROM compania WHERE idCompania = ?', [companyId])

        await connection.commit()

        res.json({ message: 'La compañía y todos los registros relacionados fueron eliminados exitosamente.' })
    
    } catch (err) {
        await connection.rollback()
        res.status(500).json({ message: 'Error al eliminar la compañía y registros relacionados.' })
    } finally {
        if (connection) {
            connection.end()
        }
    }
}

const updateEntry = async (req: Request, res: Response) => {
    const connection = await getConnection()
    try {
        const updatedCompany: Compania = validate.toNewCompany(req.body)
        const updatedUser: LoginEntry = validate.toNewUser(req.body)
        const updatedService: Servicio = validate.toNewService(req.body)
        const updatedNameService: NombreServicio = validate.toNewNameService(req.body)
        const updatedCompanyNetwork: RedCompania = validate.toNewCompanyNetwork(req.body)
        const updatedSocialNetwork: RedSocial = validate.toNewSocialNetwork(req.body)
        const updatedNameSocialNetwork: NombreRedSocial = validate.toNewNameSocialNetwork(req.body)
        const updatedJobOfferCompany: OfertaCompania = validate.toNewOfferCompany(req.body)
        const updatedJobOffer: OfertaLaboral = validate.toNewJobOffer(req.body)
        const updatedIncumbencyArea: ZonaIncumbencia = validate.toNewIncumbencyArea(req.body)
        const updatedNameJobOffer: NombreOfertaLaboral = validate.toNewNameJobOffer(req.body)
        const updatedJob: PuestoLaboral = validate.toNewJob(req.body)
        const updatedWorkArea: AreaTrabajo = validate.toNewWorkArea(req.body)
        const updatedNameJob: NombrePuesto = validate.toNewNameJob(req.body)

        await connection.beginTransaction()

        await connection.query('UPDATE compania SET ? WHERE idCompania = ?', [updatedCompany, +req.params.idCompania])

        await connection.query('UPDATE usuario SET ? WHERE idUsuario = ?', [updatedUser, +req.params.idUsuario])
        await connection.query('UPDATE servicio SET ? WHERE idServicio = ?', [updatedService, +req.params.idServicio])
        await connection.query('UPDATE nombreServicio SET ? WHERE idNombreServicio = ?', [updatedNameService, +req.params.idMombreServicio])
        await connection.query('UPDATE red_compania SET ? WHERE idCompania = ?', [updatedCompanyNetwork, +req.params.idCompania])
        await connection.query('UPDATE redSocial SET ? WHERE idRedSocial = ?', [updatedSocialNetwork, +req.params.idRedSocial])
        await connection.query('UPDATE nombreRedSocial SET ? WHERE idNombreRedSocial = ?', [updatedNameSocialNetwork, +req.params.idNombreRedSocial])
        await connection.query('UPDATE ofertalaboral_compania SET ? WHERE idCompania = ?', [updatedJobOfferCompany, +req.params.idCompania])
        await connection.query('UPDATE ofertaLaboral SET ? WHERE idOfertaLaboral = ?', [updatedJobOffer, +req.params.idOfertaLaboral])
        await connection.query('UPDATE zonaIncumbencia SET ? WHERE idZonaIncumbencia = ?', [updatedIncumbencyArea, +req.params.idZonaIncumbencia])
        await connection.query('UPDATE nombreOfertaLaboral SET ? WHERE idNombreOfertaLaboral = ?', [updatedNameJobOffer, +req.params.idNombreOfertaLaboral])
        await connection.query('UPDATE puestoLaboral SET ? WHERE idPuestoLaboral = ?', [updatedJob, +req.params.idPuestoLaboral])        
        await connection.query('UPDATE areaTrabajo SET ? WHERE idAreaTrabajo = ?', [updatedWorkArea, +req.params.idAreaTrabajo])
        await connection.query('UPDATE nombrePuesto SET ? WHERE idNombrePuesto = ?', [updatedNameJob, +req.params.idNombrePuesto])


        await connection.commit()

        res.json({ message: 'La compañía y registros relacionados fueron actualizados exitosamente.' })
    } catch (err) {
        await connection.rollback()
        res.status(500).json({ message: 'Error al actualizar la compañía y registros relacionados.' })
    } finally {
        if (connection) {
            connection.end()
        }
    }
}



export default { getEntries, addEntry, getEntry, deleteEntry, updateEntry }