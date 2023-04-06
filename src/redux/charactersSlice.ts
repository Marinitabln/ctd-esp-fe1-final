import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IInitialType } from "./type";

const initialState: IInitialType = {
  characters: [],
  loading: false,
  error: false,
};

export const getCharacters = createAsyncThunk(
  "characters",
  async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&limit=12`
    );
    const parseRes = await response.json();
    return parseRes;
  }
);

export const filterCharacters = createAsyncThunk(
  "character",
  async (name: string) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const parseRes = await response.json();
    return parseRes;
  }
);

const personajesSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    accion(state, action) { //PayloadAction<Personaje>
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.results;
      })
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharacters.rejected, (state) => {
        state.error = true;
      })
  },
});

export const { accion } = personajesSlice.actions;
export default personajesSlice.reducer;
