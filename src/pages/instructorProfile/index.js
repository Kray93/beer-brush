import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import './style.css'
import axios from 'axios'

export default function Index(props) {

    const [contentBtn, setContentBtn] = useState()
    const [allClasses, setAllClasses] = useState()

 
    useEffect(() => {
        // get active user id
        const activeUser = props.activeUser;
        let activeUserId;
        if (activeUser) {
            activeUserId = activeUser.id;
            console.log(activeUserId);
        }

        // get all of current user's classes
        axios.get(`http://localhost:3001/api/classes/${activeUserId}`)
            .then(resp => {
                console.log(resp);
                setAllClasses({ data: resp.data.data })
            }).catch(err => console.log(err))
    }, [contentBtn])

    useEffect(() => {
        setContentBtn("upcomingClasses")
    },[])


    const newClassSubmit = e => {
        e.preventDefault()

        const activeUser = props.activeUser
        const activeUserId = activeUser.id

        const durationHr = e.target.durationHr.value
        const durationMin = e.target.durationMin.value

        let totalDuration = (durationHr * 1000 * 60 * 60) + (durationMin * 1000 * 60)

        let data = {
            name: e.target.name.value,
            level: e.target.level.value,
            date: e.target.date.value,
            time: e.target.time.value,
            duration: totalDuration,
            recurring: e.target.recurring.value,
            location: e.target.location.value,
            userId: activeUserId
        }

        console.log(data);
        let token = JSON.parse(localStorage.getItem("activeUser"));
        token = token.data.token;
        axios.post(`http://localhost:3001/api/classes/new`, data, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
            .then(resp => {
                console.log(resp);
                setContentBtn("upcomingClasses")
            })
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        setContentBtn(e.target.value)
    }

    const content = e => {
        if (contentBtn === 'upcomingClasses') {
            return <div className="InstructorUpcomingClassesBox">
                <div className="title">
                    <h1>Upcoming Class</h1>
                </div>
                {allClasses === undefined ? <p>Loading...</p> :
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allClasses.data.map(item => {
                                return <tr>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <td><Link>Edit</Link> | <Link>Delete</Link></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                }
            </div>
        } else if (contentBtn === 'newClass') {
            return <div>
                <div className="title">
                    <h1>Add New Class</h1>
                </div>
                <div className="NewClassformBox">

                
                <form className="newClassForm" onSubmit={newClassSubmit}>
                    <div>
                        <label htmlFor="name">Name of Class: </label>
                        <input type="text" name="name" placeholder="Class Name" />
                    </div>
                    <hr />
                    <div>
                        <label htmlFor="level">Difficulty Level: </label>
                        <input type="Number" name="level" placeholder="Level" />
                    </div>
                    <hr />
                    <div>
                        <label htmlFor="date">Date: </label>
                        <input type="date" name="date" placeholder="date" />
                    </div>
                    <hr />
                    <div>
                        <label htmlFor="time">Time: </label>
                        <input type="time" name="time" placeholder="time" />
                    </div>
                    <hr />
                    <p>Duration</p>
                    <div className="duration">
                        <input type="number" name="durationHr" placeholder="Hours" />
                        <input type="number" name="durationMin" placeholder="Minutes" />
                    </div>
                    <hr />
                    <div className="recurringRadioBtn">
                        <p>Is this class recurring?</p>
                        <label htmlFor="no">No</label>
                        <input type="radio" id="no" name="recurring" value={false} placeholder="recurring" />
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="yes" name="recurring" value={true} placeholder="recurring" />
                    </div>

                    <input type="text" name="location" placeholder="location" />
                    <button className="btn">Create!</button>
                </form>
                </div>
            </div>
        }
    }

    return (
        <div>
            <h1>Instructor</h1>
            <div className="btns">
                <button className="btn" value="upcomingClasses" onClick={(e) => handleChange(e)}>Upcoming Class</button>
                <button className="btn" value="newClass" onClick={(e) => handleChange(e)}>New Class</button>
            </div>
            <div className="content">
                {content()}
            </div>
        </div>
    )
}