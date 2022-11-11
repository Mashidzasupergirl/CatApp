import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';
const { countryCodeEmoji } = require('country-code-emoji');

function AllCatsPage({ handleFetch, cats, isLoading, errorMessage }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const nPages = Math.ceil(cats.length / recordsPerPage)

    useEffect(() => {
        if (!cats.length) {
            handleFetch()
        }
    }, [])

    // console.log('cats is', cats)
    const currentPageCats = cats.slice(indexOfFirstRecord, indexOfLastRecord);

    const renderCatsCard = () => currentPageCats.map((cat, i) =>

        <div key={i} className="cats-cards">
            <img src={cat.image.url} alt={cat.name} />
            <p className='Name'>{cat.name}</p>
            <p className='origin'>{cat.origin} {countryCodeEmoji(cat.country_code)}</p>
            <p className='description'>{cat.description}</p>
            <div className='temperaments'>
                {cat.temperament.split(',').map(habit => <span>🌟 {habit} </span>)}
            </div>

        </div>
    )
    return (

        <><div className='all-cats-container'>

            <div className='cards-container'>
                {isLoading ? <LoadingSpinner /> : renderCatsCard()}
                {errorMessage && <div className="error">{errorMessage}</div>}
            </div>

            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </div>
            {/* <footer>footer</footer> */}
            </>
    )
}

export default AllCatsPage