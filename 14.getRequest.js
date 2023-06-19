function getRequest() {
    let URL = "https://api.example.com/data";
    let res = axios.get(URL);

    if(res.status === 0){
        res.data[data];
    }
    else{
        console.log("error");
    }
}


getRequest();