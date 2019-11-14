import React from "react"
import { useUsers } from "../hooks"
import Icon from '../lib/Icon'
import { Link } from 'react-router-dom'
import "../styles/base.css"


export default function Going(props) {
  const { users, going, notGoing } = useUsers()

  console.log('users', users)

  return (
    <div>
        <div className="container1">
            <Link to={`/`}>HOME</Link>
            <Link to={`/notGoing`}>Not Going: {notGoing.length}</Link>
            <Link to={`/going`}>Going: {going.length}</Link>
        </div>
        {going.map((users)=>{
            return(
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
        </div>
            )
        })}
    </div>
  )
}