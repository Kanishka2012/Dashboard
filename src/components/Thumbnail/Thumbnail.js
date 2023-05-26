// import thumbnail from './thumbnail.jpg';
import './Thumbnail.css'

function Thumbnail(props){
    return(
        <div className='thumbnail-container'>
            <img src={props.image} alt=""></img>
        </div>
    )
}

export default Thumbnail;