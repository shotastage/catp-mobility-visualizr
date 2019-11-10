// src/App.js
import React, { Component } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvdGFzdGFnZSIsImEiOiJjazJldDI0a3QwYzBvM25wYmhla3VzcnJsIn0.gKFUj2YxHYsT8o42h0xYWQ' // あなたの Mapbox のパブリックアクセストークン


const defaultPosition = new mapboxgl.LngLat(139.701686, 35.659075).wrap();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //35.659075, 139.701686 
      lng: defaultPosition.lng,
      lat: defaultPosition.lat,
      zoom: 15
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/navigation-preview-day-v2",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default App;
