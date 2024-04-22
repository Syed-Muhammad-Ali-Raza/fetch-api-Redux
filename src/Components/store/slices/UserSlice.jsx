import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice(
    {

        name: "user",
        initialState: [],
        reducers: {
            adduser(state, action) {
                state.push(action.payload)

            },
            removeuser(state, action) {

                console.log(action.payload)
                    state.splice(action.payload , 1)



             }
        }
    }
);

console.log(userSlice.actions)

export default userSlice.reducer;
export const {adduser , removeuser} = userSlice.actions;
