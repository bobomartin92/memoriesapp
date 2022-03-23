
const Pagination = ({page: {postsPerPage, setCurrentPage}, totalPages, cp}) => {

    const pageNumbers = []

    for(let i=1; i<=Math.ceil(totalPages/postsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
        <nav className="shadow-lg p-3 bg-white">
            <ul className="flex">
               {pageNumbers.map(num => (
                   <li onClick={() => setCurrentPage(num)} key={num} className={`px-2 py-1 mr-2 text-sm border-2 rounded-full cursor-pointer ${cp === num && 'bg-gray-200'}`}>{num}</li>
               ))}
            </ul>
        </nav>
    
  )
}

export default Pagination