class MapController {
  constructor() {
    const $ = document.querySelector.bind(document);
    this._inputIp = $('#ip');
    this._elementDetails = $('#details');
    this._map = L.map('map', { center: [37.4223, -122.085], zoom: 13 });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoidGlhZ29jb3JyZWFuZXZlcyIsImEiOiJja2VobHVleXUwczA5MnRsZmg2bnYzeGpzIn0.nGq8d5ow8Nj1SvmmE9T5MQ'
    }).addTo(this._map);
    let initialLocation = L.marker([37.4223, -122.085]).addTo(this._map);
    initialLocation.bindPopup(`This is the initial location try to search for an IP`);

    this._mapView = new MapView(this._elementDetails);
    this._mapView.update(this._createMap('8.8.8.8', 'Mountain View, US 94043', '-07:00', 'Google LLC'));
  };

  async loadAddress() {
    if (!MapHelper.validIp(this._inputIp.value)) return;

    let address = await this._searchAddress(this._inputIp.value);

    if (address.code) { console.log('IP inválido!') }

    this._mapView.update(this._createMap(
      address.ip,
      MapHelper.formatAddress(address.location),
      address.location.timezone,
      address.isp
    ));


    this._map.setView([address.location.lat, address.location.lng], 13);
    let marker = L.marker([address.location.lat, address.location.lng]).addTo(this._map);
    marker.bindPopup(
      `Your IP takes the city<br> <strong>${address.location.city}</strong> in ${address.location.country}.`
    ).openPopup();
  }

  _createMap(ip, location, timezone, isp) {
    return new Map(ip, location, timezone, isp);
  };

  _searchAddress(ip) {
    return fetch(`https://geo.ipify.org/api/v1?apiKey=at_gHEBknaH5NbiaacYyUs6mvuTBRjcz&ipAddress=${ip}`)
      .then(res => res.json())
      .then(res => res);
  };
}