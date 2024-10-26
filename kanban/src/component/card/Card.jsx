

const Card = ({ task }) => {
    return (
        <div className="cards">
            <div className="cards__item">
                <div className="cards__card card">
                    <CardHeader type={task.type} />
                    <CardContent task={task} />
                </div>
            </div>
        </div>
    );
};

