import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// var apikey = {
//   key:'ac884f3c-88ee-49f9-8866-104d7a46c075'
// }

// request('GET','https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apikey.key)
// .then((r1) => {
//   var x1 = JSON.parse(r1);
//   console.log(x1);
// }).catch(err => {
//   console.log(err);
// })

// function request(method, url) {
//       return new Promise(function (resolve, reject) {
//           var xhr = new XMLHttpRequest();
//           xhr.open(method, url);
//           xhr.onload = resolve;
//           xhr.onerror = reject;
//           xhr.send();
//       });
// }
