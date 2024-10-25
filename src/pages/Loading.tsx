import Logo from '../components/Logo'
import { Link } from 'react-router-dom';

const Loading = () => {
  return (
    <>
    <section className='loading__container'>
        <Link to="/set-timer">
          <Logo/>
        </Link>
        <h5 className='h5'>INTERVAL</h5>
        <p className='p'>For all your timing needs</p>
    </section>
    </>
  )
}

export default Loading