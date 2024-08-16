import '../../design/Global.scss'

export default function Pagination({ handlePreviousPage, handleNextPage, isPreviousDisabled, isNextDisabled, page, last_page }) {
    return(
        <div className='pagination'>
            <button 
                onClick={handlePreviousPage} 
                disabled={isPreviousDisabled}
            >
                Previous
            </button>
            <div>{page} of {last_page}</div>
            <button 
                onClick={handleNextPage} 
                disabled={isNextDisabled}
            >
                Next
            </button>
        </div>
    );
}