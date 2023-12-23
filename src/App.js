
import React from "react";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Home from "./Home";
import ContactInformation from "./pages/ContactInformation";
import LeadSource from "./pages/LeadSource";
import CompanyInformation from "./pages/CompanyInformation";
import LeadScoring from "./pages/LeadScoring";
import LeadStatus from "./pages/LeadStatus";
import CommunicationHistory from "./pages/CommunicationHistory";
import LeadTagsLabels from "./pages/LeadTagsLabels";
import LeadNotesComments from "./pages/LeadNotesComments";


function App() {
  return (
      <>
        <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/contact-info' exact element={<ContactInformation/>}></Route>
        <Route path='/leadsource'  element={<LeadSource/>}></Route>
        <Route path='/Companyinformation'  element={<CompanyInformation/>}></Route>
        <Route path='/leadScore'  element={<LeadScoring/>}></Route>
        <Route path='/leadstatus'  element={<LeadStatus/>}></Route>
        <Route path='/communicationhistory'  element={<CommunicationHistory/>}></Route>
        <Route path='/leadtaglabel'  element={<LeadTagsLabels/>}></Route>
        <Route path='/leadnotecomment'  element={<LeadNotesComments/>}></Route>
         </Routes>
         </BrowserRouter> 
         </>
      
      );
      }
      export default App;  
