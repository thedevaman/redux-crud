import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({

    name:'customer',
    initialState:null,
    reducers:{
        createCustomer:()=>{
            return {
                name:'saurav'
            }
        }

    }

})