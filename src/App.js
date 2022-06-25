import './App.scss'
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  )
}

export default App;