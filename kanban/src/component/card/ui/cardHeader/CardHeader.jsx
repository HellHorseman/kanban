

const CardHeader = ({ type }) => {
    return (
        <div className="card__group">
            <div className={`card__theme _${type.toLowerCase()}`}>
                <Badge type={type} />
                <p className={`_${type.toLowerCase()}`}>{type}</p>
            </div>
            <a href="#popBrowse" target="_self">
                <div className="card__btn">
                    <div />
                    <div />
                    <div />
                </div>
            </a>
        </div>
    );
};