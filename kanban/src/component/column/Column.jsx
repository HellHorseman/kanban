

const Column = ({ title, tasks }) => {
    return (
        <div className="column">
            <h2>{title}</h2>
            {tasks.map(task => (
                <Card key={task.id} task={task} />
            ))}
        </div>
    );
};