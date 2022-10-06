import {useState} from 'react';
import './App.css'
import Button from './components/Button';
import Testimonial from './components/Testimonial'
import photo1 from './imagenes/photo1.jpg'
import photo2 from './imagenes/photo2.jpg'
import photo3 from './imagenes/photo3.jpg'



function App() {
  const [theme, setTheme] = useState('light')

  function onClickFn(){
   if(theme == 'light'){
      setTheme('dark')
   }else{
    setTheme('light')
   }
  }

  return (
    <div className={'main-container'+ theme }>
   <Button
   onClickFn={onClickFn}
   value={theme=='dark'?'light': 'dark'}
   />
     <Testimonial 
     img={photo1} 
     name="perroloco"
      text="lorem lorem lorem chupame la verga"/>
       <Testimonial 
     img={photo2} 
     name="perroloco"
      text="lorem lorem lorem chupame la verga"/>
       <Testimonial 
     img={photo3} 
     name="perroloco"
      text="lorem lorem lorem chupame la verga"/>
   
    </div>
  )
}

export default App
