import React, { createContext, useState, useEffect, use } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('client1');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [location, setLocation] = useState(() => {
    const storedLocation = localStorage.getItem('location');
    return storedLocation ? JSON.parse(storedLocation) : null;
  });

  const [security, setSecurity] = useState(() => {
    const storedSecurity = localStorage.getItem('security') || 'LOW';
    return storedSecurity ?storedSecurity : null;
  });

  useEffect(() => {
    if (security) {
      localStorage.setItem('security',security);
    } else {
      localStorage.removeItem('security');
    }
  }, [security]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('client1', JSON.stringify(user));
    } else {
      localStorage.removeItem('client1');
    }
  }, [user]);

  useEffect(() => {
    if (location) {
      localStorage.setItem('location', JSON.stringify(location));
    } else {
      localStorage.removeItem('location');
    }
  }, [location]);

  return (
    <UserContext.Provider value={{ user, setUser, location, setLocation, security, setSecurity }}>
      {children}
    </UserContext.Provider>
  );
};