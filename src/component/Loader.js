import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './Loader.css';


function Loader({ location }) {
  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 100);
  }, [location]);

  return null; // Kuch render nahi karega
}

export default withRouter(Loader);


// import React, { useEffect } from 'react';
// import NProgress from 'nprogress';
// import { useHistory } from 'react-router-dom';
// import 'nprogress/nprogress.css';

// function Loader() {
//   const history = useHistory();

//   useEffect(() => {
//     NProgress.start();
//     history.listen(() => {
//       NProgress.done();
//     });
//     setTimeout(() => {
//       NProgress.done();
//     }, 500);  // Delay ke baad loader ko complete hone de
//   }, [history]);

//   return null;  // Kuch render nahi hoga, bas loader dikhega
// }

// export default Loader;
