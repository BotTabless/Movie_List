const Pagination = ({ page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => {
            const newPage = prevState - 1;
            return newPage >= 1 ? newPage : 1;
        });
        scrollTop();
    }

    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            <button onClick={handlePrevPage} className="transition-all hover:text-color-accent" style={{ display: page === 1 ? 'none' : 'block' }}>Prev</button>
            <p>{page} of {lastPage}</p>
            <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
        </div>
    )
}

export default Pagination