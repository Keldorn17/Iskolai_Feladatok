import React from "react";
import { Card, CardText,CardTitle,CardBody,Button } from 'reactstrap';
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../products";
import MyImage from "./MyImage";

export const Product = () => {
    const navigate =useNavigate()
    const params = useParams()
    console.log(params)
    const product = data.find(obj => obj.id == params.id)
    console.log(product)
   return (
    <Card
      style={{
        width: "25rem",
      }}
    >
      <MyImage product={product}/>
      {/*<img alt="Sample" src={product.imgUrl} />*/}
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardText>
          Price: {product.price}
        </CardText>
        <Button onClick={() => navigate('/products')}>Back to all products...</Button>
      </CardBody>
    </Card>
  );
};
