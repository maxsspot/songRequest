import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMHdGoXT1dPH1d0YqMVsTXwY583tbpvQU",
  authDomain: "song-request-2dde2.firebaseapp.com",
  databaseURL: "https://song-request-2dde2-default-rtdb.firebaseio.com/",
  projectId: "song-request-2dde2",
  storageBucket: "song-request-2dde2.appspot.com",
  messagingSenderId: "1050997422155",
  appId: "1:1050997422155:web:8f1a7b1e36d40ee56b75ce"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
