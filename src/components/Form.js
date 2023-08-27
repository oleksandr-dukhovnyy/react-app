import { useState, useContext } from 'react';
import { AlertContext } from '../Context/alert/alertContext.js';
import { FirebaseContext } from '../Context/Firebase/firebaseContext.js';
import { PointPicker } from './PointPicker.js';

export const Form = () => {
  const [value, setValue] = useState('');
  const [picked, setPicked] = useState(null);
  const [showPointerPicker, setShowPointerPicker] = useState(false);
  const alert = useContext(AlertContext);
  const { addNote } = useContext(FirebaseContext);

  const createNote = async (e) => {
    e.preventDefault();

    if (value.trim()) {
      addNote(value.trim(), picked)
        .then(() => {
          alert.success('Note created successfully!');
          setValue('');
          setPicked(null);
        })
        .catch(() => {
          alert.danger('Something went wrong...');
        });
    } else {
      alert.warning('Enter note text!');
    }
  };

  const onPicked = (point) => {
    setShowPointerPicker(false);
    setPicked(point);
  };

  return (
    <div>
      <div
        className="form-group d-flex"
        style={{
          gap: '0.5rem',
          width: '79%',
          margin: '0 auto',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            className="form-control notes-input"
            placeholder="Type location here..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button
            onClick={createNote}
            type="submit"
            className="btn btn-success"
          >
            Create
          </button>
        </div>

        {picked ? (
          <div
            style={{
              width: '287.08px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              margin: '0 auto',
            }}
            onClick={setShowPointerPicker.bind(null, true)}
          >
            <svg
              style={{
                width: '20px',
                height: '20px',
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
            </svg>
            <span
              style={{
                fontSize: '14px',
              }}
            >
              {picked.lat.toFixed(3)}, {picked.lng.toFixed(3)}
            </span>
          </div>
        ) : (
          value && (
            <button
              className="btn btn-primary animate__animated animate__fadeIn animate__faster"
              style={{
                width: '215.31px',
                margin: '0 auto',
              }}
              onClick={setShowPointerPicker.bind(null, true)}
            >
              Add coordinates
            </button>
          )
        )}
      </div>
      {showPointerPicker && (
        <PointPicker
          picked={onPicked}
          hide={setShowPointerPicker.bind(null, false)}
        />
      )}
    </div>
  );
};
