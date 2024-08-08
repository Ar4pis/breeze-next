'use client'
import { createContext, useState, ReactNode, useEffect } from 'react';

const WaypointsContext = createContext();

export const WaypointsProvider = ({ children }) => {
  const [waypoints, setWaypoints] = useState([]);
  const [startingPoint, setStartingPoint] = useState(0);

  const addWaypoint = (waypoint) => {
    setWaypoints((prevWaypoints) => [...prevWaypoints, waypoint]);
  };

  const removeWaypoint = (waypointId) => {
    setWaypoints((prevWaypoints) => prevWaypoints.filter(waypoint => waypoint.id !== waypointId));
  };

  const deleteWaypoints = () => {
    setWaypoints([]);
  };

  const resetStartingPoint = (waypointId) => {
    if (waypointId === startingPoint) {
      setStartingPoint(0)
    }
  };

  return (
    <WaypointsContext.Provider value={{ waypoints, addWaypoint, removeWaypoint, deleteWaypoints, startingPoint, setStartingPoint, resetStartingPoint }}>
      {children}
    </WaypointsContext.Provider>
  );
};

export default WaypointsContext;