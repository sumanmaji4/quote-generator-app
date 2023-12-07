import React, { useState } from 'react'
import './Quote.css'

function Quote({ quote, handleBtn, btnName }) {
  const [mybtn, setMybtn] = useState(btnName)

  const onClickHandler = () => {
    if (mybtn === 'Add') {
      setMybtn('Quote Added')
    }
    handleBtn()
  }

  return (
    <>
      {!quote && <h3 className='msg'> Please Try Again or Reload the Page</h3>}
      {quote && (
        <div className='quotebody'>
          <p>{quote.content}</p>
          <p> - {quote.author}</p>
          <button
            className='addBtn'
            onClick={onClickHandler}
            disabled={mybtn === 'Quote Added'}
          >
            {mybtn}
          </button>
        </div>
      )}
    </>
  )
}

export default Quote
