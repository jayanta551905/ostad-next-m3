function postRequest() {
    let URL = "https://api.example.com/submit";
    let data = {
        name: "John Doe",
        email: "johndoe@example.com"
    }

    let res = axios.post(URL, data);
    if(res.status===0){
        console.log("Data submited");
    }
    else{
        console.log("Error")
    }
}