import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IInitialType } from "./type";
import { apiGetCaracters, apiGetCharacterById } from "./apiCalls";

const initialState: IInitialType = {
  characters: [],
  favourites: [],
  selectedCharacter: {
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  },
  pagination: {
    next: "",
    prev: "",
  },
  searchValue: "",
  loading: false,
  error: false,
};

export const getCharacters = createAsyncThunk(
  "/characters",
  async (name: string) => {
    const response = await apiGetCaracters(name);
    return response;
  }
);

export const getPagination = createAsyncThunk(
  "/pagination",
  async (url: string) => {
    const response = await fetch(url);
    const parseRes = await response.json();
    return parseRes;
  }
);

export const getCharacterById = createAsyncThunk(
  "/character",
  async (id: number) => {
    const response = await apiGetCharacterById(id);
    return response;
  }
);

const personajesSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    actionSearch: (state, action) => {
      console.log({ action });
      state.searchValue = action.payload;
    },
    actionClearSearch: (state) => {
      state.searchValue = "";
    },
    actionFavourites: (state, action) => {
      if (state.favourites.find((item) => item.id === action.payload.id)) {
        state.favourites = state.favourites.filter(
          (fav) => fav.id !== action.payload.id
        );
      } else {
        state.favourites.push(action.payload);
      }
    },
    actionDeleteFavourites: (state) => {
      state.favourites = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.results;
        state.pagination.prev = action.payload.info.prev;
        state.pagination.next = action.payload.info.next;
      })
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharacters.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getPagination.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.results;
        state.pagination.prev = action.payload.info.prev;
        state.pagination.next = action.payload.info.next;
      })
      .addCase(getPagination.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPagination.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getCharacterById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCharacter = action.payload;
      })
      .addCase(getCharacterById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharacterById.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { actionSearch, actionClearSearch, actionFavourites, actionDeleteFavourites } =
  personajesSlice.actions;
export default personajesSlice.reducer;
