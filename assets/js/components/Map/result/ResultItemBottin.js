function ResultItemBottin( propos ) {
    const { item } = propos;
    return (
        <>
            <li className="col-12 col-md-6 col-xl-4 py-16px">
                <a href={item.url} className="object-target">
                    <h4 className="ff-semibold lh-150">{item.nom}</h4>
                    <p className="d-flex pt-8px lh-150 icon_custom"><i
                        className="i-map w-16px h-16px mr-8px bg-size-auto mt-1px i-dark-primary"></i>
                    {item.rue}<br /> {item.localite}</p>
                    <span className="d-flex pt-8px lh-150 icon_custom"><i
                        className="i-phone w-16px h-16px mr-8px bg-size-auto mt-1px i-dark-primary"></i>{item.telephone}</span>
                </a>
            </li>
        </>
    );
}

export default ResultItemBottin;
