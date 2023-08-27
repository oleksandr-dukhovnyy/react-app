import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

function LocationMarker({ marker, setMarker }) {
  useMapEvents({
    click: (e) => setMarker(e.latlng),
  });

  return marker === null ? null : <Marker position={marker}></Marker>;
}

export const PointPicker = ({ hide, picked }) => {
  const position = [50.4, 30.5];
  const [marker, setMarker] = useState(null);

  const onBackgroundClicked = (e) => {
    if (e.target.getAttribute('data-close') === 'true') {
      hide();
    }
  };

  const onPicked = () => {
    if (marker !== null) {
      picked(marker);
    } else {
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
        center={position}
        zoom={6}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker marker={marker} setMarker={setMarker} />
      </MapContainer>
      <button
        className={`btn ${marker !== null ? 'btn-primary' : 'btn-primary'}`}
        onClick={onPicked}
      >
        {marker !== null ? 'Set marker' : 'Close'}
      </button>
    </div>
  );
};
