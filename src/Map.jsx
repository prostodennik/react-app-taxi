import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import './Map.css'

export class Map extends Component {
    map = null
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = "pk.eyJ1IjoicHJvc3RvZGVubmlrIiwiYSI6ImNrdXZnazRmZjF2MWQydXF2bzE3ZWQ4Y2IifQ.d37hWTCAQLFgv3dCZeFZvA"

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [30.3056504, 59.9429126],
            zoom: 10
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render () {
        return <div className="map-wrapper">
            <div data-testid="map" className="map" ref={this.mapContainer} />
        </div>
    }
}