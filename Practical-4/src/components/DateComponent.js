import React from 'react';
import './DateComponent.css';

function DateComponent() {
    const presentDayDate = new Date();
    const dayInDigit = presentDayDate.toLocaleString('en-US',{day: '2-digit'});
    const year = presentDayDate.getFullYear();
    const month = presentDayDate.toLocaleString('en-US', {month: 'long'});
    const dayInWords = presentDayDate.toLocaleString('en-US', {weekday: 'long'});

    return(
        <div className="date-components">
            <div className="demo">
                <div className="day-in-digit">{dayInDigit}</div>
                <div className="month-and-year"><b>{month}</b><br/>{year}</div>
            </div>

            <div className="day-in-words">{dayInWords}</div>
        </div>
    );

}
export default DateComponent;