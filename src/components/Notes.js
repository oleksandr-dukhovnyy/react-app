import { Note } from './Note';

const toTen = (n) => (+n < 10 ? '0' + n : n);
const getDate = (date) => {
  const d = new Date(date);

  const hh = toTen(d.getHours());
  const mm = toTen(d.getMinutes());
  const ss = toTen(d.getSeconds());

  const DD = toTen(d.getDate());
  const MM = toTen(d.getMonth() + 1);
  const YYYY = d.getFullYear();

  return `${DD}.${MM}.${YYYY} ${hh}:${mm}:${ss}`;
};

export const Notes = ({ notes, removeItem, showAtMap }) =>
  notes.length === 0 ? (
    <p>Notes list currently an empty</p>
  ) : (
    <ul
      className="list-group mt-3"
      style={{ overflow: 'hidden', borderBottom: '1px solid black' }}
    >
      <>
        <li className="list-group-item note-item header">
          <strong>Location name:</strong>
          <strong>Period:</strong>
          <strong
            style={{
              fontWeight: 400,
            }}
          >
            Notes:
          </strong>
          <strong>Coordinates:</strong>
          <strong>Created at:</strong>
          <span></span>
        </li>
        <li className="list-group-item note-item--line"></li>
        {notes.map(
          ({ position, title, id, date, animationName = 'fadeIn' }) => (
            <Note
              position={position}
              title={title}
              key={id}
              id={id}
              date={date}
              animationName={animationName}
              showAtMap={showAtMap}
              removeItem={removeItem}
              getDate={getDate}
            />
          )
        )}
      </>
    </ul>
  );
