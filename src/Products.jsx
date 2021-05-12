import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
const cat1='Shoes';
const cat2='Flip-flops';

const products=[
  {category:'Shoes',name:'Shoes 1',description:'Running shoes',price:'500',image:'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  {category:'Flip-flops',name:'Flip-flops 1',description:'Comfortable Flip-flops',price:'500',image:'https://assets.ajio.com/medias/sys_master/root/h07/he1/13333651259422/-473Wx593H-460363318-black-MODEL.jpg'},
  {category:'Shoes',name:'Shoes 2',description:'Running shoes',price:'500',image:'https://www.onlinesastamaal.com/wp-content/uploads/2019/08/grey-shoe.jpg'},
  {category:'Flip-flops',name:'Flip-flops 2',description:'Comfortable Flip-flops',price:'500',image:'https://n1.sdlcdn.com/imgs/i/0/u/adidas-flip-flop-Red-Slide-SDL434484381-1-dad27.JPEG'},
  {category:'Shoes',name:'Shoes 3',description:'Running shoes',price:'500',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'},
  {category:'Flip-flops',name:'Flip-flops 3',description:'Comfortable Flip-flops',price:'500',image:'https://5.imimg.com/data5/RM/UL/HV/SELLER-98859637/mens-bad-boys-flip-flops-500x500.jpg'},
  {category:'Shoes',name:'Shoes 4',description:'Running shoes',price:'500',image:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/268453-Best_Running_Shoes_for_Flat_Feet-1296x728-header-1296x728.jpg?w=1155&h=1528'},
  {category:'Flip-flops',name:'Flip-flops 4',description:'Comfortable Flip-flops',price:'500',image:'https://rukminim1.flixcart.com/image/714/857/jzsqky80/slipper-flip-flop/b/d/z/23-6-retrowear-black-original-imafj5a96amgy2he.jpeg?q=50'},
  {category:'Shoes',name:'Shoes 5',description:'Running shoes',price:'500',image:'https://images.unsplash.com/photo-1556048219-bb6978360b84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'},
  {category:'Flip-flops',name:'Flip-flops 5',description:'Comfortable Flip-flops',price:'500',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzD3_seyclYDiA5tiMQxBV1ceKowCAYaFsg&usqp=CAU'},

]

const Products = ({setCart, cart }) => {
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(cat1);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };
  return (
    <div style={{paddingTop:'10vh'}}>
      <h1 style={{textAlign:'center'}}>Products</h1>
      <div style={{fontSize:'20px',textAlign:'center'}}>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={cat1}>{cat1}</option>
        <option value={cat2}>{cat2}</option>
      </select>
      </div>
      <div className="products" style={{padding:'20px'}}>
      <Grid container justify="center" spacing={4}>
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx} style={{padding:'60px'}}>
            <Card style={{ width: '25rem' }}>
              
              <CardMedia style={{width:'400px',height:'300px'}} image={product.image} title={product.name} />
                <CardContent>
                  <div style={{display: 'flex',justifyContent:'space-between',}}>
                    <h2>{product.name}</h2>
                    <h2>${product.price}</h2>
                  </div>
                  <p>{product.description}</p>
                </CardContent>
                <CardActions disableSpacing style={{display: 'flex',justifyContent:'flex-end',}}>
                  <IconButton aria-label="Add to Cart" onClick={() => addToCart(product)}>
                    <AddShoppingCart />
                  </IconButton>
                </CardActions>
            </Card>
            {/* <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button> */}
          </div>
          
        ))}
        </Grid>
      </div>
    </div>
  );
};

export default Products;

