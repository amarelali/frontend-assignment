import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axios.instance';
import Cookies from 'js-cookie';

interface IUser {
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string
}
interface IRegisterResponseError {
    data: null,
    error: {
        status: number,
        name: string,
        message: string,
        details: null
    }
}
export interface AuthState {
    jwt?: string,
    user?: IUser,
    error?: IRegisterResponseError
    isLoading: boolean,
    message?: string | undefined
}

const initialState: AuthState = {
    jwt: "",
    user: undefined,
    error: undefined,
    isLoading: false,
}

export const register = createAsyncThunk("auth/register", async ({ username, email, password }: { username: string, email: string, password: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const data: { data: { jwt: string, user: IUser } } = await axiosInstance.post('/auth/local/register', { username, email, password });
        Cookies.set('jwt', data.data.jwt);
        console.log("user registerFunction", data.data.user);
        return data.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})
export const logIn = createAsyncThunk("/auth/local", async ({ identifier, password }: { identifier: string, password: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const data: { data: { jwt: string, user: IUser } } = await axiosInstance.post('/auth/local', { identifier, password });
        Cookies.set('jwt', data.data.jwt);
        console.log("user logIn", data.data.user);
        return data.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state: AuthState) => {
            state.isLoading = true;
        })
            .addCase(register.fulfilled, (state: AuthState, action) => {
                console.log(`action.payload ${action.payload}`);
                state.jwt = action.payload.jwt;
                state.user = action.payload.user;
                state.isLoading = false;

            })
            .addCase(register.rejected, (state: AuthState, action) => {
                state.error = action.payload.message;
                state.isLoading = false;
            })
            .addCase(logIn.pending, (state: AuthState) => {
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state: AuthState, action) => {
                state.jwt = action.payload.jwt;
                state.user = action.payload.user;
                state.isLoading = false;

            })
            .addCase(logIn.rejected, (state: AuthState, action) => {
                state.error = action.payload.message;
                state.isLoading = false;
            })

    }

})

// Action creators are generated for each case reducer function
export const { } = authSlice.actions

export default authSlice.reducer