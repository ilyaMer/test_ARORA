import style from './App.module.css'
import Headers from './components/Header/Headers';
import Сomments from './components/Сomments/Сomments'

function App() {

  


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