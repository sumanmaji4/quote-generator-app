import React, { useState, useEffect } from 'react'
import './SelectOption.css'

function SeletctOption({ tag, setTag }) {
  const [tags, setTags] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTags() {
      setLoading(true)
      const response = await fetch('https://api.quotable.io/tags')

      if (!response.ok) {
        setError('Fetching Tags failed.')
      } else {
        const resData = await response.json()
        setTags(resData)
      }
      setLoading(false)
    }

    fetchTags()

    try {
      fetchTags()
    } catch (err) {
      setError('Some error occur, open console')
      console.log(err)
    }
  }, [])

  return (
    <>
      {loading && <h3 className='msg'>loading tags..</h3>}
      {error && <h3 className='msg'>{error}</h3>}
      {!error && !loading && (
        <div className='selectOptions'>
          <select
            name='QuoteTag'
            id='QuoteTag'
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            size='5'
          >
            {tags.map((item) => {
              return (
                <option value={item.slug} key={item._id}>
                  {item.slug}
                </option>
              )
            })}
          </select>
        </div>
      )}
    </>
  )
}

export default SeletctOption

/*



*/
