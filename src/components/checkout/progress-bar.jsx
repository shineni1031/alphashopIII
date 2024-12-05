import './progress-bar.css'

export default function ProgressBar({status}) {
  return (
    <>
    <section className='progress-bar'>
      <ShowBarSteps checked={status >= 2} progressText='寄送地址' />
      <ShowLine checked={status >= 2}/>
      <ShowBarSteps checked={status >= 3} progressText='運送方式' />
      <ShowLine checked={status >= 3}/>
      <ShowBarSteps checked={status >= 4} progressText='付款資訊' />
    </section>
    </>
  )  
}

function ShowBarSteps({checked, progressText}) {
  return (
    <>
    {checked ? (
      <div className='progress-item checked'><div className='progress-circle'></div><div>{progressText}</div></div>
    ) : (
    <div className='progress-item'><div className='progress-circle'></div>
      <div>{progressText}</div></div>
    )}
    </>
  )
  }

  function ShowLine({checked}) {
    return (
      <>
      {checked ? (<div className="connect-line-active"></div>) : (<div className="connect-line"></div>)}
      </>
    )
  }