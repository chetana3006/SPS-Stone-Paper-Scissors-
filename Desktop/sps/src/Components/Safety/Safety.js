import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alertMessage: null,
    };
  }

   calculateDistance = (point1, point2) => {
    const R = 6371e3; // Earth's radius in meters
    const lat1Rad = point1.lat * (Math.PI / 180);
    const lat2Rad = point2.lat * (Math.PI / 180);
    const deltaLat = (point2.lat - point1.lat) * (Math.PI / 180);
    const deltaLng = (point2.lng - point1.lng) * (Math.PI / 180);

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *
        Math.sin(deltaLng / 2) *
        Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance;
  };

  checkDangerZone = (point) => {
    const dangerZoneCoordinates = [
      { lat: 37.7749, lng: -122.4194, name: 'Danger Zone 1' },
      { lat: 37.75, lng: -122.40, name: 'Danger Zone 2' },
      { lat: 37.78, lng: -122.41, name: 'Danger Zone 3' },
      { lat: 37.76, lng: -122.42, name: 'Danger Zone 4' },
      // Add more danger zone coordinates with names as needed
    ];

    const dangerZoneRadius = 60; // Radius in meters
    

    for (let i = 0; i < dangerZoneCoordinates.length; i++) {
      const distance = this.calculateDistance(point, dangerZoneCoordinates[i]);
      if (distance <= dangerZoneRadius) {
        return dangerZoneCoordinates[i].name;
      }
    }
    return null;
  };

   componentDidMount() {
    // Sample list of latitude and longitude points
    const stringToCoordinate = {
      'nearPoint1': { lat: 37.7748, lng: -122.4195 },
      'nearPoint2': { lat: 37.7551, lng: -122.4052 },
      'nearPoint3': { lat: 37.7822, lng: -122.4086 },
      'nearPoint4': { lat: 37.7637, lng: -122.4284 },
      'nearPoint5': { lat: 37.7747, lng: -122.4196 },
      // Add more points to check as needed
    };
    const alertMessages = {};

    Object.keys(stringToCoordinate).forEach((key) => {
      const dangerZone = this.checkDangerZone(stringToCoordinate[key]);
      if (dangerZone) {
        alertMessages[key] = dangerZone;
      }
    });

    this.setState({ alertMessage: alertMessages });
  }
  render() {
    const mapStyles = {
      width: '60%',
      height: '500px',
    };

    const customMapStyles = [
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      // Add more styles as needed to hide specific labels or features
    ];

   

 

    const dangerZoneCoordinates = [
      { lat: 37.7749, lng: -122.4194 }, // Replace with coordinates for your danger zone
      { lat: 37.75, lng: -122.40 }, // Another danger zone coordinate example
      { lat: 37.78, lng: -122.41 }, // Additional coordinates for the danger zone
      { lat: 37.76, lng: -122.42 }, // Additional coordinates for the danger zone
    ];

    const stringToCoordinate = {
  'nearPoint1': { lat: 37.7748, lng: -122.4195 }, // Close to { lat: 37.7749, lng: -122.4194 }
  'nearPoint2': { lat: 37.7551, lng: -122.4052 }, // Close to { lat: 37.755, lng: -122.405 }
  'nearPoint3': { lat: 37.7822, lng: -122.4086 }, // Close to { lat: 37.782, lng: -122.408 }
  'nearPoint4': { lat: 37.7637, lng: -122.4284 }, // Close to { lat: 37.764, lng: -122.428 }
  'nearPoint5': { lat: 37.7747, lng: -122.4196 }, // Close to { lat: 37.7749, lng: -122.4194 }
  'nearPoint6': { lat: 37.7553, lng: -122.4053 }, // Close to { lat: 37.755, lng: -122.405 }
  'nearPoint7': { lat: 37.7823, lng: -122.4087 }, // Close to { lat: 37.782, lng: -122.408 }
  'nearPoint8': { lat: 37.7636, lng: -122.4285 }, // Close to { lat: 37.764, lng: -122.428 }
  'nearPoint9': { lat: 37.7748, lng: -122.4194 }, // Close to { lat: 37.7749, lng: -122.4194 }
  'nearPoint10': { lat: 37.7552, lng: -122.4055 }, // Close to { lat: 37.755, lng: -122.405 }
};

    const circleOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
    };

    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>
      <Map
        google={this.props.google}
        zoom={18} // Adjust the zoom level if markers are not visible
        style={mapStyles}
        initialCenter={{
          lat: 37.7749,
          lng: -122.4194,
        }}
        disableDefaultUI={true}
        styles={customMapStyles}
      >
        {dangerZoneCoordinates.map((coords, index) => (
          <Marker
            key={index}
            position={{ lat: coords.lat, lng: coords.lng }}
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
              scaledSize: new this.props.google.maps.Size(40, 40),
            }}
          />
        ))}
         {Object.keys(stringToCoordinate).map((key, index) => (
          <Marker
            key={index}
            position={stringToCoordinate[key]}
            title={key}
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
              scaledSize: new this.props.google.maps.Size(40, 40),
            }}
          />
        ))}
        
      </Map>
      </div>
      {this.state.alertMessage&&
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h3>Alert Messages</h3>
          <ul>
            {Object.keys(this.state.alertMessage).map((key) => (
              <li key={key}>
                Point: {key}, Danger Zone: {this.state.alertMessage[key]}
              </li>
            ))}
          </ul>
        </div>
  }
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAB13MDC_I3zxfpkemlsd9aPs-OVtIV2zs',
})(MapContainer);
