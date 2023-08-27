import { useContext, useEffect, useState } from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../Context/Firebase/firebaseContext';
import { Loader } from '../components/Loader';
import { ShowAtMap } from '../components/ShowAtMap';

export const Home = () => {
  const [showPosition, setShowPosition] = useState(null);
  const { loading, notes, fetchNotes, removeNote } =
    useContext(FirebaseContext);

  const hide = () => {
    setShowPosition(null);
  };

  useEffect(() => {
    if (notes.length === 0) {
      fetchNotes().catch((err) => {
        alert('Something went wrong...');

        console.log('Home.useEffect.fetchNotes error', err);
      });
    }

    // eslint-disable-next-line
  }, []);

  const removeNotesItem = (id) => {
    removeNote(id).catch((err) => {
      alert('Something went wrong...');

      console.log('Home.removeNotesItem error', err);
    });
  };

  return (
    <div>
      <Form />
      <div className="mt-3 mb-3 text-center">
        {loading ? (
          <Loader />
        ) : (
          <Notes
            notes={notes}
            removeItem={removeNotesItem}
            showAtMap={setShowPosition}
          />
        )}
      </div>
      {showPosition && <ShowAtMap marker={showPosition} hide={hide} />}
    </div>
  );
};
