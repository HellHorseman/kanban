const Form = () => (
    <div className="pop-new-card__wrap">
        <form className="pop-new-card__form form-new" id="formNewCard">
            <FormBlock
                label="Название задачи"
                type="text"
                name="name"
                placeholder="Введите название задачи..."
            />
            <FormBlock
                label="Описание задачи"
                type="textarea"
                name="text"
                placeholder="Введите описание задачи..."
            />
        </form>
    </div>
);
