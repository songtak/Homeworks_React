import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ToastContainer, Slide} from 'react-toastify';

import Main from "./component/Main"
import Counter from "./component/Counter";
import SuperMarket from "./component/markets/SuperMarket";
import Info from "./component/Info";
import Subway from "./component/subway/Subway";



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/main" component={Main} />
      <Route path="/counter" component={Counter} />
      <Route path="/subway" component={Subway} />
      <Route path="/superMarket" component={SuperMarket} />
      <Route path="/info" component={Info} />
    </Switch>
    </BrowserRouter>
    </>


  );
};

export default App;


  // import React from 'react';
 
  // import { ToastContainer, toast } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';
  
  // function App(){
  //   const notify = () => toast("Wow so easy !");
 
  //   return (
  //     <div>
  //       <button onClick={notify}>Notify</button>
  //       <ToastContainer />
  //     </div>
  //   );
  // };
  // export default App;