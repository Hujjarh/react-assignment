
import './ProfileCard.css'

const ProfileCard = (props)=>{
    return(
        <>
        <div className='card'>
            <img className='card-img' src={props.image} alt="" />
            <h1 className='card-name'>Name: {props.name}</h1>
            <h3>Age: {props.age}</h3>
            <h3>Location: {props.location}</h3>
            
        </div>
            
        </>
    )
}
export default ProfileCard