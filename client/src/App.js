// import React from 'react';
// import Register from './pages/Register';
// import Login from './pages/Login';
// // import Dashboard from './pages/Dashboard';
// import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
// import './App.css';
// import Verifyemail from './pages/Verifyemail';
// import Home from './pages/Home';
// import Userhome from './user/Userhome';
// import About from './user/About';
// import Services from './user/Services';
// import Form from './user/Form';
// import Statusview from './user/Statusview';
// import Adminhome from './admin/Adminhome';
// import Adminabout from './admin/Adminabout';
// import AdminServices from './admin/AdminServices';
// import Adminadd from './admin/Adminadd';
// import Policelogin from './police/Policelogin';
// import Policeregister from './police/Policeregister';
// import Policehome from './police/Policehome';
// import Policevalidation from './police/Policevalidation';
// import Policeview from './admin/Policeview';
// import Policeupcoming from './police/Policeupcoming';
// import Policeactive from './police/Policeactive';
// import Adminactive from './admin/Adminactive';
// import Adminupcoming from './admin/Adminupcoming';
// import Useractive from './user/Useractive';
// import Userupcoming from './user/Userupcoming';


// function App() {
//   return (
// <BrowserRouter>
// <Routes>
// 	<Route path='/' element={<PublicRoutes><Home/></PublicRoutes>} />
// 	<Route path='/register' element={<PublicRoutes><Register/></PublicRoutes>} />
// 	<Route path='/verify/:token' element={<PublicRoutes><Verifyemail/></PublicRoutes>} />
// 	<Route path='/login' element={<PublicRoutes><Login/></PublicRoutes>} />
// 	{/* <Route path='/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>} /> */}


// 	<Route path='/userhome' element={<ProtectedRoutes><Userhome/></ProtectedRoutes>} />
// 	<Route path='/about' element={<ProtectedRoutes><About/></ProtectedRoutes>} />
// 	<Route path='/services' element={<ProtectedRoutes><Services/></ProtectedRoutes>} />
// 	<Route path='/form' element={<ProtectedRoutes><Form/></ProtectedRoutes>} />
// 	<Route path='/statusview' element={<ProtectedRoutes><Statusview/></ProtectedRoutes>} />
// 	<Route path='/useractive' element={<ProtectedRoutes><Useractive/></ProtectedRoutes>} />
// 	<Route path='/userupcoming' element={<ProtectedRoutes><Userupcoming/></ProtectedRoutes>} />




// 	<Route path='/adminadd' element={<Adminadd/>} />
// 	<Route path='/adminhome' element={<Adminhome/>} />
// 	<Route path='/adminabout' element={<Adminabout/>} />
// 	<Route path='/adminservices' element={<AdminServices/>} />
// 	<Route path='/policeview' element={<Policeview/>} />
// 	<Route path='/adminactive' element={<Adminactive/>} />
// 	<Route path='/adminupcoming' element={<Adminupcoming/>} />





// 	<Route path='/policelogin' element={<Policelogin/>} />
// 	<Route path='/policeregister' element={<Policeregister/>} />
// 	<Route path='/policehome' element={<Policehome/>} />
// 	<Route path='/policevalid' element={<Policevalidation/>} />
// 	<Route path='/policeupcoming' element={<Policeupcoming/>} />
// 	<Route path='/policeactive' element={<Policeactive/>} />
// </Routes>

// </BrowserRouter> 
//  );
// }

// export default App;

// export function ProtectedRoutes({children}){
// 	const auth=localStorage.getItem('data')
// 	if (auth){
// 		return children
// 	}else{
// 		return <Navigate to='/' />
// 	}
// }
// export function PublicRoutes({children}){
// 	const auth=localStorage.getItem('data')
// 	if (auth){
// 		return <Navigate to='/userhome' />
// 	}else{
// 		return children		
// 	}
// }

import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import './App.css';
import Verifyemail from './pages/Verifyemail';
import Home from './pages/Home';
import Userhome from './user/Userhome';
import About from './user/About';
import Services from './user/Services';
import Form from './user/Form';
import Statusview from './user/Statusview';
import Adminhome from './admin/Adminhome';
import Adminabout from './admin/Adminabout';
import AdminServices from './admin/AdminServices';
import Adminadd from './admin/Adminadd';
import Policelogin from './police/Policelogin';
// import Policeregister from './police/Policeregister';
import Policehome from './police/Policehome';
import Policevalidation from './police/Policevalidation';
import Policeview from './admin/Policeview';
import Policeupcoming from './police/Policeupcoming';
import Policeactive from './police/Policeactive';
import Adminactive from './admin/Adminactive';
import Adminupcoming from './admin/Adminupcoming';
import Useractive from './user/Useractive';
import Userupcoming from './user/Userupcoming';
import Userview from './admin/Userview';
import MapComponent from './user/MapComponent';
import Userhelp from './user/Userhelp';
import Userhistory from './user/Userhistory';
import Policehistory from './police/Policehistory';
import Adminhistroy from './admin/Adminhistroy';




