import { useState } from "react"
import { useProductsContext } from "../hooks/useProductsContext"
import { Button } from "react-bootstrap"

//have t
 
const EditForm = () => {
    const {dispatch } = useProductsContext()
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
    // const [emptyFields, setEmptyFields] = useState ([])
    
    const handleSubmit= async (e) => {
        e.preventDefault()

        const product ={name, image, description, brand, category, color, price, countInStock, rating, numReviews }

        const response = await fetch('/api/products', {
            method:  'PATCH',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            // setEmptyFields(json.emptyFields)
        }
        if (response.ok){
            // setEmptyFields([])
            setName('')
            setImage('')
            setDescription('')
            setBrand('')
            setCategory('')
            setColor('')
            setPrice('')
            setCountInStock('')
            setRating('')
            setNumReviews('')
            setError(null)
            
            console.log('new workout added')
            dispatch({type: 'UPDATE_PRODUCT', payload: json})
        }
    }
    
    return (
      <form className='create' onSubmit={handleSubmit}>
        <h3> Update Product Form </h3>

        <label>Product Id* Required</label>
        <input
        type='text'
        required/>

        <label> Frame Name/Model Number</label>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          //   className={emptyFields.includes('name') ? 'error' : ''}
        />
        <label> Image Location </label>
        <input
          type='text'
          onChange={(e) => setImage(e.target.value)}
          value={image}
          //   className={emptyFields.includes('image') ? 'error' : ''}
        />
        <label> Description </label>
        <input
          type='text'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          //   className={emptyFields.includes('description') ? 'error' : ''}
        />
        <label> Brand </label>
        <input
          type='text'
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          //   className={emptyFields.includes('brand') ? 'error' : ''}
        />
        <label>Category</label>
        <input
          type='text'
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          //   className={emptyFields.includes('category') ? 'error' : ''}
        />
        <label> Color </label>
        <input
          type='text'
          onChange={(e) => setColor(e.target.value)}
          value={color}
          //   className={emptyFields.includes('color') ? 'error' : ''}
        />
        <label> Price </label>
        <input
          type='Number'
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          //   className={emptyFields.includes('price') ? 'error' : ''}
        />
        <label> Number in Stock </label>
        <input
          type='Number'
          onChange={(e) => setCountInStock(e.target.value)}
          value={countInStock}
          //   className={emptyFields.includes('countInStock') ? 'error' : ''}
        />
        <label> Rating </label>
        <input
          type='Number'
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          //   className={emptyFields.includes('rating') ? 'error' : ''}
        />
        <label> # of Reviews</label>
        <input
          type='Number'
          onChange={(e) => setNumReviews(e.target.value)}
          value={numReviews}
          //   className={emptyFields.includes('numReviews') ? 'error' : ''}
        />
        
        <button>Update Product</button>   
        
        
             
        {error && <div className='error'>{error}</div>}
      </form>
      
    ) 
}

export default EditForm