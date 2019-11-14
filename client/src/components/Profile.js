import React from "react"
import { useUsers } from "../hooks"
import Icon from '../lib/Icon'
import { Link } from 'react-router-dom'
import "../styles/base.css"


export default function Profile(props) {
  const { users, going, notGoing, isGoing, isNotGoing } = useUsers()

  console.log('users', users)

    function handleGoing(users){
        isGoing(users)
    }

    function handleNotGoing(users){
        isNotGoing(users)
    }

  return (
    <div>
        <div className="container1">
            <Link to={`/notGoing`}>Not Going: {notGoing.length}</Link>
            <Link to={`/going`}>Going: {going.length}</Link>
        </div>
        <div className="container">
            <div className="picture">
                <img className="thumbnail" src={users.picture.large} alt=""/>
            </div>
            <div>
                <hr/>
            </div>
            <div className="detail-cont">
                <div className="detail-line">
                    <div className="details"><strong>Name:</strong></div>
                    <div className="details">{users.name.first}</div>
                    <div className="details">{users.name.last}</div>
                </div>
                <div className="detail-line">
                    <div className="details"><strong>Phone:</strong></div>
                    <div className="details">{users.phone}</div>
                </div>
                <div className="detail-line">
                    <div className="details"><strong>Email:</strong></div>
                    <div className="details">{users.email}</div>
                </div> 
            </div>
            <div>
                <hr/>
            </div>
            <div className="buttons">
                <div>
                    <button onClick={(e) => handleNotGoing(users)} className="noGo">
                        <Icon icon='times'/>
                    </button>
                </div>
                <div>
                    <button onClick={(e) => handleGoing(users)} className="Yeppers">
                        <Icon icon='check'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}