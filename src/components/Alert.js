import { useContext } from 'react';
import { AlertContext } from '../Context/alert/alertContext';

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  const classes = ['animate__animated '];
  let timerID = null;

  if (alert.visible) {
    classes.push('animate__fadeInDown animate__faster');
  } else if (alert.visible === false) {
    classes.push('d-none');
  }

  if (alert.visible) {
    timerID = setTimeout(hide, 5000);
  }

  const hideAlert = () => {
    clearTimeout(timerID);
    hide();
  };

  return (
    <div
      className={`container alert alert-${
        alert.type || 'warning'
      } d-flex align-center justify-content-between ${classes.join(' ')}`}
    >
      <p className="d-flex align-center">
        <span>{alert.text}</span>
      </p>
      <button
        onClick={hideAlert}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      </button>
    </div>
  );
};
