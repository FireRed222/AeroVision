import s from './PageNotFound.module.scss'

const PageNotFound = () => {
  return (
    <section className={s.notfound}>
        <h1>404</h1>
        <h2><b>Sorry, </b> these are uncharted waters</h2>
        <h3>Page Not Found</h3>
    </section>
  )
}

export default PageNotFound