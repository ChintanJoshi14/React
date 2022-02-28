import { createSlice } from "@reduxjs/toolkit";


const initialCardState = {
    cardVisibility: false
}
const onHoverSlice = createSlice({
    name: "hover",
    initialState: initialCardState,

    reducers: {
        showCard(state) {
            state.cardVisibility = true;

        },
        hideCard(state) {
            state.cardVisibility = false;

        }
    }
})

export const hoverController = onHoverSlice.actions;
export default onHoverSlice.reducer;
