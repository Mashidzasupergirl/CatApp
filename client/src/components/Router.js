import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage';
import AllCatsPage from './AllCatsPage';


function Router(props) {
    const [cats, setCats] = React.useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleFetch = () => {
        setIsLoading(true);
        fetch('/api/allcats/')
            .then(result => result.json())
            .then(result => {
                setCats(result);
                setIsLoading(false)
            })
            .catch(() => {
                setErrorMessage("Unable to fetch cats");
                setIsLoading(false);
            });
    };
    return (
        <BrowserRouter>
            <ul id='nav-list'>
                <li><Link to='/home'>home</Link></li>
                <li><Link to='/allcats' disabled={props.isLoading}> All cats</Link></li>
            </ul>
            <Routes>
                <Route path='/home' element={
                    <HomePage
                    />
                } />
                <Route path='/allcats' element={
                    <AllCatsPage
                        handleFetch={handleFetch}
                        cats={cats}
                        isLoading={isLoading}
                        errorMessage={errorMessage} />
                } />

            </Routes>
        </BrowserRouter>
    )
}

export default Router