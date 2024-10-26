
const MainBoard = () => {
    return (
        <main className="main">
            <div className="container"></div>
                <div className="main__block"></div>
                    <div className="main__content"></div>
        <div className="kanban-board">
            <Column title="Без статуса" tasks={tasksWithoutStatus} />
            <Column title="Нужно сделать" tasks={tasksToDo} />
            <Column title="В работе" tasks={tasksInProgress} />
            <Column title="Тестирование" tasks={tasksInTesting} />
            <Column title="Готово" tasks={tasksDone} />
        </div>
        </main>
    );
};