import Header from 'components/Header'

function HomePage() {
  return (
    <div className="h-screen bg-gray-900 flex flex-col justify-center items-center">
      <Header />
      <p className="text-white text-xl mt-12">
        This template is created by{' '}
        <a
          className="text-blue-500"
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

export default HomePage
