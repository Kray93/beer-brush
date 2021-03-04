import React, { useState, useEffect } from 'react'
import "./style.css"
import 'date-fns';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Upcoming from '../../components/Upcoming';
import axios from 'axios';


function Classes(props) {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-03-4'));
    const [allClasses, setAllClasses] = useState()
    const { activeUser } = props

    useEffect(() => {
        axios.get("http://localhost:3001/api/classes/all")
            .then(resp => {
                setAllClasses(resp.data.data)
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
            return <div className="upcomingClasses">
                <Grid container justify="center">
                    <h3>Upcoming Events</h3>
                </Grid>
                {allClasses.map(aClass => {

                    let dateSplit1 = aClass.date.split("T")
                    let dateSplit2 = dateSplit1[0].split("-")
                    let dateObj = new Date(dateSplit2[0], dateSplit2[1] - 1, dateSplit2[2])
                    console.log(dateObj);

                    let data = {
                        userId: aClass.UserId,
                        date: dateObj,
                        level: aClass.level,
                        location: aClass.location,
                        recurring: aClass.recurring,
                        time: aClass.time,
                        duration: aClass.duration,
                        name: aClass.name,
                        classId: aClass.id
                    }

                    return <div>
                        
                        <Upcoming data={data} />
                    </div>
                })
                }
            </div>
        }
    }

    return (
        <div>
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
                    <div className="upcoming-classes-box">
                        
                        {content()}
                    </div>
                </MuiPickersUtilsProvider>
            </Container>
        </div>
    )
}
export default Classes;