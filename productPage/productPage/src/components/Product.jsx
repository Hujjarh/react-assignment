import './product.css'
const Product = (props)=>{
    return(
        <>
        <div className='product-card'>
            <img src={props.imageUrl} alt="" />
            <h3 className='prod-name'>Product Name: {props.name}</h3>
            <h3 className='prod-price'>Price: {props.price}</h3>
            <h3 className='desc'><span>Description</span>: {props.description}</h3>
        </div>
        
        </>
    )
}
export default Product