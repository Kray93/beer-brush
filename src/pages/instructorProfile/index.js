import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import {Link} from "react-router-dom"

import './style.css'
import axios from 'axios'

export default function Index() {

    const [contentBtn, setContentBtn] = useState('upcomingClasses')
    const [allClasses, setAllClass] = useState({
        data: [{
            name: "Tyler's class",
            level: 1,
            date: "12/1/2021",
            time: "17:00",
            duration: "2hr",
            price: "free",
            location: "Yo momma's house",
        },
        {
            name: "Erik's class",
            level: 99,
            date: "12/1/2021",
            time: "18:00",
            duration: "1hr",
            price: "$1,000,000",
            location: "Yo dad's house",
        },
        {
            name: "Kevin's class",
            level: 5,
            date: "12/1/2021",
            time: "06:00",
            duration: "30 Min",
            price: "$1",
            location: "My house",
        },
        {
            name: "Claire's class",
            level: 15,
            date: "12/1/2021",
            time: "03:00",
            duration: "1.5hr",
            price: "$10",
            location: "The School House",
        },
    ]
    })

    const newClassSubmit = e => {
        e.preventDefault('http://localhost:3001/api/classes/new')
        let name = e.target.name.value
        let level = e.target.level.value
        let date = e.target.date.value
        let time = e.target.time.value
        let duration = e.target.duration.value
        let recurring = e.target.recurring.value

        axios.post(``)
    }

    const handleChange = e => {
        setContentBtn(e.target.value)
    }

    const content = e => {
        if(contentBtn === 'upcomingClasses'){
            return <div>
            <div className="title">
                <h1>Upcoming Class</h1>
            </div>
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
        </div>
        } else if(contentBtn === 'newClass'){
            return <div>
                <div className="title">
                    <h1>Add New Class</h1>
                </div>
                <form className="newClassForm" onSubmit={newClassSubmit}>
                    <div>
                        <label htmlFor="name">Name of Class: </label>
                        <input type="text" name="name" placeholder="Class Name"/>
                    </div>
                    <hr/>
                    <div>
                        <label htmlFor="level">Difficulty Level: </label>
                        <input type="Number" name="level" placeholder="Level"/>
                    </div>
                    <hr/>
                    <div>
                        <label htmlFor="date">Date: </label>
                        <input type="date" name="date" placeholder="date"/>
                    </div>
                    <hr/>
                    <div>
                        <label htmlFor="time">Time: </label>
                        <input type="time" name="time" placeholder="time"/>
                    </div>
                    <hr/>
                    <p>Duration</p>
                    <div className="duration">
                        <input type="number" name="duration" placeholder="Hours"/>
                        <input type="number" name="duration" placeholder="Minutes"/>
                    </div>
                    <hr/>
                    <div className="recurringRadioBtn">
                        <p>Is this class recurring?</p>
                        <label htmlFor="no">No</label>
                        <input type="radio" id="no" name="recurring" value="no" placeholder="recurring"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="yes" name="recurring" value="yes" placeholder="recurring"/>
                    </div>

                    <input type="text" name="location" placeholder="location"/>
                    <button className="btn">Create!</button>
                </form>
            </div>
        }
    }

    return (
        <div>
            <Navbar/>
            <h1>Instructor</h1>
            <div className="btns">
                <button className="btn" value="newClass" onClick={(e) => handleChange(e)}>New Class</button>
                <button className="btn" value="upcomingClasses" onClick={(e) => handleChange(e)}>Upcoming Class</button>
            </div>
            <div className="content">
                {content()}
            </div>
        </div>
    )
}
