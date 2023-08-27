export const About = () => (
  <div
    className="jumbotron"
    style={{ backgroundColor: '#eee', padding: '2rem', borderRadius: '15px' }}
  >
    <div className="container">
      <p className="lead">
        <p>
          App version: <strong>1.0.42</strong>
        </p>
        <p>
          Maps:{' '}
          <a href="https://leafletjs.com/" target="_blank" rel="noreferrer">
            leafletjs
          </a>
        </p>
      </p>
    </div>
  </div>
);
