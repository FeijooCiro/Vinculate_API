import { Request, Response } from "express"

import getConnection from "../connection/connection"
import validate from '../utils/estdiantes.utils'

import { EstudiantePostulado } from "../models/estudiantePostulado.model"
import { NombreInstitucion } from "../models/nombreInstitucion.model"
import { NombreEstudiante } from "../models/nombreEstudiante.model"
import { ApellidoEstudiante } from "../models/apellidoEstudiante.model"
import { TituloEgreso } from "../models/tituloEgreso.model"
import { LoginEntry } from "../models/usuario.model"
import { OfertaFormativaPostulado } from "../models/ofertaFormativa_postulado.model"
import { OfertaFormativa } from "../models/ofertaFormativa.model"
import { NombreOfertaFormativa } from "../models/nombreOfertaFormativa.model"
import { EstudianteExperienciaLaboral } from "../models/estudiante_experienciaLaboral.model"
import { ExperienciaLaboral } from "../models/experienciaLaboral.model"
import { NombreExperienciaLaboral } from "../models/nombreExperienciaLaboral.model"
import { EstudianteCurso } from "../models/estudiante_curso.model"
import { Curso } from "../models/curso.model"
import { NombreCurso } from "../models/nombreCurso.model"

const getEntries = async (_req: Request, res: Response): Promise<Response | void> => {
    try {
        const connection = await getConnection()
        const query = `
        SELECT 
            estPost.*,
                nomInst.*,
                nomEst.*,
                apeEst.*,
                titEgr.*,
                us.*,
            oferFormEst.*,
                oferForm.*,
                    nomOferForm.*,
            expLabEst.*,
                expLab.*,
                    nomExpLab.*,
            curEst.*,
                cur.*,
                    nomCur.*
        FROM
            estudiantePostulado estPost
        INNER JOIN nombreInstitucion nomInst ON estPost.idNombreInstitucion = nomInst.idNombreInstitucion
        INNER JOIN nombreEstudiante nomEst ON estPost.idNombreEstudiante = nomEst.idNombreEstudiante
        INNER JOIN apellidoEstudiante apeEst ON estPost.idApellidoEstudiante = apeEst.idApellidoEstudiante
        INNER JOIN tituloEgresado titEgr ON estPost.idTituloEgresado = titEgr.idTituloEgresado
        INNER JOIN usuario us ON estPost.idUsuario = us.idUsuario
        INNER JOIN ofertaFormativa_estudiante oferFormEst ON estPost.idEstudiantePostulado = oferFormEst.idEstudiantePostulado
        INNER JOIN ofertaFormativa oferForm ON oferFormEst.idOfertaFormativa = oferForm.idOfertaFormativa
        INNER JOIN nombreOfertaFormativa nomOferForm ON oferForm.idNombreOfertaFormativa = nomOferForm.idNombreOfertaFormativa
        INNER JOIN estudiante_expLaboral expLabEst ON estPost.idEstudiantePostulado = expLabEst.idEstudiantePostulado
        INNER JOIN experienciaLaboral expLab ON expLabEst.idExperienciaLaboral = expLab.idExperienciaLaboral
        INNER JOIN nombreExperienciaLaboral nomExpLab ON expLab.idNombreExperienciaLaboral = nomExpLab.idNombreExperienciaLaboral
        INNER JOIN estudiante_curso curEst ON estPost.idEstudiantePostulado = curEst.idEstudiantePostulado
        INNER JOIN curso cur ON curEst.idCurso = cur.idCurso
        INNER JOIN nombreCurso nomCur ON cur.idNombreCurso = nomCur.idNombreCurso
        `
        const allEntries = await connection.query(query)
        return res.json(allEntries[0])
    }
    catch (err) {
        throw new Error('Error: ' + err)
    }
}

