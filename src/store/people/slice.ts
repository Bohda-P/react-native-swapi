import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Actions
import { getPeople } from './actions';
// Types
import { People } from './types';

interface PeopleState {
  people: People;
  loading: boolean;
  error: unknown;
}

const initialState: PeopleState = {
  people: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  loading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    getPeopleSuccess: (state, action: PayloadAction<People>) => {
      state.people = {
        ...state.people,
        ...action.payload,
        results: [...state.people.results, ...action.payload.results].map((item) =>
          item.selected ? item : { ...item, selected: false }
        ),
      };
      state.loading = false;
    },
    getSelectedPeople: (state, action: PayloadAction<number>) => {
      state.people.results[action.payload].selected = !state.people.results[action.payload].selected
    },
    resetState: (state) => {
      state.people.results.map(item => item['selected'] = false)
    },
    getPeopleFailure: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPeople, (state) => {
      state.loading = true;
    });
  },
});

export const { getPeopleSuccess, getPeopleFailure, getSelectedPeople, resetState } = counterSlice.actions;

export const peopleReducer = counterSlice.reducer;
