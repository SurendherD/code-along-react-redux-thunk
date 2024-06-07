import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './userActions';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        users: [],
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = '';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;