const addEntry = async (req: Request, res: Response): Promise<void> => {
    const connection = await getConnection()
    try {
        const newStudentEntry = validate.toNewNominatedStudent(req.body)
        const newNameInstitutionEntry = validate.toNewNameInstitution(req.body)
        const newNameStudentEntry = validate.toNewNameStudent(req.body)
        const newLastNameStudentEntry = validate.toNewLastNameStudent(req.body)
        const newGraduationTitleEntry = validate.toNewGraduationTitle(req.body)
        const newUserEntry = validate.toNewUser(req.body)
        const newStudentTrainingOfferEntry = validate.toNewTrainingOfferStudent(req.body)
        const newTrainingOfferEntry = validate.toNewTrainingOffer(req.body)
        const newNameTrainingOfferEntry = validate.toNewNameTrainingOffer(req.body)
        const newStudentWorkExperienceEntry = validate.toNewStudentWorkExperience(req.body)
        const newWorkExperienceEntry = validate.toNewWorkExperience(req.body)
        const newNameWorkExperienceEntry = validate.toNewNameWorkExperience(req.body)
        const newStudentCourseEntry = validate.toNewStudentCourse(req.body)
        const newCourseEntry = validate.toNewCourse(req.body)
        const newNameCourseEntry = validate.toNewNameCourse(req.body)

        await connection.beginTransaction()

        const [studentResult] = await connection.query('INSERT INTO estudiantePostulado SET ?', [newStudentEntry])
        const insertedStudentId = (studentResult as any)?.insertId

        await connection.query('INSERT INTO nombreInstitucion SET ?', [newNameInstitutionEntry])
        await connection.query('INSERT INTO nombreEstudiante SET ?', [newNameStudentEntry])
        await connection.query('INSERT INTO apellidoEstudiante SET ?', [newLastNameStudentEntry])
        await connection.query('INSERT INTO tituloEgresado SET ?', [newGraduationTitleEntry])
        await connection.query('INSERT INTO usuario SET ?', [newUserEntry])
        await connection.query('INSERT INTO ofertaFormativa_estudiante SET ?', [newStudentTrainingOfferEntry])
        await connection.query('INSERT INTO ofertaFormativa SET ?', [newTrainingOfferEntry])
        await connection.query('INSERT INTO nombreOfertaFormativa SET ?', [newNameTrainingOfferEntry])
        await connection.query('INSERT INTO estudiante_expLaboral SET ?', [newStudentWorkExperienceEntry])
        await connection.query('INSERT INTO experienciaLaboral SET ?', [newWorkExperienceEntry])
        await connection.query('INSERT INTO nombreExperienciaLaboral SET ?', [newNameWorkExperienceEntry])
        await connection.query('INSERT INTO estudiante_curso SET ?', [newStudentCourseEntry])
        await connection.query('INSERT INTO curso SET ?', [newCourseEntry])
        await connection.query('INSERT INTO nombreCurso SET ?', [newNameCourseEntry])

        await connection.commit()

        res.json({ message: 'Estudiante postulado agregado correctamente.', insertedStudentId })
    } catch (err) {
        await connection.rollback()
        throw new Error('Error: ' + err)
    } finally {
        connection.end()
    }
}

