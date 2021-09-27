import axios from "axios";

// อ่าน token จาก localStorage

// let token =''
// if(localStorage.getItem('user')){
//   let userStorage = localStorage.getItem('user')
//   let userStorageJSON = JSON.parse(userStorage)
//   token = userStorageJSON['token']
// }else{
//   token =''
// }
const BackendService = axios.create({
  //baseURL: "http://localhost:8000/api/",
  baseURL: process.env.VUE_APP_URL_API,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
    //"Authorization": `Bearer ${token}`
  },
});


//Use Interceptors
BackendService.interceptors.request.use(config =>{
  let token = ''
  
  try{
    let userStorage = localStorage.getItem('user')
    let userStorageJSON = JSON.parse(userStorage)
    token = userStorageJSON['token']
  }catch(error){
    console.log(error);
  }

  //Condition Token not null
  if(token){
    config.headers.Authorization = "Bearer "+token
  }
  return config
})


export default BackendService;