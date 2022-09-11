import { useState } from "react"


 

const ProductForm = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState ('')
    const [category, setCategory] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const [countInStock, setCountInStock] = useState('')
    const [rating, setRating] = useState('')
    const [numReviews, setNumReviews] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit= async (e) => {
        e.preventDefault()

        const product ={name, image, description, brand, category, color, price, countInStock, rating, numReviews }

        const response = await fetch('/api/products', {
            method:  'Post',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if (response.ok){
            setName('')
            setImage('')
            setDescription('')
            setBrand('')
            setCategory('')
            setColor('')
            setPrice('')
            setCountInStock('')
            setError(null)
            console.log('new workout added, json')
        }
    }
    
    return (
        <form className='create' onSubmit= {handleSubmit}>
            <h3> Product Form </h3>

            <label> Frame Name/Model Number</label>
            <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            <label> Image Location </label>
            <input
            type='text'
            onChange={(e) => setImage(e.target.value)}
            value={image}
            />
            <label> Description </label>
            <input
            type='text'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            />
            <label> Brand </label>
            <input
            type='text'
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
            />
            <label>Category</label>
            <input
            type='text'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            />
            <label> Color </label>
            <input
            type='text'
            onChange={(e) => setColor(e.target.value)}
            value={color}
            />
            <label> Price </label>
            <input
            type='Number'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            />
            <label> Number in Stock </label>
            <input
            type='Number'
            onChange={(e) => setCountInStock(e.target.value)}
            value={countInStock}
            />
            <label> Rating </label>
            <input
            type='Number'
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            />
            <label> numReviews</label>
            <input
            type='Number'
            onChange={(e) => setNumReviews(e.target.value)}
            value={numReviews}
            />
            <button>Add Product</button>
            {error && <div className="error">{error}</div>}
           
        </form>
  )
}

export default ProductForm