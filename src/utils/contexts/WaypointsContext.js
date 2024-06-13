'use client'
import { createContext, useState, ReactNode, useEffect } from 'react';

const WaypointsContext = createContext();

export const WaypointsProvider = ({ children }) => {
  const [waypoints, setWaypoints] = useState([]);

  const addWaypoint = (waypoint) => {
    setWaypoints((prevWaypoints) => [...prevWaypoints, waypoint]);
  };

  const removeWaypoint = (waypointId) => {
    setWaypoints((prevWaypoints) => prevWaypoints.filter(waypoint => waypoint.id !== waypointId));
  };

  const deleteWaypoints = () => {
    setWaypoints([]);
  };

  return (
    <WaypointsContext.Provider value={{ waypoints, addWaypoint, removeWaypoint, deleteWaypoints }}>
      {children}
    </WaypointsContext.Provider>
  );
};

export default WaypointsContext;