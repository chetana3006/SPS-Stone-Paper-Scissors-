import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';

class MapContainer extends Component {

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
      { lat: 37.7749, lng: -122.4194 }, // Replace with your danger zone coordinates
      { lat: 37.75, lng: -122.40 }, // Additional danger zone coordinates
      { lat: 37.78, lng: -122.41 }, // Additional danger zone coordinates
      { lat: 37.76, lng: -122.42 }, // Additional danger zone coordinates
    ];

    const dangerZoneRadius = 60; // Radius in meters
      console.log(
          `Point (${point.lat}, ${point.lng}) is within danger zone:`
        );
    for (let i = 0; i < dangerZoneCoordinates.length; i++) {
      const distance = this.calculateDistance(point, dangerZoneCoordinates[i]);
      console.log(distance)
      if (distance <= dangerZoneRadius) {
        return true;
      }
    }
    return false;
  };

   componentDidMount() {
    // Sample list of latitude and longitude points
    const pointsToCheck = [
      { lat: 37.775, lng: -122.42 }, // Replace these coordinates with your list
      { lat: 37.76, lng: -122.41 }, // Additional coordinates to check
      // Add more points to check as needed
    ];

    pointsToCheck.forEach((point) => {
        console.log(
          `Point (${point.lat}, ${point.lng}) is within danger zone: ${this.checkDangerZone(point)}`
        );
      if (this.checkDangerZone(point)) {
            
        alert('Point is within the danger zone!');
      }
    });
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

    const circleOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
    };

    return (
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
        <Circle
          center={{ lat: 38.0, lng: -122.0 }} // Example coordinates for a new circle
          radius={50} // Example radius for a new circle
          options={circleOptions} // Use the same circle options or customize as needed
        />
        <Circle
          center={{ lat: 37.5, lng: -122.8 }} // Another example coordinates for a new circle
          radius={70} // Another example radius for a new circle
          options={circleOptions} // Use the same circle options or customize as needed
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAB13MDC_I3zxfpkemlsd9aPs-OVtIV2zs',
})(MapContainer);
