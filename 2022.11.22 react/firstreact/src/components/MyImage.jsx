import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
export default function MyImage({product}) {
  return (
    <div>
        <LazyLoadImage
          className='img-fluid'
          alt={product.name}
          src={product.imgUrl}
          effect="blur"
        />
        <span>{product.name}</span>    
        
    </div>
  )
}
