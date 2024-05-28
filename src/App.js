import Topbar from "./scenes/global/Topbar.jsx";
import { ColorModeContext , useMode } from "./theme.js";
import { CssBaseline, ThemeProvider} from '@mui/material';
import SideBar from "./scenes/global/Sidebar.jsx";
import Dashboard from "./scenes/dashboard/index.jsx";
// import Team  from "./scenes/global/team";
// import Invoices from "./scenes/global/invoices";
// import Contacts from "./scenes/global/contacts";
// import Bar from "./scenes/global/bar";
// import Form from "./scenes/global/form";
// import Line from "./scenes/global/line";
// import Pie  from "./scenes/global/pie";
// import FAQ  from "./scenes/global/faq";
// import Geography from "./scenes/global/geography";
import { Routes,Route } from "react-router-dom";

function App() {
  const [ theme, colorMode ] = useMode();
  return(
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme = { theme} > 
    <CssBaseline />
    <div className="app">
      <SideBar /> 
      <main className="content"> 
      <Topbar />
      <Dashboard />
      <Routes> 
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* 
        <Route path="/team" element={<Team/>} />
        <Route path="/invoices" element={<Invoices/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/bar" element={<Bar/>} />
        <Route path="/form " element={<Form/>} />
        <Route path="/line" element={<Line/>} />
        <Route path="/pie" element={<Pie/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/geography" element={<Geography/>} /> */}
      </Routes>
       </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
