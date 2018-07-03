import 'whatwg-fetch';
import cookie from 'react-cookies';

const Helper = (url,method,body)=>{
  return(
    fetch(url,{
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(response =>{
      return response.json();
    })
    .catch(err=>{
      if(err.status===undefined){
        alert("something went wrong while processing your request. please try after sometime");
        cookie.remove("access_token");
        window.location.href="/";
      }
      return "Error while login " + err;
    })
  );
};

export default Helper;
