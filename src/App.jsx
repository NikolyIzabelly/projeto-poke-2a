import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'
import Menu from './Menu'

const App = () => {

  return(
    <Routes>
      <Route index element={<Menu/>} />
      <Route path="home" element={<Home/>} />
      <Route path="pokeFlex" element={<PokeFlex/>} />
      <Route path="pokeGrid" element={<PokeGrid/>} />


    </Routes>
  )
}

export default App