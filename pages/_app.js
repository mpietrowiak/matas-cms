import '../css/starGame.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  console.log('rendering MyApp....');
  return <Component {...pageProps} />
}