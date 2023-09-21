import { colorModeContext, useMode } from "./theme";
//reset css, ThemeProvider allows you to pass in theme to MUI
import { CssBaseline, ThemeProvider, Tooltip } from "@mui/material";
import { Routes, Route } from "react-router-dom"
import Topbar from "./scenes/global/Topbar";
import AppSidebar from "./scenes/global/AppSidebar"
import Dashboard from "./scenes/dashboard"
import Team from "./scenes/team"
import Contacts from "./scenes/contacts"
import Invoices from "./scenes/invoices"
import Form from "./scenes/form"
// import Bar from "./scenes/bar"
// import Line from "./scenes/line"
// import Pie from "./scenes/pie"
// import FAQ from "./scenes/faq"
// import Calendar from "./scenes/calendar"


function App() {
  const [theme, colorMode] = useMode();

  console.log("app mode: " + theme.palette.mode);


  return (<colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <AppSidebar/>
            <main className="content">
              <Topbar />
              <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/form" element={<Form/>} />
              {/* <Route path="/bar" element={<Bar/>} /> */}
              {/* <Route path="/pie" element={<Pie/>} /> */}
              {/* <Route path="/line" element={<Line/>} /> */}
              {/* <Route path="/faq" element={<FAQ/>} /> */}
              {/* <Route path="/calendar" element={<Calendar/>} /> */}
              </Routes>
              Test
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
