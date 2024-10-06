import { useEffect, useState } from "react"

export const Recipe = () => {

    const [recipe, setRecipe] = useState([])
    const [slice , setSlice] = useState(4)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])

    return (
        <div className="container">
            <h2 className="text-2xl font-bold pl-3 pb-3">Explore <span className="text-green-700">Yommy Recipe</span></h2>
            <div className="grid lg:grid-cols-4">
                {
                    recipe.slice(0, slice).map((item) =>

                        <div className="m-3">
                            <div className="card bg-white shadow-xl ">
                                <figure>
                                    <img
                                        src={item.img}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-lg">{item.name}</h2>
                                    <p>If a dog chews shoes whose </p>
                                    <h2 className="card-title">${item.price}</h2>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div></div>

                    )
                }
            </div>
        </div>
    )
}
