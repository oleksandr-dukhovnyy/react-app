import { ADD_NOTE, REMOVE_NOTE, SET_NOTES, SET_LOADER } from '../types';

const handlers = {
  [SET_LOADER]: (state, { payload = true }) => ({ ...state, loading: payload }),
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload],
  }),
  [SET_NOTES]: (state, { payload }) => ({ ...state, notes: payload }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter(({ id }) => id !== payload),
  }),
  DEFAULT: (state) => state,
};

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;

  return handle(state, action);
};
