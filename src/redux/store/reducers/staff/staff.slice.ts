import {createSlice} from "@reduxjs/toolkit";


interface IInitState {
    id: number | unknown,
    firstName: string,
    secondName: string,
    middleName: string,
    iin: string,
    position: string,
    date: string,
    phone: string,
    street: string,
    floor: number | null,
    cityId:number | null
    building: string,
    apartment: string,
    index: string


}


const initialState: IInitState = {
    id: null,
    firstName: '',
    secondName: '',
    middleName: '',
    iin: '',
    position: '',
    date: '',
    phone: '',
    street: '',
    floor: null,
    cityId:null,
    building: '',
    apartment: '',
    index: ''
}

const staffSlice = createSlice({
    name: 'staff/',
    initialState,
    reducers: {
        setOneStaff: (state, {payload}) => {
            state.id = payload.id
            state.position = payload.user.roles[0].value


        },
        setMoreInfoForOneStaff: (state, {payload}) => {
            state.firstName = payload?.firstName
            state.secondName = payload?.secondName
            state.middleName = payload?.middleName
            state.date = payload?.date
            state.iin = payload?.iin
            state.phone = payload?.user?.phone
            state.street = payload?.place?.street
            state.floor = payload?.place?.floor
            state.building = payload?.place?.building
            state.apartment = payload?.place?.apartment
            state.index = payload?.place?.index
            state.cityId = payload?.place?.city?.id


        },


    }
})

export const {setOneStaff,setMoreInfoForOneStaff} = staffSlice.actions

export default staffSlice.reducer