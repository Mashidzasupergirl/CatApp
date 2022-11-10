import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';

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
        <div key={i} className="catsCard">
            <img src={cat.image.url} alt={cat.name} width='500vw' />
            <p>{cat.name}</p>
            </div>
    )
    return (

        <><div className='all-cats-container'>
            {isLoading ? <LoadingSpinner /> : renderCatsCard()}
            {errorMessage && <div className="error">{errorMessage}</div>}
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </div>
        <footer>footer</footer></>
    )
}

export default AllCatsPage