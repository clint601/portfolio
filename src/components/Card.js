const Card =(props)=> {
    return (
        <div className="col">
            <div className="card project-card h-100">
                <img src={`/images/${props.imgUrl}`} alt={`${props.name} project screenshot`}className="img-fluid image" />
                
                <div className="project-card-body card-body">
                    <h2 className="card-title text-uppercase project-text">{props.name}</h2>
                    <p className="card-text">{props.description}</p>
                    <a href={props.sourceCode} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">code</a>
                    {props.livePage && props.livePage !== "#" ? (
                        <a href={props.livePage} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">live</a>

                    ) : (
                        <button className="btn btn-secondary" disabled>live unavailable</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card