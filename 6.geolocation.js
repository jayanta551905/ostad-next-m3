function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log('Latitude:', latitude);
          console.log('Longitude:', longitude);
        },
        function (error) {
          console.log('Error');
        }
      );
    } else {
      console.log('Something went wrong');
    }
  }


  getUserLocation();
  