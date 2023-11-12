import { NombreRedSocial } from "./nombreRedSocial.model";

export interface redSocial {
    idRedSocial?: number
    link: string
    nombreRedSocial: NombreRedSocial
}

export type RedSocial = Omit<redSocial, 'idRedSocial'>