import './progress-pagination.css'

export default function ProgressPagination({status, handlePreviousClick, handleNextClick}) {
  return (
    <section className='button-section'>
      {status === 1 && <button onClick={handlePreviousClick} className='btn pre-btn first-step'></button>
      }
      {status > 1 && <button onClick={handlePreviousClick} className='btn pre-btn'></button>
      }
      {status === 3 && <button onClick={handleNextClick} className='btn next-btn last-step'></button>
      }
      {status < 3 && <button onClick={handleNextClick} className='btn next-btn'></button>
      }
    </section>    
  )
}