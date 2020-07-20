import *  as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCYn8Ob_gDuxro3ihyUP1YZ4E6qcLiXVIg",
    authDomain: "formstestt.firebaseapp.com",
    databaseURL: "https://formstestt.firebaseio.com",
    projectId: "formstestt",
    storageBucket: "formstestt.appspot.com",
    messagingSenderId: "661284711787",
    appId: "1:661284711787:web:8bddf4b8202b37d5c2302e",
    measurementId: "G-8HEYFBL9ED"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();

//Auth
const googleAuth = new firebase.auth.GoogleAuthProvider();


//   firebaseDB.ref('fliacao/mae').set('Sarah').
//   then(()=>{
//       console.log('saved')
//   })
//   .catch((e)=>{
//       console.log(e)
//   })

// firebaseDB.ref('car').remove().
//  then(()=>{
// //       console.log('saved')
// })
//  .catch((e)=>{
//      console.log(e)
//  })

//update
//  firebaseDB.ref().update({
//      name: 'Jose',
//      lastname:'Machanguele',
//      age:22,
//      filiacao:{
//          mae:'Sara'
//      }
//  }).
//  then(()=>{
// //       console.log('saved')
// })
//  .catch((e)=>{
//      console.log(e)
//  })


//getData Nao eh realTime
// firebaseDB.ref('filiacao').once('value').
// then((snapshot)=>{
//   console.log(snapshot.val())
// })
// .catch((e)=>{
//     console.log(e)
// })

//getData2 eh Realtime
// firebaseDB.ref().on('value',(snapshot)=>{
//      console.log(snapshot.key, snapshot.val())
//  })

// firebaseDB.ref().on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// firebaseDB.ref().on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// then((snapshot)=>{
//   console.log(snapshot.val())
// // })
// .catch((e)=>{
//     console.log(e)
// })

// setTimeout(()=>{
//      firebaseDB.ref('Name').set('Jose')
//  },3000)

// setTimeout(()=>{
//     firebaseDB.ref().off()
// },3000)

// setTimeout(()=>{
//     firebaseDB.ref('Name').set('Joseph')
// },4000)

//Arrays
// firebaseDB.ref('users').push([
//     {
//         id:6,
//         name:'Francis',
//         lastname: 'Jones'
//        },
    
//        {
//         id:2,
//         name:'Delma',
//         lastname: 'Jones'
//        },
     
//        {
//        id:3,
//         name:'Isis',
//         lastname: 'Jones'
//        }

// ])

export{
    firebase,
    firebaseDB,
    googleAuth
}


//   firebaseDB.ref('lastname').set('Magaia');