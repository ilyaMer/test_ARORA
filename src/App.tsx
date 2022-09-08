import style from './App.module.css'
import Headers from './components/Header/Headers';
import Сomments from './components/Сomments/Сomments'
import { useEffect } from 'react'
import axios from 'axios';
import { useAppSelector } from './store/hooks/hooks';

function App() {
const {id} = useAppSelector(state => state.auth)

  


useEffect(() => {
  // axios.post('http://localhost:8080/api/json/message', {
  //   author: id,
  //   message: '123'
  // })
  // .then(res => console.log(res.data))
}, [])


  return (
    <div className={style.app_wrapper}>
      <header className={style.header}>
        <Headers />
      </header>
      <main>
        <Сomments />
      </main>
    </div>
  )
}

export default App