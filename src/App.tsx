import './App.css'
import { ThemeProvider } from './components/theme/theme-provider'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>Hello</>
    </ThemeProvider>
  )
}

export default App
