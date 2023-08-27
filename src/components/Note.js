export const Note = ({
  position,
  title,
  id,
  date,
  animationName = 'fadeIn',
  //

  showAtMap,
  removeItem,
  getDate,
}) => (
  <li
    className={`list-group-item note-item animate__animated animate__${animationName} animate__faster`}
  >
    <strong
      style={{
        margin: 'auto 0',
        gridArea: 'title',
        // color: '#198754',
        // fontSize: '18px',
        // fontWeight: 400,
      }}
    >
      {title}
    </strong>

    <span className="note-item__period">01.01.2025 - 31.01.2025</span>

    <div className="note-item__notes">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M6.41421 15.89L16.5563 5.74786L15.1421 4.33365L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6474L14.435 2.21233C14.8256 1.8218 15.4587 1.8218 15.8492 2.21233L18.6777 5.04075C19.0682 5.43128 19.0682 6.06444 18.6777 6.45497L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
      </svg>
      <span>...</span>
    </div>

    {position ? (
      <div
        className="note-item__location"
        onClick={showAtMap.bind(null, position)}
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
          {position.lat.toFixed(3)}, {position.lng.toFixed(3)}
        </span>
      </div>
    ) : (
      <span style={{ gridArea: 'location' }}></span>
    )}
    <small
      className="text-muted"
      style={{
        gridArea: 'created-at',
        fontSize: '12px',
      }}
    >
      {getDate(date)}
    </small>

    <svg
      onClick={removeItem.bind(null, id)}
      className="note-item__remove"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="#f00"
        d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
      ></path>
    </svg>
  </li>
);
