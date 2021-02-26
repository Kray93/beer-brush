import React from 'react'
import "./style.css"
import 'date-fns';
import Navbar from '../../components/Navbar'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';







function Events() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-03-4'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <>
            {/* <Navbar /> */}
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
                </MuiPickersUtilsProvider>
            </Container>
        </>
    )
}
export default Events;