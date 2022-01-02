import React from "react";
import Directory from "../../components/directory/directory.component";
import { signInWithGoogle } from '../../firebase/firebase.utils';


import './homepage.styles.scss';
const HomePage=()=>(
    <div className="homepage">
        <Directory/>
    </div>
 );
 
 export default HomePage
