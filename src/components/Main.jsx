import './pagination.css'

export default function Main({currentPage, totalPages, onPageChange}) {

    const generateNoOfPages = () => {
        const pages = []
        for(let i = 1; i <= totalPages; i++)
            pages.push(<button className={`pagination-number-btn ${currentPage === i ? 'active' : ''}`} key={i} onClick={() => onPageChange(i)}>{i}</button>)

        return pages
    }

    return(
        <div className="pagination-container">
            <button className="pagination-btn" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
            {generateNoOfPages()}
            <button className="pagination-btn" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
    )
}