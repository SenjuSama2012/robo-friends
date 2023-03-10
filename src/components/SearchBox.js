import React from 'react'

export const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <>
        <div className="pa2 tc">
            <input
                className="pa3 ba b--green bg-lightest-blue tc"
                type='search'
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    </>
  )
}

export default SearchBox