import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export const ShowAtMap = ({ hide, marker }) => {
  const onBackgroundClicked = (e) => {
    if (e.target.getAttribute('data-close') === 'true') {
      hide();
    }
  };

  return (
    <div
      className="map animate__animated animate__fadeIn animate__faster"
      data-close
      onClick={onBackgroundClicked}
    >
      <MapContainer
        style={{ width: '90vw', height: '80vh', borderRadius: '15px' }}
        center={marker}
        zoom={6}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={marker} />
      </MapContainer>

      <button className="btn btn-primary" onClick={hide}>
        Close
      </button>
    </div>
  );
};
