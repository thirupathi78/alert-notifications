// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification">
      <div className="children">{children}</div>

      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
