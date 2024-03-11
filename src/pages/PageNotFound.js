import { Link } from 'react-router-dom'
import NotFound404 from '../assests/NotFound404.jpg'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export const PageNotFound = () => {
  useDocumentTitle("Page Not Found");
  return (
    <main>
      <section className='flex flex-col justify-center'>
        <div className='flex flex-col items-center'>
        <p className='dark:text-slate-100 text-slate-900 text-5xl py-5 my-10 font-bold'>404 Oops! Page Not Found</p>
        <div className='max-w-lg '>

        <img className="rounded" src={NotFound404} alt="" />
        </div>
        </div>
        <div className='flex justify-center my-5'>
          <Link to="/">
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
font-bold w-64'>
            Back to Cinemate
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
