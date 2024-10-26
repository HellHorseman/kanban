const Calendar = () => (
    <div className="pop-new-card__calendar calendar">
        <p className="calendar__ttl subttl">Даты</p>
        <div className="calendar__block">
            <CalendarNav />
            <CalendarCells />
        </div>
        <div className="calendar__period">
            <p className="calendar__p date-end">
                Выберите срок исполнения <span className="date-control" />
            </p>
        </div>
    </div>
);
