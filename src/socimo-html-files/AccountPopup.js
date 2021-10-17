import React from 'react'

function AccountPopup(props) {
	return(
		(props.trigger)?(
		<div  className="popup-wrap" 
		style={{
			width:"100%",
			height:"100%",
			backgroundColor:"#000000bf",
			position:"fixed",
			zIndex:1000
		}}>
		<div className= "popup" style={{ 
			width:"max-content",
			top:"50%",

		}}>
			<div className="popup-inner" style={{}}>
				<div className="searches" style={{marginLeft:0}}>
                <form method="post" style={{ borderBottom:"1px solid black"}}>
			<h6 className="label-of-field"
			style={{ marginBottom:10}}>Tìm trường</h6>
                  <input type="text" placeholder="Search..." style ={{ 
			  marginBottom:30,
			 
		  }} />
		
                  <button type="submit"  style ={{
			  top: 35
		  }}>
                    <i className="icofont-search" />
                  </button>  
		
                  </form>
                  
		  <form method="post" name="form-info">
			  <p 
			style={{ marginBottom:10 , marginTop:20}}>Nhập Email</p>
		  <input type="text" placeholder="Email..." />
		   <p 
			style={{ marginBottom:10, marginTop:20}}>Nhập Tên</p>
		  <input type="text" placeholder="Name..." />
		   <p 
			style={{ marginBottom:10, marginTop:20}}>Nhập Số điện thoại</p>
		  <input type="text" placeholder="Phone..." />
		   <p 
			style={{ marginBottom:10, marginTop:20}}>Nhập Địa chỉ</p>
		  <input type="text" placeholder="Address..." />
		  
		  <p 
			style={{ marginBottom:10, marginTop:20}}>Chọn ảnh</p>
		  <input type="file"  />
		
		<button type="submit" style ={{ 
			position:"unset",
			backgroundColor:"#007bff",
			color:"white", 
			margin:"20px auto",
			width:"max-content",
			display:"block",
			padding: "10px 40px",
			borderRadius: 20

		}}>Hoàn tất</button>
		  </form>
		  </div>
			</div>
		</div>
		</div>):""
		
	)
}

export default AccountPopup