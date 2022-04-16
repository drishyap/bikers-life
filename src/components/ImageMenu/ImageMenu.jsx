import React from "react";
import "./ImageMenu.css";

const ImageMenu = () => {
    return (
        <div className="i-menu">
            <div className="i-menu-texts">
                <h1>Welcome to the journey</h1>
                <p>
                    The amazing list of products we offer. In website
                    where you can get best web-services you can find
                </p>
            </div>
			<div className="i-menu-img">
				<img src="https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='i-img'/>
				<img src="https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className='i-img'/>
				<img src="https://images.pexels.com/photos/1416169/pexels-photo-1416169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='i-img'/>
				<img src="https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className='i-img'/>
				<img src="https://images.pexels.com/photos/2747548/pexels-photo-2747548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='i-img'/>
			</div>
        </div>
    );
};

export default ImageMenu;
