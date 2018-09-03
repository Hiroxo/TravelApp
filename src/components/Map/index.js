import React from 'react'
import styles from "./styles.css"

const Map = () => {
    return(
        <div class="mapouter">
            <iframe class="gmap_canvas" height="500px" width="100%" src="https://google.com/maps?q=&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
        </div>
    )
};
export default Map;