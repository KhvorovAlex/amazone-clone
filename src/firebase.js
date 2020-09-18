import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyD3pr-j1vUg-PCxNjQSreDEeykF6t1_eAM',
    authDomain: 'e-clone-e7673.firebaseapp.com',
    databaseURL: 'https://e-clone-e7673.firebaseio.com',
    projectId: 'e-clone-e7673',
    storageBucket: 'e-clone-e7673.appspot.com',
    messagingSenderId: '682293342380',
    appId: '1:682293342380:web:be2f1f0382a399ffb6af09',
    measurementId: 'G-G65HN30T84',
}

//инициализуем
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