function App() {
  return (
<BrowserRouter>
<Routes>
	<Route path='/' element={<PublicRoutes><Home/></PublicRoutes>} />
	<Route path='/register' element={<PublicRoutes><Register/></PublicRoutes>} />
	<Route path='/verify/:token' element={<PublicRoutes><Verifyemail/></PublicRoutes>} />
	<Route path='/login' element={<PublicRoutes><Login/></PublicRoutes>} />
	{/* <Route path='/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>} /> */}


	<Route path='/userhome' element={<ProtectedRoutes><Userhome/></ProtectedRoutes>} />
	<Route path='/about' element={<ProtectedRoutes><About/></ProtectedRoutes>} />
	<Route path='/services' element={<ProtectedRoutes><Services/></ProtectedRoutes>} />
	<Route path='/form' element={<ProtectedRoutes><Form/></ProtectedRoutes>} />
	<Route path='/statusview' element={<ProtectedRoutes><Statusview/></ProtectedRoutes>} />
	<Route path='/useractive' element={<ProtectedRoutes><Useractive/></ProtectedRoutes>} />
	<Route path='/userupcoming' element={<ProtectedRoutes><Userupcoming/></ProtectedRoutes>} />
	<Route path='/map' element={<ProtectedRoutes><MapComponent/></ProtectedRoutes>} />
	<Route path='/userhelp' element={<ProtectedRoutes><Userhelp/></ProtectedRoutes>} />
	<Route path='/userhistory' element={<ProtectedRoutes><Userhistory/></ProtectedRoutes>} />






	<Route path='/policelogin' element={<AdminPublicRoutes><Policelogin/></AdminPublicRoutes>} />
	<Route path="/adminadd" element={<AdminProtectedRoutes><Adminadd/></AdminProtectedRoutes>} />
	<Route path="/adminhome" element={<AdminProtectedRoutes><Adminhome/></AdminProtectedRoutes>} />
	<Route path="/adminabout" element={<AdminProtectedRoutes><Adminabout/></AdminProtectedRoutes>} />
	<Route path="/adminservices" element={<AdminProtectedRoutes><AdminServices/></AdminProtectedRoutes>} />
	<Route path="/policeview" element={<AdminProtectedRoutes><Policeview/></AdminProtectedRoutes>} />
	<Route path="/userview" element={<AdminProtectedRoutes><Userview/></AdminProtectedRoutes>} />
	<Route path="/adminactive" element={<AdminProtectedRoutes><Adminactive/></AdminProtectedRoutes>} />
	<Route path="/adminupcoming" element={<AdminProtectedRoutes><Adminupcoming/></AdminProtectedRoutes>} />
	<Route path="/adminhistroy" element={<AdminProtectedRoutes><Adminhistroy/></AdminProtectedRoutes>} />







	<Route path='/policelogin' element={<PolicePublicRoutes><Policelogin/></PolicePublicRoutes>} />
	<Route path='/policehome' element={<PoliceProtectedRoutes><Policehome/></PoliceProtectedRoutes>} />
	<Route path='/policevalid' element={<PoliceProtectedRoutes>x<Policevalidation/></PoliceProtectedRoutes>} />
	<Route path='/policeupcoming' element={<PoliceProtectedRoutes>x<Policeupcoming/></PoliceProtectedRoutes>} />
	<Route path='/policeactive' element={<PoliceProtectedRoutes>x<Policeactive/></PoliceProtectedRoutes>}/>
	<Route path='/policehistory' element={<PoliceProtectedRoutes>x<Policehistory/></PoliceProtectedRoutes>}/>

</Routes>

</BrowserRouter> 
 );
}

export default App;

export function ProtectedRoutes({children}){
	const auth=localStorage.getItem('data')
	if (auth){
		return children
	}else{
		return <Navigate to='/' />
	}
}
export function PublicRoutes({children}){
	const auth=localStorage.getItem('data')
	if (auth){
		return <Navigate to='/userhome' />
	}else{
		return children		
	}
}

export function AdminProtectedRoutes({ children }) {
    const admin = localStorage.getItem('admin');
    if (admin) {
        return children;
    } else {
        return <Navigate to="/policelogin" />;
    }
}

export function AdminPublicRoutes({ children }) {
    const admin = localStorage.getItem('admin');
    if (admin) {
        return <Navigate to="/adminhome" />;
    } else {
        return children;
    }
}

export function PoliceProtectedRoutes({ children }) {
    const admin = localStorage.getItem('userInfo');
    if (admin) {
        return children;
    } else {
        return <Navigate to="/policelogin" />;
    }
}

export function PolicePublicRoutes({ children }) {
    const admin = localStorage.getItem('userInfo');
    if (admin) {
        return <Navigate to="/policehome" />;
    } else {
        return children;
    }
}