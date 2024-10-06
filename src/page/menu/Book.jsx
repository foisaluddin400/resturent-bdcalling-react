import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Book = () => {
  const [book, setBook] = useState([])


  useEffect(() => {
    fetch('book.json')
      .then(res => res.json())
      .then(data => setBook(data))
  }, [])
  return (
    <div>



      <div className="container">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold pl-3 pb-3">Explore <span className="text-green-700">Yommy Recipe</span></h2>
          </div>
          <div>
            <label className=" rounded-full bg-white input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="bg-green-500 w-9 rounded-full text-white opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-4">
          {
            book.map((books) =>

              <div className="m-3">
                <div className="card bg-white shadow-xl ">
                  <figure>
                    <Link to={`/sitbook/${books.id}`}><img
                      src={books.img}
                      alt="Shoes" /></Link>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-lg">{books.name}</h2>
                    <p>If a dog chews shoes whose </p>
                    <h2 className="card-title">${books.quality}</h2>
                    <div className="card-actions justify-start">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div></div>

            )
          }
        </div>
      </div>
    </div>
  )
}
