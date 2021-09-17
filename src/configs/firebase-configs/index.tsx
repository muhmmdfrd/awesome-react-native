import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
  
const app = initializeApp({
  apiKey: 'AIzaSyDPVRxVFUTSnHa7FKwy5rQ4KNyBhA7AA0s',
  authDomain: 'my-awesome-react-native.firebaseapp.com',
  projectId: 'my-awesome-react-native',
  storageBucket: 'my-awesome-react-native.appspot.com',
  messagingSenderId: '106856701717',
  appId: '1:106856701717:web:43c6108d30d6f685ea931c',
  measurementId: 'G-42KDL1G4VD'
});
const analytics = getAnalytics(app);

export { app, analytics };