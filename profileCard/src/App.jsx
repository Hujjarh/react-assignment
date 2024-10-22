import ProfileCard from './components/ProfileCard'
import './index.css'
import kemi from './assets/images/kemisola.jpg'
import profile from './assets/images/portf_heroImg.jpg'
import young from './assets/images/young-programmer.jpg'



function App() {

  return (
    <>
    <div>
    <ProfileCard name="Hujjatullah" image={young} age={33} location="Alimosho"/>
    <ProfileCard name="Olayinka" image={profile} age={24} location="Mushin"/>
    <ProfileCard name="Zainab" image={kemi} age={55} location="Abuja"/>
    <ProfileCard name="Fatimah" image={kemi} age={22} location="Kaduna"/>

    </div>
   
   
    </>
  )
}

export default App
