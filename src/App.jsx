
import './App.css'
import Banner from './banner/Banner'
import About from './component/About'
import Contact from './component/Contact'
import Download from './component/Download'
import Experience from './component/Experience'
import Footer from './component/Footer'
import Navber from './component/Navber'


import Skill from './component/Skill'
import Study from './component/Study'
import Text from './component/Text'

function App() {
  
  return (
    
      <div className='bg-black'>
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <Download></Download>
      <Study></Study>
     <Text></Text>
      <Skill></Skill>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    
  )
}

export default App
