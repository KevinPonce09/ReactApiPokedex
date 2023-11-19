
import { AppRouter } from './AppRouter';
import { PokemonProvider } from './Context/PokemonProvider';

function App() {
    return (
      <PokemonProvider>
        <AppRouter/>
      </PokemonProvider>
    )
}

export default App
