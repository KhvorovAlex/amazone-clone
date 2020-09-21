import axios from 'axios'

const instace = axios.create({
    baseURL: 'https://us-central1-e-clone-e7673.cloudfunctions.net/api',
})
//server: https://us-central1-e-clone-e7673.cloudfunctions.net/api
//local: http://localhost:5001/e-clone-e7673/us-central1/api

export default instace
