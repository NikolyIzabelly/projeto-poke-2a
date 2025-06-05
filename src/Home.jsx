import poke from './assets/pokeapi_256.png'
import eevee from './assets/eevee.jpg'
import './Home.css'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'
import Menu from './Menu'


const Home = () =>{

    return(
        <div>
            <Menu/>  
            <PokeFlex/>
            <PokeGrid/>
          
        </div>
    )
}

export default Home 