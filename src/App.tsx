import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Landing from './routes/Landing';
import { Navbar } from './components/Navbar';
import '@fontsource/inter';
import { Footer } from './components/Footer';

const App = () => (
    <ChakraProvider>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </ChakraProvider>
);
export default App;
