import './Header.css'

function Header() {
  return (
    <h1 className="head">
      <span className="bg-blue-400 p-4">React</span> +{' '}
      <span className="bg-indigo-700 p-4">Typescript</span> +{' '}
      <span className="bg-green-500 p-4">Tailwind</span>
    </h1>
  )
}

export default Header
