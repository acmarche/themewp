import MapComponent from './MapComponent';
import FiltreJf from './FiltreJf';
import Top from './Top';
import { loadFiltres } from './service/map-service';

const { useState, useEffect } = wp.element;

function App() {
    const [ markerData, setMarkerData ] = useState([]);
    const [ filtres, setFiltres ] = useState([]);
    const [ popupDescription, setPopupDescription ] = useState();

    async function loadingFiltres() {
        let response;
        try {
            response = await loadFiltres();
            const { data } = response;
            setFiltres( data );
        } catch ( e ) {
            console.log( e );
        }
        return null;
    }

    useEffect( () => {
        loadingFiltres();
    }, [ ]);

    window.addEventListener( 'resize', () => {
        950 < window.innerWidth && 992 > window.innerWidth ?
            window.location.reload() :
            null;
    });

    return (
        <>
            <div className="bg-white pt-24px px-24px position-relative d-md-flex px-xl-48px mx-xl-n30px justify-content-md-center flex-column">
                <Top />
                <div className="mt-48px d-flex flex-column flex-lg-row mx-0 mx-lg-n48px overflow-hidden align-items-lg-stretch mx-xxl-0 xxl-shadow-sm-1">
                    <FiltreJf
                        filtres={filtres}
                        markerData={markerData}
                        setMarkerData={setMarkerData}
                    />

                    <MapComponent
                        popupDescription={popupDescription}
                        setPopupDescription={setPopupDescription}
                        markerData={markerData}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
