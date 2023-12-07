import React, { useEffect, useState } from 'react'
import Quote from '../Components/Quote'
import SeletctOption from '../Components/SeletctOption'
import { useDispatch } from 'react-redux'
import { bookmarkActions } from '../Store/bookmark-slice'
import './HomePage.css'

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function HomePage() {
  const [tag, setTag] = useState('select')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [quote, setQuote] = useState()
  const [nextQuote, setNextQuote] = useState(1)

  let URL = 'https://api.quotable.io/quotes/random'

  if (tag !== 'select') {
    URL = `https://api.quotable.io/quotes?tags=${tag}`
  }

  useEffect(() => {
    async function fetchQuote() {
      setLoading(true)
      setError(false)
      const response = await fetch(URL)
      //   console.log('####', response)

      if (!response.ok) {
        setError('Fetching Quotes failed.')
      } else {
        let resData = await response.json()
        let len = 0
        if (tag !== 'select') {
          resData = resData.results
          len = resData.length
          if (len === 0) setError('No quote found with given tag :(')
          len = getRandomInt(0, len - 1)
        }
        // console.log(resData)
        setQuote(resData[len])
      }
      setLoading(false)
    }

    try {
      fetchQuote()
    } catch (err) {
      setError('Some error occur, open console')
      console.log(err)
    }
  }, [nextQuote, URL, tag])

  const handleClick = () => {
    setNextQuote((prev) => {
      return 1 - prev
    })
  }

  //   console.log(quote, error)

  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(
      bookmarkActions.addQuote({
        _id: quote._id,
        content: quote.content,
        author: quote.author,
      })
    )
  }

  return (
    <>
      {loading && <h3 className='msg'>loading please wait...</h3>}
      {error && <h3 className='msg'>{error}</h3>}
      {!loading && (
        <div className='homePageElements'>
          <Quote quote={quote} handleBtn={handleAdd} btnName='Add' />
          <SeletctOption nextQuote={nextQuote} setTag={setTag} tag={tag} />
          <button className='nextBtn' onClick={handleClick}>
            Next Quote
          </button>
        </div>
      )}
    </>
  )
}

export default HomePage

/*
'https://api.quotable.io/quotes/random'

https://api.quotable.io/tags

https://api.quotable.io/quotes?tags=faith

*/
