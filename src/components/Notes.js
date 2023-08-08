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

export const Notes = ({ notes, removeItem }) => (
  <ul className="list-group mt-3" style={{ overflow: 'hidden' }}>
    {notes.length === 0 && <p>Notes list currently an empty</p>}
    {notes.map(({ title, id, date, animationName = 'fadeIn' }) => (
      <li
        className={`list-group-item note-item animate__animated animate__${animationName} animate__faster`}
        key={id}
      >
        <strong>{title}</strong>
        <div>
          <small className="text-muted">{getDate(date)}</small>
          <button
            onClick={removeItem.bind(null, id)}
            type="button"
            className="btn btn-sm btn-outline-danger"
          >
            &times;
          </button>
        </div>
      </li>
    ))}
  </ul>
);
