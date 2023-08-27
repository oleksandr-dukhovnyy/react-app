import React, { useReducer } from 'react';
import { AlertContext } from './alertContext';
import { alertReducer } from './AlertReducer';
import { HIDE_ALERT, SHOW_ALERT } from '../types';

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  const show = (text, type = 'warning') => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        text,
        type,
      },
    });
  };

  const hide = () => {
    dispatch({
      type: HIDE_ALERT,
    });
  };

  const warning = (text) => show(text, 'warning');
  const success = (text) => show(text, 'success');
  const info = (text) => show(text, 'info');
  const danger = (text) => show(text, 'danger');

  return (
    <AlertContext.Provider
      value={{ show, success, warning, info, danger, hide, alert: state }}
    >
      {children}
    </AlertContext.Provider>
  );
};
