import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo'

const Home: NextPage = () => {
  return (
    <div>
      <Titulo titulo="titulinho" subtitulo="subtitulo" />
    </div>
  )
}

export default Home
