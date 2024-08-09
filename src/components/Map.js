import WaypointsContext from '@/utils/contexts/WaypointsContext';
import { useContext } from 'react';

const Map = () => {
    const { optimalRoute } = useContext(WaypointsContext);

    // if (!optimalRoute) {
    //     return null;
    // }

    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: { lat: 0, lng: -180 },
            mapTypeId: "terrain",
        });
        const flightPlanCoordinates = [
            { lat: 37.772, lng: -122.214 },
            { lat: 21.291, lng: -157.821 },
            { lat: -18.142, lng: 178.431 },
            { lat: -27.467, lng: 153.027 },
        ];
        const flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        });

        flightPath.setMap(map);
    }

    window.initMap = initMap;

    return (
        <div className='google-maps mt-4'>
            <h1 className='text-5xl font-bold my-2'>MAP</h1>
            <div id="map" className='h-full'></div>
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDABGK86olzqqGNBi1VqzGl5ELPOHCBzpk&callback=initMap&v=weekly"
                defer
            ></script>
        </div>
    )
}

export default Map