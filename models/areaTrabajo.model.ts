export interface areaTrabajo {
    idAreaTrabajo?: number
    nomArea: string
}
 
export type AreaTrabajo = Omit<areaTrabajo, 'idAreaTrabajo'>