class Map {
  constructor(ip, location, timezone, isp) {
     this._ip = ip; 
     this._location = location; 
     this._timezone = timezone; 
     this._isp = isp; 

     Object.freeze(this)
  }


  get ip() {
    return this._ip;
  };

  get location() {
    return this._location;
  };

  get timezone() {
    return this._timezone;
  };

  get isp() {
    return this._isp;
  };
}