import '../css/starGame.scss'
import '../css/main.scss'
import Router, { useRouter } from 'next/router'

const Header = (props) => {
  const router = useRouter();

  return (
    <div className="header">
      <h1 class="brand"><i style={{marginRight:'0.1em'}}>m</i>atas<span>CMS</span></h1>
      <nav>
        <a onClick={() => Router.push('/posts')} className={router.pathname === '/posts'?'active':''}>Posty</a>
        <a onClick={() => Router.push('/todos')} className={router.pathname === '/todos'?'active':''}>Lista zadań</a>
        <a onClick={() => Router.push('/starGame')} className={router.pathname === '/starGame'?'active':''}>Star Game</a>
      </nav>
    </div>
  )
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  console.log('rendering MyApp....');
  return (
    <React.Fragment>
      <Header {...pageProps} />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  )
}