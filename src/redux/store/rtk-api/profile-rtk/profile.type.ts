export interface IProfile {
    id: number,
    firstName?: string,
    secondName?: string,
    middleName?: string,
    date?: string,
    iin?: string,
    region?: null,
    user?: {
        id?: number,
        phone?: string
    }

}

export interface IProfileUpdate {
    firstName?: string,
    middleName?: string,
    secondName?: string,
    cityId?: number,
    street?: string,
    apartment?: string,
    building?: string,
    floor?: number,
    index?: string

}