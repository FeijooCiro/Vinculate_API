import { compania } from "./compania.model"
import { redSocial } from "./redSocial.model"

export interface Red_Compania {
    idRedCompania?: number
    redSocial: redSocial
    compania: compania
}