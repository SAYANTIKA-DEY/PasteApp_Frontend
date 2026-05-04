import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const newPaste = action.payload;
      state.pastes.push(newPaste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast("Paste Created Successfully");
    },
    updateToPastes: (state, action) => {
      const newPaste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === newPaste._id);
      if(index >= 0){
        state.pastes[index] = newPaste;
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast("Paste Updated successfully");
      }
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      console.log(pasteId);
      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if(index >= 0){
        state.pastes.splice(index, 1);
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast("Paste Deleted successfully");
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem('pastes');
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes } = pasteSlice.actions

export default pasteSlice.reducer