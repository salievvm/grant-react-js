import React from 'react'

export default () => {
  return (
    <div className="slim-footer">
      <div className="container">
        <p>Copyright {(new Date()).getFullYear()} &copy; Все права защищены.</p>
        <p>При поддержке: <a target="_blank" href="https://ustudy.kz" rel="noopener noreferrer">UStudy</a></p>
      </div>
    </div>
  )
}
