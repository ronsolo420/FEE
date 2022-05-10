navigator.geolocation.getCurrentPosition((pos) => {
    myFunction(pos.coords.latitude, pos.coords.longitude);
  });