class MapView {

  constructor(element) {
    this._element = element;
  }
  
  update(map) {
    this._element.innerHTML = this._template(map);
  }

  _template(map) {
    return `  
    <div>${map.ip}</div>
    <div>${map.location}</div>
    <div>${map.timezone}</div>
    <div>${map.isp}</div>
    `
  }

}