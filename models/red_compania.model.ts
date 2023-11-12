import { Compania } from "./compania.model"
import { RedSocial } from "./redSocial.model"

export interface Red_Compania {
    idRedCompania?: number
    redSocial: RedSocial
    compania: Compania
}