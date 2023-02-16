// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="main-heading">Alert Notifications</h1>
        <div className="card-container">
          <Notification>
            <AiFillCheckCircle className="icon success" />
            <div className="content">
              <h1 className="heading">Success</h1>
              <p className="description">
                You can access all the files in the folder
              </p>
            </div>
          </Notification>
        </div>
        <div className="card-container">
          <Notification>
            <RiErrorWarningFill className="icon error" />
            <div className="content">
              <h1 className="heading error">Error</h1>
              <p className="description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </Notification>
        </div>
        <div className="card-container">
          <Notification>
            <MdWarning className="icon yellow" />
            <div className="content">
              <h1 className="heading yellow">Warning</h1>
              <p className="description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </Notification>
        </div>
        <div className="card-container">
          <Notification>
            <MdInfo className="icon info" />
            <div className="content">
              <h1 className="heading info">Info</h1>
              <p className="description">
                Anyone on the internet can view these files
              </p>
            </div>
          </Notification>
        </div>
      </div>
    )
  }
}

export default AlertNotifications
