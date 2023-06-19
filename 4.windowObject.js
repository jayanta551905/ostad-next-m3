

function newWindow(URL, width, height) {
    window.open(URL, "", "width=" + width + ", height=" + height);
  }
  
  newWindow("https://www.example.com", 800, 600);
  
  newWindow();