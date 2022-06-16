import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js';
import { getDatabase, ref, set, push, onValue, query } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAi-71cKm9oV9x1hmc_hx3Kxe3HqmyK1L0",
    authDomain: "wasmproducts-48fbb.firebaseapp.com",
    databaseURL: "https://wasmproducts-48fbb-default-rtdb.firebaseio.com",
    projectId: "wasmproducts-48fbb",
    storageBucket: "wasmproducts-48fbb.appspot.com",
    messagingSenderId: "926285225596",
    appId: "1:926285225596:web:de0bec62fcada5dd2fb3f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


//console.log(database);


export function writeData(product) {
    push(ref(database, 'products/'), {
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.image,
        count: product.count,
        price: product.price
    });
}

export function get() {
    let data;
    const Ref = ref(database, 'products/');
    onValue(Ref, (snapshot) => {
        data = snapshot.val();
    });
    return data;
}

