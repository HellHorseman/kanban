

const CardContent = ({ task }) => {
    return (
        <div className="card__content">
            <a href={task.link || "#"} target="_blank" rel="noopener noreferrer">
                <h3 className="card__title">{task.title}</h3>
            </a>
            <CardDate date={task.date} />
        </div>
    );
};