const CountCard = ({ count, title, description }) => {
    return (
        <div className="count-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <h1>{count}</h1>
        </div>
    );
};

export default CountCard;