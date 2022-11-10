import React from 'react'

export default function Pagination(props) {
    const nPages = props.nPages;
    const currentPage = props.currentPage;
    const setCurrentPage = props.setCurrentPage;
    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <div className="page-link"
                        onClick={prevPage} >
                        Previous
                    </div>
                </li>
                <li>{currentPage}</li>
                <li className="page-item">
                    <div className="page-link"
                        onClick={nextPage}>
                        Next</div>
                </li>
            </ul>
        </nav>
    )
}
