const FormBlock = ({ label, type, name, placeholder }) => (
    <div className="form-new__block">
        <label htmlFor={name} className="subttl">{label}</label>
        {type === "textarea" ? (
            <textarea
                className="form-new__area"
                name={name}
                id={name}
                placeholder={placeholder}
            />
        ) : (
            <input
                className="form-new__input"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
            />
        )}
    </div>
);
