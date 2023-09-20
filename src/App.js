import { colorModeContext, useMode } from "./theme";
//reset css, ThemeProvider allows you to pass in theme to MUI
import { CssBaseline, ThemeProvider, Tooltip } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  console.log(colorMode, theme);


  return (<colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <main className="content">
              <Topbar />
              Test
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
