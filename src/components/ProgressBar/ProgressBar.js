import React from 'react'
import './ProgressBar.css'

const Progress_bar = (props) => {
	const {completion_rate}=props;

const ParenDiv={
	width:'100%',
	backgroundColor:"#F4F5F7",
	borderRadius:40,
	marginTop:10,
	marginBottom:10
}

	const Childdiv = {
		height: '100%',
		width: `${completion_rate}%`,
		backgroundColor: "#139D9B",
	    borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'white',
		fontWeight: 700
	}
		
	return (
    <div className='completed'>
        <h4 className='text'>Completion Rate : </h4>
	    <div style={ParenDiv}>
	       <div style={Childdiv}>
	    	   <span style={progresstext}>{`${completion_rate}%`}</span>
	       </div>
	    </div>
    </div>
	)
}

export default Progress_bar;



