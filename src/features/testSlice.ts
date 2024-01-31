import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//TODO : REDUCER
interface TestState{
    name:string|null;
}

const initialState:TestState = {
    name:null,
};

const testSlice = createSlice({
    name:'Cengiz',
    initialState,
    reducers:{
        setUserName:(state, action:PayloadAction<string>)=>{
            state.name = action.payload
        }
    }
})


export const {setUserName} = testSlice.actions;
export default testSlice.reducer;