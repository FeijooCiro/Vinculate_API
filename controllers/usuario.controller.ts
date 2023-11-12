import { Request, Response } from "express"

import getConnection from "../connection/connection"

import validate from "../utils/usuario.utils" 
import service from "../services/usuario.service"

import { NewUsuario, UpdateUsuario } from "../models/usuario.model"

const getEntries = async (_req: Request, res: Response): Promise<Response | void> => {
    try {
        const connection = await getConnection()
        const allEntries = await connection.query('SELECT * FROM usuario')
        return res.json(service.getEntriesWithoutSensitiveInfo(allEntries[0]))

    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const addEntry = async (req: Request, res: Response) => {
    try {
        const newEntry: NewUsuario = validate.toNewUsuario(req.body)
        const connection = await getConnection()
        await connection.query('INSERT INTO usuario SET ?', [newEntry])
        res.json({ message: 'Nuevo usuario creado' })
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }

}

const getEntry = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection()
        const user = await connection.query('SELECT * FROM usuario WHERE idUsuario = ?', [+req.params.idUsuario])
        res.json(user[0])
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const deleteEntry = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection()
        await connection.query('DELETE FROM usuario WHERE idUsuario = ?'[+req.params.idUsuario])
        res.json({ message: 'Usuario Eliminado' })
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const updateEntry = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection()
        const updated: UpdateUsuario = validate.toNewUsuario(req.body);
        await connection.query('UPDATE usuario set ? WHERE idUsuario = ?', [updated, +req.params.idUsuario]);
        res.json({ message: 'Usuario Actualizado' });
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const loginWithEmailAndPassword = async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const connection = await getConnection()
        const allEntries = await connection.query('SELECT * FROM usuario')
        res.json(service.loginWithEmailAndPassword(req.body, allEntries[0]))
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

export default { getEntries, addEntry, getEntry, deleteEntry, updateEntry, loginWithEmailAndPassword }