const CardDate = ({ date }) => {
    const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    });

    return (
        <div className="card__date">
            <CalendarIcon />
            <p>{formattedDate}</p>
        </div>
    );
};