class MapView {

  constructor(element) {
    this._element = element;
  }
  
  update(map) {
    this._element.innerHTML = this._template(map);
  }

  _template(map) {
    return `  
    <div><span>Ip Address</span>${map.ip}</div>
    <div><span>Location</span>${map.location}</div>
    <div><span>Timezone</span>${map.timezone}</div>
    <div><span>Isp</span>${map.isp}</div>
    `
  }

}