import  './css/index.css'
import axios from 'axios'


axios.get("/api").then(res => {
  console.log(res)
})