import { useState, useContext } from 'react';
import { AlertContext } from '../Context/alert/alertContext.js';
import { FirebaseContext } from '../Context/Firebase/firebaseContext.js';

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const { addNote } = useContext(FirebaseContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (value.trim()) {
      addNote(value.trim())
        .then(() => {
          alert.show('Note created successfully!', 'success');
          setValue('');
        })
        .catch(() => {
          alert.show('Something went wrong...', 'danger');
        });
    } else {
      alert.show('Enter note text!', 'warning');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group d-flex" style={{ gap: '0.5rem' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Type note here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>
    </form>
  );
};