const getEntry = async (req: Request, res: Response): Promise<void> => {
    const connection = await getConnection()
    try {
        const query = `
        SELECT 
            estPost.*,
            nomInst.*,
            nomEst.*,
            apeEst.*,
            titEgr.*,
            us.*,
            oferFormEst.*,
            oferForm.*,
            nomOferForm.*,
            expLabEst.*,
            expLab.*,
            nomExpLab.*,
            curEst.*,
            cur.*,
            nomCur.*
        FROM
            estudiantePostulado estPost
        INNER JOIN nombreInstitucion nomInst ON estPost.idNombreInstitucion = nomInst.idNombreInstitucion
        INNER JOIN nombreEstudiante nomEst ON estPost.idNombreEstudiante = nomEst.idNombreEstudiante
        INNER JOIN apellidoEstudiante apeEst ON estPost.idApellidoEstudiante = apeEst.idApellidoEstudiante
        INNER JOIN tituloEgresado titEgr ON estPost.idTituloEgresado = titEgr.idTituloEgresado
        INNER JOIN usuario us ON estPost.idUsuario = us.idUsuario
        INNER JOIN ofertaFormativa_estudiante oferFormEst ON estPost.idEstudiantePostulado = oferFormEst.idEstudiantePostulado
        INNER JOIN ofertaFormativa oferForm ON oferFormEst.idOfertaFormativa = oferForm.idOfertaFormativa
        INNER JOIN nombreOfertaFormativa nomOferForm ON oferForm.idNombreOfertaFormativa = nomOferForm.idNombreOfertaFormativa
        INNER JOIN estudiante_expLaboral expLabEst ON estPost.idEstudiantePostulado = expLabEst.idEstudiantePostulado
        INNER JOIN experienciaLaboral expLab ON expLabEst.idExperienciaLaboral = expLab.idExperienciaLaboral
        INNER JOIN nombreExperienciaLaboral nomExpLab ON expLab.idNombreExperienciaLaboral = nomExpLab.idNombreExperienciaLaboral
        INNER JOIN estudiante_curso curEst ON estPost.idEstudiantePostulado = curEst.idEstudiantePostulado
        INNER JOIN curso cur ON curEst.idCurso = cur.idCurso
        INNER JOIN nombreCurso nomCur ON cur.idNombreCurso = nomCur.idNombreCurso
        WHERE estPost.idEstudiantePostulado = ?`

        const [result] = await connection.query(query, [+req.params.idEstudiantePostulado])

        if (Array.isArray(result)) {
            if (result.length === 0) {
                res.status(404).json({ message: 'Estudiante postulado no encontrado' })
            } else {
                res.json(result[0])
            }
        } else {
            res.json(result)
        }
    } catch (err) {
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
        const studentId = +req.params.idEstudiantePostulado
        await connection.beginTransaction()

        await connection.query('DELETE FROM nombreInstitucion WHERE idNombreInstitucion = (SELECT idNombreInstitucion FROM estudiantePostulado WHERE idEstudiantePostulado = ?)', [studentId])
        await connection.query('DELETE FROM nombreEstuduante WHERE idNombreEstudiante = (SELECT idNombreEstudiante FROM estudiantePostulado WHERE idEstudiantePostulado = ?)', [studentId])
        await connection.query('DELETE FROM apellidoEstudiante WHERE idApellidoEstudiante = (SELECT idApellidoEstudiante FROM estudiantePostulado WHERE idEstudiantePostlado = ?)', [studentId])
        await connection.query('DELETE FROM tituloEgresado WHERE idTituloEgresado = (SELECT idTituloEgresado FROM estudiantePostulado WHERE idEstudiantePostulado = ?)', [studentId])
        await connection.query('DELETE FROM usuario WHERE idUsuario = (SELECT idUsuario FROM estudiantePostulado WHERE idEstudiantePostulado = ?)', [studentId])
        await connection.query('DELETE FROM ofertaFormativa_estudiante WHERE idEstudiantePostulado = ?', [studentId])
        await connection.query('DELETE FROM ofertaFormativa WHERE idOfertaFormativa IN (SELECT idOfertaFormativa FROM ofertaFormativa_estudiante WHERE idEstudiantePostulado = ?)', [studentId])
        await connection.query('DELETE FROM nombreOfertaFormativa WHERE idNombreOfertaFormativa IN (SELECT iidNombreOfertaFormativa FROM ofertaFormativa WHERE idOfertaFormativa IN (SELECT idOfertaFormativa FROM ofertaFormativa_estudiante WHERE idEstudiantePostulado = ?))', [studentId])
        await connection.query('DELETE FROM estudiante_expLaboral WHERE idEstudiantePostulado = ?', [studentId])
        await connection.query('DELETE FROM experienciaLaboral WHERE idExperienciaLaboral IN (SELECT idExperienciaLaboral FROM estudiante_expLaboral WHERE idEstudiantePostulado = ?)', [studentId])
        await connection.query('DELETE FROM nombreExperienciaLaboral WHERE idNombreExperienciaLaboral IN (SELECT idNombreExperienciaLaboral FROM experienciaLaboral WHERE idExperienciaLaboral IN (SELECT idExperienciaLaboral FROM estudiante_expLaboral WHERE idEstudiantePostulado = ?))', [studentId])
        await connection.query('DELETE FROM estudiante_curso WHERE idEstudiantePostulado = ?', [studentId])
        await connection.query('DELETE FROM curso WHERE idCurso IN (SELECT idCurso FROM estudiante_curso WHERE idEstudiantePostulado = ?)', [studentId])
        await connection.query('DELETE FROM nombreCurso WHERE idNombreCurso IN (SELECT idNombreCurso FROM curso WHERE isCurso IN (SELECT idCurso FROM estudiante_curso WHERE idEstudiantePostulado = ?))', [studentId])
        await connection.query('DELETE FROM estudiantePostulado WHERE idEstudiantePostulado = ?', [studentId])

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
        const updatedStudent: EstudiantePostulado = validate.toNewNominatedStudent(req.body)
        const updatedNameInstitution: NombreInstitucion = validate.toNewNameInstitution(req.body)
        const updatedNameStudent: NombreEstudiante = validate.toNewNameStudent(req.body)
        const updatedLastNameStudent: ApellidoEstudiante = validate.toNewLastNameStudent(req.body)
        const updatedGraduationTitle: TituloEgreso = validate.toNewGraduationTitle(req.body)
        const updatedUser: LoginEntry = validate.toNewUser(req.body)
        const updatedTrainingOfferStudent: OfertaFormativaPostulado = validate.toNewTrainingOfferStudent(req.body)
        const updatedTrainingOffer: OfertaFormativa = validate.toNewTrainingOffer(req.body)
        const updatedNameTrainingOffer: NombreOfertaFormativa = validate.toNewNameTrainingOffer(req.body)
        const updatedStudentWorkExperience: EstudianteExperienciaLaboral = validate.toNewStudentWorkExperience(req.body)
        const updatedWorkExperience: ExperienciaLaboral = validate.toNewWorkExperience(req.body)
        const updatedNameWorkExperience: NombreExperienciaLaboral = validate.toNewNameWorkExperience(req.body)
        const updatedStudentCourse: EstudianteCurso = validate.toNewStudentCourse(req.body)
        const updatedCourse: Curso = validate.toNewCourse(req.body)
        const updatedNameCourse: NombreCurso = validate.toNewNameCourse(req.body)
        
        await connection.beginTransaction()

        await connection.query('UPDATE estudiantePostulado SET ? WHERE idEstudiantePostulado = ?', [updatedStudent, +req.params.idEstudiantePostlado])
        await connection.query('UPDATE nombreInstitucion SET ? WHERE idNombreInstitucion = ?', [updatedNameInstitution, +req.params.idNombreInstitucion])
        await connection.query('UPDATE nombreEstudiante SET ? WHERE idNombreEstudiante = ?', [updatedNameStudent, +req.params.idNombreEstudiante])
        await connection.query('UPDATE apellidoEstudiante SET ? WHERE idApellidoEstudiante = ?', [updatedLastNameStudent, +req.params.idApellidoEstudiante])
        await connection.query('UPDATE tituloEgresado SET ? WHERE idTituloEgresado = ?', [updatedGraduationTitle, +req.params.idTituloEgresado])
        await connection.query('UPDATE usuario SET ? WHERE idUsuario = ?', [updatedUser, +req.params.idUsuario])
        await connection.query('UPDATE ofertaFormativa_estudiante SET ? WHERE idOfertaFormativaEstudiante = ?', [updatedTrainingOfferStudent, +req.params.idOfertaFormativaEstudiante])
        await connection.query('UPDATE ofertaFormativa SET ? WHERE idOfertaFormativa = ?', [updatedTrainingOffer, +req.params.idOfertaFormativa])
        await connection.query('UPDATE nombreOfertaFormativa SET ? WHERE idNombreOfertaFormativa = ?', [updatedNameTrainingOffer, +req.params.idNombreOfertaFormativa])
        await connection.query('UPDATE estudiante_expLaboral SET ? WHERE idEstudianteExpLaboral = ?', [updatedStudentWorkExperience, +req.params.idEstudianteExpLaboral])
        await connection.query('UPDATE experienciaLaboral SET ? WHERE idExperienciaLaboral = ?', [updatedWorkExperience, +req.params.idExperienciaLaboral])
        await connection.query('UPDATE nombreExperienciaLaboral SET ? WHERE idNombreExperienciaLaboral = ?', [updatedNameWorkExperience, +req.params.idNombreExperienciaLaboral])
        await connection.query('UPDATE estudiante_curso SET ? WHERE idEstudianteCurso = ?', [updatedStudentCourse, +req.params.idEstudianteCurso])
        await connection.query('UPDATE curso SET ? WHERE idCurso = ?', [updatedCourse, +req.params.idCurso])
        await connection.query('UPDATE nombreCurso SET ? WHERE idNombreCurso = ?', [updatedNameCourse, +req.params.idNombreCurso])
        
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