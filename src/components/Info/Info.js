import React from 'react'
import './Info.css'
import ProgressBar from '../ProgressBar/ProgressBar';
import starIcon from '../../images/star-icon.png'
// import StarIcon from '@mui/icons-material/Star';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './Thumbnail.css'

const Info = (props) => {
  const renderIcons = (count) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(<img src={starIcon} />);
    }
    return icons;
  };
  return (
        <div className='info-container'>
          <div className='label-style'>
            <div className='heading'>
              <h1> {props.title}</h1>
            </div>
            <div className='rating'>
              {renderIcons(props.rating)}
            </div>
            
            {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
          </div>
          <div className='artist'>
            <p className='no-margin'>{props.artist}</p>
          </div>
          <div className='desc'>
            <p>{props.desc}</p>
          </div>
            
            <ProgressBar completion_rate={props.completion_rate} />
        </div>
  );
}

export default Info
