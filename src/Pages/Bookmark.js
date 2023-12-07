import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Quote from '../Components/Quote'
import { bookmarkActions } from '../Store/bookmark-slice'
import './Bookmarks.css'

function Bookmark() {
  const items = useSelector((state) => state.bookmark.items)
  //   console.log(items)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(bookmarkActions.removeQuote(id))
  }

  return (
    <div className='bookmarks'>
      {!items.length && <h3 className='msg'>No Bookmark Item Found!</h3>}
      {items &&
        items.map((item) => {
          return (
            <Quote
              quote={item}
              btnName='Remove'
              handleBtn={() => handleRemove(item._id)}
              key={item._id}
            />
          )
        })}
    </div>
  )
}

export default Bookmark
