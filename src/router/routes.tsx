import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { routeTypes } from '@/resources/routeTypes';
import List from '@/pages/List';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={routeTypes.LIST} element={<List />} />
      <Route path="/" element={<Navigate to={routeTypes.LIST} />} />
    </Routes>
  );
}

export default AppRoutes;
