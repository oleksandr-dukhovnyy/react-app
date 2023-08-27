import React, { useReducer } from 'react';
import { FirebaseContext } from './firebaseContext.js';
import { firebaseReducer } from './FirebaseReducer.js';
import Axios from 'axios';
import { ADD_NOTE, REMOVE_NOTE, SET_LOADER, SET_NOTES } from '../types.js';

const axios = Axios.create();
axios.defaults.headers.common['Content-Type'] = 'application/json';

const apiUrl =
  'https://react-app-c4403-default-rtdb.europe-west1.firebasedatabase.app';

export const FirebaseState = ({ children }) => {
  const [state, dispatch] = useReducer(firebaseReducer, {
    notes: [],
    loading: true,
  });

  const setLoader = (value) => dispatch({ type: SET_LOADER, payload: value });
  const loadble = (promise) => {
    setLoader(true);

    return promise.finally(() => {
      setLoader(false);
    });
  };

  const fetchNotes = () =>
    loadble(
      axios.get(`${apiUrl}/notes.json`).then((result) => {
        if (result.status === 200 && result.data !== null) {
          dispatch({
            type: SET_NOTES,
            payload: Object.keys(result.data).map((id) => ({
              ...result.data[id],
              id,
            })),
          });
        }
      })
    );

  const addNote = async (title, position) => {
    const note = { title, position, date: new Date().toISOString() };

    const res = await axios.post(`${apiUrl}/notes.json`, note);

    dispatch({
      type: ADD_NOTE,
      payload: {
        ...note,
        animationName: 'slideInRight',
        id: res.data.name,
      },
    });
  };

  const removeNote = (id) => {
    return axios
      .delete(`${apiUrl}/notes/${id}.json`)
      .then((res) => {
        if (res.status === 200)
          dispatch({
            type: REMOVE_NOTE,
            payload: id,
          });
      })
      .catch((err) => {
        console.error('err', err);
      });
  };

  return (
    <FirebaseContext.Provider
      value={{
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
