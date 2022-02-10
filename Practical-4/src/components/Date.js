import './Date.css';


function Date() {
    return(
        <div className="date-component">
            <div className="demo">
                <div className="day-in-digit">12</div>
                <div className="month-and-year"><b>JAN</b><br/>2016</div>
            </div>

            <div className="day-in-words">TUESDAY</div>
        </div>
    );

}
export default Date;