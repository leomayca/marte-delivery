import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { routeTypes } from '@/resources/routeTypes';
import Create from '@/pages/Create';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={routeTypes.LIST} element={<></>} />
            <Route path={routeTypes.CREATE} element={<Create />} />
            <Route path={routeTypes.EDIT} element={<></>} />
            <Route path="/" element={<Navigate to={routeTypes.LIST} />} />
        </Routes>
    );
}

export default AppRoutes;
