const Notification = props => {
  //  Write your code here.
  const {className, image, text} = props
  return (
    <button className={`btn ${className}`}>
      <div className='btnInner'>
        <img className='btnImg' src={image} />
        <p>{text}</p>
      </div>
    </button>
  )
}

const element = (
  //  Write your code here.
  <div>
    <h1>Notifications</h1>
    <div className='btnContainer'>
      <Notification
        className='blueBtn'
        image='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        text='Information Message'
      />
      <Notification
        className='greenBtn'
        image='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        text='Success Message'
      />
      <Notification
        className='yellowBtn'
        image='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        text='Warning Message'
      />
      <Notification
        className='redBtn'
        image='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        text='Error Message'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
