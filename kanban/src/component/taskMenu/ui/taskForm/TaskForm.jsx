

const TaskForm = ({ task, onSave }) => {
    return (
        <form className="task-form">
            <input type="text" value={task.title} placeholder="Название задачи" />
            <select value={task.type}>
                <option value="Web Design">Web Design</option>
                <option value="Research">Research</option>
                <option value="Copywriting">Copywriting</option>
            </select>
            <button onClick={onSave}>Сохранить</button>
        </form>
    );
};
