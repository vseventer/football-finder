// Package modules.
import Leaflet  from 'leaflet';
import React    from 'react';
import ReactDOM from 'react-dom';

// Local modules.
import '../../node_modules/leaflet/dist/leaflet.css';
import './map.css'

// Configure default Leaflet icon.
import marker   from '../../node_modules/leaflet/dist/images/marker-icon.png';
import marker2x from '../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import shadow   from '../../node_modules/leaflet/dist/images/marker-shadow.png';
const icon = new Leaflet.Icon({
  iconUrl       : marker,
  iconRetinaUrl : marker2x,
  iconSize      : [ 25, 41 ],
  iconAnchor    : [ 12, 41 ],
  popupAnchor   : [ 1, -34 ],
  shadowUrl     : shadow,
  shadowSize    : [ 41, 41 ]
});

// Component.
class Map extends React.Component {
  constructor (props) {
    super(props);
    this.map = null; // Init.
  }

  addLayer(group) {
    var layerGroup = new Leaflet.LayerGroup();
    this.map.layerControl.addOverlay(layerGroup, group);
    return layerGroup.addTo(this.map);
  }

  // Adds marker to specified layer. Attaches specified popup to marker.
  addMarker(position, popup, layer) {
    var marker = new Leaflet.Marker(position, { icon: icon });
    marker.popup = popup;
    marker.bindPopup(document.createElement('div')).addTo(layer || this.map);
  }

  componentDidMount() {
    // Initialize map, center on United Kingdom.
    this.map = new Leaflet.Map(this.refs.target).setView([ 54.76, -2.7 ], 6);

    // Add tiles.
    Leaflet.tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png', {
      subdomains   : 'abcd',
      detectRetina : true,
      attribution  : 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // Prepare layer control.
    this.map.layerControl = new Leaflet.Control.Layers(null, null, { collapsed: false });
    this.map.layerControl.addTo(this.map);

    // Render popups on opening.
    this.map.on('popupopen', function(e) {
      if(e.popup._source.popup) {
        ReactDOM.render(e.popup._source.popup, e.popup._content);
        e.popup.update(); // Redraw.
      }
    });
  }

  render() {
    return <div className="leaflet-map" ref="target" />;
  }
}

// Exports.
export default Map;