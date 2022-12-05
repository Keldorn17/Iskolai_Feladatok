import React from 'react'
import { useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { data } from '../products'
import { useNavigate } from 'react-router-dom'

export const Products = () => {
    const [products, setProducts] = useState(data)
    const navigate = useNavigate()
  return (
    <div>
        <h1>Termékek</h1>
        <ListGroup>
            {products.map(obj => 
                <ListGroupItem 
                    onClick={() => navigate('/products/'+obj.id)} 
                    className='btn btn-info' 
                    key={obj.id}
                >
                {obj.name}
                </ListGroupItem>    
            )}
            
        </ListGroup>
    </div>
  )
}
