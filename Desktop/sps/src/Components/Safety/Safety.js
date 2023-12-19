import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';
import './safety.css';
import ComplaintView from '../../Screen/ComplaintView';
import io from "socket.io-client";
import axios from 'axios';

const MapContainer = (props) => {
  const [alertMessage, setAlertMessage] = useState(null);
  const [equipmentDatas,setEquipmentData]=useState();
  const [userData, setUserData] = useState([]);

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  const calculateDistance = (point1, point2) => {
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

  const checkDangerZone = (point) => {
    // console.log(point);
    const dangerZoneCoordinates = [
      { lat: 37.7749, lng: -122.4194, name: 'Danger Zone 1' },
      { lat: 37.75, lng: -122.40, name: 'Danger Zone 2' },
      { lat: 37.78, lng: -122.41, name: 'Danger Zone 3' },
      { lat: 37.76, lng: -122.42, name: 'Danger Zone 4' },
    ];

    const dangerZoneRadius = 60; // Radius in meters

    for (let i = 0; i < dangerZoneCoordinates.length; i++) {
      const distance = calculateDistance(point, dangerZoneCoordinates[i]);
      if (distance <= dangerZoneRadius) {
        return dangerZoneCoordinates[i].name;
      }
    }
    return null;
  };

  const[Dzones,setdzones]=useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/danger/dangerzones").then((res)=>{
      setdzones(res.data)
      console.log("danger zones ",res.data);
    }).catch((e)=>{

    })


    axios.get("http://localhost:8000/l/userlatlon")
      .then((response) => {
        const responseData = response.data.data; // Accessing the array within the 'data' property
        // console.log(responseData); // Check the structure of responseData
  
        const alertMessages = {};
  
        responseData.forEach(user => {
          const userCoordinates = {
            lat: parseFloat(user.Data.lat),
            lng: parseFloat(user.Data.lon),
          };
  
          const dangerZone = checkDangerZone(userCoordinates);
  
          if (dangerZone) {
            alertMessages[user.Data.username] = dangerZone;
          }
        });
  
        setAlertMessage(alertMessages);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  

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
  ];

  const dangerZoneCoordinates = [
    { lat: 37.7749, lng: -122.4194, name: 'Danger Zone 1' },
    { lat: 37.75, lng: -122.40, name: 'Danger Zone 2' },
    { lat: 37.78, lng: -122.41, name: 'Danger Zone 3' },
    { lat: 37.76, lng: -122.42, name: 'Danger Zone 4' },
  ];

  // const stringToCoordinate1 = {
  //   'nearPoint1': { lat: 37.7748, lng: -122.4195 },
  //   'nearPoint2': { lat: 37.7551, lng: -122.4052 },
  //   'nearPoint3': { lat: 37.7822, lng: -122.4086 },
  //   'nearPoint4': { lat: 37.7637, lng: -122.4284 },
  //   'nearPoint5': { lat: 37.7747, lng: -122.4196 },
  //   // Add more points to check as needed
  // };
  console.log(Dzones);
  return (
    <div className=' h-screen overflow-clip'>
      <div class='flex flex-row justify-between items-center lightgreen green px-5 py-4 rounded-md shadow-md mx-6 mt-4'>
        <h2 class='font-semibold poppins text-2xl lightgreen text-white'>Safety</h2>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='pl-10 mr-5 pt-8'>
        <Map
          google={props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{
            lat: 26.1113515,
            lng: 91.7228091,
          }}
          disableDefaultUI={true}
          styles={customMapStyles}
        >
      {Dzones.map((coords, index) => (
              <Marker
                key={index}
                position={{ lat: parseFloat(coords.lat), lng: parseFloat(coords.lon) }}
                title={coords.name}
                icon={{
                  url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                  scaledSize: new props.google.maps.Size(40, 40),
                }}
              />
            ))}
            {Dzones.map((coords, index) => (
              <Circle
                key={index}
                center={{ lat: parseFloat(coords.lat), lng: parseFloat(coords.lon) }}

                radius={15}
                options={{
                  strokeColor: '#FF0000', 
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: '#FF0000', // Red fill color
                  fillOpacity: 0.35,
                }}
              />
            ))}
        </Map>
        </div>
        <div className='height chatbox mr-5 ml-7 mt-8 mainscroll'>
          <ComplaintView />
          <div className="p-4">
            <h3 className="text-white text-xl font-bold">Chat Box</h3>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      </div>
      
      {alertMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg text-center">
          <h3 className="text-lg font-bold mb-4">Alert </h3>
          <ul className="list-none p-0">
            {Object.keys(alertMessage).map((key) => (
              <li key={key} className="mb-2 poppins">
                <span className='text-black text-xl font-medium mr-1'>Labour:</span>
                <span className='text-gray-400 font-medium text-xl mr-2'>{key}</span>
                <span className='text-black text-xl font-medium mr-1'>Location:</span> {alertMessage[key]}
              </li>
            ))}
          </ul>
          <button
            onClick={handleCloseAlert}
            className="px-4 py-2 mt-4 bg-green-500 text-white rounded cursor-pointer"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAB13MDC_I3zxfpkemlsd9aPs-OVtIV2zs',
})(MapContainer);