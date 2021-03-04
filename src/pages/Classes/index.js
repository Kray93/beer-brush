import React, { useState, useEffect } from 'react'
import "./style.css"
import 'date-fns';
import Navbar from '../../components/Navbar'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Upcoming from '../../components/Upcoming';
import axios from 'axios';


function Classes() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-03-4'));
    const [allClasses, setAllClasses] = useState()

    useEffect(() => {
        axios.get("http://localhost:3001/api/classes/all")
            .then(resp => {
                setAllClasses([resp.data])
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const content = () => {
        if (allClasses === undefined) {
            return <div><p>Loading...</p></div>
        } else {
            const user = JSON.parse(localStorage.getItem("activeUser")).data.user

            return <div>
                {allClasses[0].data.map(aClass => {
                    console.log("something");
                    return <div>
                        <p>test</p>
                    </div>
                })}
            </div>
        }
    }

    return (
        <div>
            <Navbar />
            <Container className="container">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Select Date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Grid container justify="center" item >

                        {content()}
                        {/* <Upcoming /> */}


                    </Grid>
                </MuiPickersUtilsProvider>
            </Container>
        </div>
    )
}
export default Classes;


/*
                {allClasses[0].data.forEach(aClass => {

                    let data = {
                        name: aClass.name,
                        date: aClass.date,
                        level: aClass.level,
                        location: aClass.location,
                        recurring: aClass.recurring,
                        time: aClass.time,
                        UserId: aClass.UserId,
                        duration: aClass.duration,
                    }

                    return <div>
                        <Upcoming data={data} />
                    </div>
                })
                }
                */