import React from 'react';
import { Navbar } from '../../ui/components/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MarvelPage } from "../pages/MarvelPage";
import { DcPage } from "../pages/DcPage";
import { HeroePage } from '../pages/HeroePage';
import { Search } from '../pages/Search';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />

                    <Route path='search' element={<Search />} />
                    <Route path='hero/:id' element={<HeroePage />} />

                    <Route path='/' element={<Navigate to="/marvel" />} />
                </Routes>
            </div>

        </>
    )
}
