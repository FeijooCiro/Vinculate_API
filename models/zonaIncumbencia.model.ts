export interface zonaIncumbencia {
    idZonaIncumbencia?: number
    localidad: string
}

export type ZonaIncumbencia = Omit<zonaIncumbencia, 'idZonaIncumbencia'>