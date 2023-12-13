import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,Circle } from 'google-maps-react';
import './safety.css'
import ComplaintView from '../../Screen/ComplaintView';

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alertMessage: null,
    };
  }

   handleCloseAlert = () => {
    this.setState({ alertMessage: null });
  };

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
      height: '580px',
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
    { lat: 37.7749, lng: -122.4194, name: 'Danger Zone 1' }, // Include names for danger zones
    { lat: 37.75, lng: -122.40, name: 'Danger Zone 2' },
    { lat: 37.78, lng: -122.41, name: 'Danger Zone 3' },
    { lat: 37.76, lng: -122.42, name: 'Danger Zone 4' },
    // Add more danger zone coordinates with names as needed
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

 

    return (

      
    <div className=' h-screen overflow-clip'>
      <div className='flex w-full h-14 bglightgreen items-center px-10 '>
       <h2 className='text-white text-2xl font-medium'>Safety</h2>
      </div>
        <div className='flex flex-row justify-between'>
          <div className='pl-10 mr-5 pt-8'>
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
              title={coords.name} // Set title to the name of the danger zone
              icon={{
                url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                scaledSize: new this.props.google.maps.Size(40, 40),
              }}
            />
          ))}
        {dangerZoneCoordinates.map((coords, index) => (
              <Circle
                key={index}
                center={{ lat: coords.lat, lng: coords.lng }}
                radius={60} // Radius in meters
                options={{
                  strokeColor: '#FF0000', // Red color for the circle border
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: '#FF0000', // Red color for the circle fill
                  fillOpacity: 0.35,
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
          <div className=' height chatbox  mr-5 ml-7 mt-8'>
            {/* Add content or elements inside the chatbox */}
            {/* For example: */}
            <ComplaintView />
            <div className="p-4">
              <h3 className="text-white text-xl font-bold">Chat Box</h3>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              {/* Add more content as needed */}
            </div>
          </div>
        </div>
      
     
       {this.state.alertMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4">Alert </h3>
            <ul className="list-none p-0">
              {Object.keys(this.state.alertMessage).map((key) => (
                <li key={key} className="mb-2 poppins">
                  <span className='text-black text-xl font-medium mr-1'>Labour:</span><span className='text-gray-400 font-medium text-xl mr-2'>{key}</span><span className='text-black text-xl font-medium mr-1'>Location:</span> {this.state.alertMessage[key]}
                </li>
              ))}
            </ul>
            <button
              onClick={this.handleCloseAlert}
              className="px-4 py-2 mt-4 bg-green-500 text-white rounded cursor-pointer"
            >
              OK
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAB13MDC_I3zxfpkemlsd9aPs-OVtIV2zs',
})(MapContainer);
