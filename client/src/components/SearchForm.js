import {useState} from 'react'

const SearchForm = () => {
    
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search);

        setSearch('')
    }

  return (
    <div className='post-form mb-3'>
        <form onSubmit={handleSubmit} autoComplete='off' noValidate>
            <input onChange={(e) => setSearch(e.target.value)} className='auth-input' type="text" name="search" value={search} placeholder='Search Memories' required/>
            <button className='search-btn' type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchForm