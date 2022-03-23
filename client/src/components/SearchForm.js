import {useState} from 'react'

const SearchForm = ({handleSearch}) => {
    
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(search){
          handleSearch(search.trim())
        }
        
        setSearch('')
    }

    const handleKeyPress = (e) => {
      if(e.keyCode === 13) {
        handleSubmit()
      }
    }

  return (
    <div className='post-form mb-3'>
        <form onSubmit={handleSubmit} autoComplete='off' noValidate>
            <input onKeyPress={handleKeyPress} onChange={(e) => setSearch(e.target.value)} className='auth-input' type="text" name="search" value={search} placeholder='Search Memories' required/>
            <button className='search-btn' type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchForm