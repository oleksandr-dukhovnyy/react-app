import { useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../Context/Firebase/firebaseContext';
import { Loader } from '../components/Loader';

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } =
    useContext(FirebaseContext);

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
          <Notes notes={notes} removeItem={removeNotesItem} />
        )}
      </div>
    </div>
  );
};
