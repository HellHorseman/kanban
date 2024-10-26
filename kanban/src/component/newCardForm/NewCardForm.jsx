const NewCardForm = () => (
    <div className="pop-new-card">
        <div className="pop-new-card__container">
            <div className="pop-new-card__block">
                <div className="pop-new-card__content">
                    <h3 className="pop-new-card__ttl">Создание задачи</h3>
                    <a href="#" className="pop-new-card__close">✖</a>
                    <Form />
                    <Calendar />
                    <Categories />
                    <button className="form-new__create _hover01" id="btnCreate">
                        Создать задачу
                    </button>
                </div>
            </div>
        </div>
    </div>
);
