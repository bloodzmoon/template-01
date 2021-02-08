import './HelloWorld.scoped.css'

export function HelloWorld() {
  return (
    <div className="full-page">
      <header className="head">
        <span className="blue">REACT</span> / 01
      </header>
      <p className="description">
        This template created by{' '}
        <a
          className="link"
          href="https://github.com/bloodzmoon"
          target="_blank"
          rel="noreferrer"
        >
          @bloodzmoon
        </a>
      </p>
    </div>
  )
}
