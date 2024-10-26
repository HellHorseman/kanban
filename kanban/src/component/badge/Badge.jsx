const getBadgeColor = (type) => {
    switch (type.toLowerCase()) {
        case 'web design':
            return '_orange';
        case 'research':
            return '_green';
        case 'copywriting':
            return '_purple';
        // Добавь дополнительные типы при необходимости
        default:
            return '_default';
    }
};

const Badge = ({ type }) => {
    const badgeColor = getBadgeColor(type);
    return <span className={`badge ${badgeColor}`}>{type}</span>;
};
