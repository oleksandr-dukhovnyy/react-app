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

export const Notes = ({ notes, removeItem, showAtMap }) => (
  <ul className="list-group mt-3" style={{ overflow: 'hidden' }}>
    {notes.length === 0 && <p>Notes list currently an empty</p>}
    {notes.map(({ position, title, id, date, animationName = 'fadeIn' }) => (
      <li
        className={`list-group-item note-item animate__animated animate__${animationName} animate__faster`}
        key={id}
      >
        <strong>{title}</strong>

        <div>
          {position && (
            <div
              style={{
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
              onClick={showAtMap.bind(null, position)}
            >
              <svg
                style={{
                  width: '24px',
                  height: '24px',
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
              </svg>
              <span>
                {position.lat.toFixed(3)}, {position.lng.toFixed(3)}
              </span>
            </div>
          )}
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
