import './App.css';
import AssismentsClassroom from './Pages/AssismentsClassroom';
import Assismentspage4 from './Pages/Assismentspage4';
import AssismentsPage3 from './Pages/AssismentsPage3';
import AssismentsPage2 from './Pages/AssismentsPage2';
import AssismentsPage from './Pages/AssismentsPage';
import Invoicespage3 from './Pages/Invoicespage3';
import ResetPwd2 from './Pages/ResetPwd2';
import Invoicespage2 from './Pages/Invoicespage2';
import Invoices from './Pages/Invoices';
import Cpwdpage from './Pages/Cpwdpage';
import EditProfile from './Pages/EditProfile';
import Classroom5 from './Pages/Classroom5';
import Classroom4 from './Pages/Classroom4';
import Classroom3 from './Pages/Classroom3';
import Classroom2 from './Pages/Classroom2';
import Classroom1 from './Pages/Classroom1';
import CheckMail from './Pages/CheckMail';
import CyberSecurity from './Pages/CyberSecurity';
import TopicSearch from './Pages/TopicSearch';
import Certificate from './Pages/Certificate';
import UxDesignClassroom from './Pages/UxDesignClassroom';
import OrderDetails from './Pages/OrderDetails';
import Classroom from './Pages/Classroom';
import Resetpwd from './Pages/Resetpwd';
import Welcome from './Pages/Welcome';
import Course from './Pages/Course';
import Navbar from './Pages/Navbar';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
   <>
   <div>
   <BrowserRouter>
       <Routes>
      {/* <Navbar /> */}
      <Route path="/navbar" element={<Navbar />}></Route>
      {/* <Signup /> */}
      <Route path="/signup" element={<Signup />}></Route>
      {/* <Signin /> */}
      <Route path="/signin" element={<Signin />}></Route>
      {/* <Welcome /> */}
      <Route path="/welcome" element={<Welcome />}></Route>
      {/* <Course /> */}
      <Route path="/course" element={<Course />}></Route>
      {/* <Classroom /> */}
      <Route path="/classroom" element={<Classroom />}></Route>
      {/* <Resetpwd /> */}
      <Route path="/resetpwd" element={<Resetpwd />}></Route>
      {/* <OrderDetails /> */}
      <Route path="/orderdetails" element={<OrderDetails />}></Route>
      {/* <UxDesignClassroom /> */}
      <Route path="/uxdesignclassroom" element={<UxDesignClassroom />}></Route>
      {/* <Certificate /> */}
      <Route path="/certificate" element={<Certificate />}></Route>
      {/* <TopicSearch /> */}
      <Route path="/topicsearch" element={<TopicSearch />}></Route>
      {/* <CyberSecurity /> */}
      <Route path="/cybersecurity" element={<CyberSecurity />}></Route>
      {/* <CheckMail /> */}
      <Route path="/CheckMail" element={<CheckMail />}></Route>
      {/* <Classroom1 />*/}
      <Route path="/Classroom1" element={<Classroom1 />}></Route>
      {/* <Classroom2 /> */}
      <Route path="/Classroom2" element={<Classroom2 />}></Route>
      {/* <Classroom3 /> */}
      <Route path="/Classroom3" element={<Classroom3 />}></Route>
      {/* <Classroom4 />   */}
      <Route path="/Classroom4" element={<Classroom4 />}></Route>
      {/* <Classroom5 /> */}
      <Route path="/Classroom5" element={<Classroom5 />}></Route>
      {/* <EditProfile /> */}
      <Route path="/EditProfile" element={<EditProfile />}></Route>
      {/* <Cpwdpage /> */}
      <Route path="/Cpwdpage" element={<Cpwdpage />}></Route>
      {/* <Invoices /> */}
      <Route path="/Invoices" element={<Invoices />}></Route>
      {/* <Invoicespage2 /> */}
      <Route path="/Invoicespage2" element={<Invoicespage2 />}></Route>
      {/* <Invoicespage3 /> */}
      <Route path="/Invoicespage3" element={<Invoicespage3 />}></Route>
      {/* <ResetPwd2 /> */}
      <Route path="/ResetPwd2" element={<ResetPwd2 />}></Route>
      {/* <AssismentsPage /> */}
      <Route path="/AssismentsPage" element={<AssismentsPage />}></Route>
      {/* <AssismentsPage2 /> */}
      <Route path="/AssismentsPage2" element={<AssismentsPage2 />}></Route>
      {/* <AssismentsPage3 /> */}
      <Route path="/AssismentsPage3" element={<AssismentsPage3 />}></Route>
      {/* <AssismentsClassroom /> */}
      <Route path="/AssismentsClassroom" element={<AssismentsClassroom />}></Route>
      {/* <Assismentspage4 /> */}
      <Route path="/Assismentspage4" element={<Assismentspage4 />}></Route>
      </Routes>
       </BrowserRouter>
   </div> 
   </>
  );
}

export default App;
