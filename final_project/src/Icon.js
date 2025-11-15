import UserProfile from "./userProfile";

export default function Icon(props) {
    return(
        <div>          
            <UserProfile userName={props.userName}/> 
        </div>
    ); 
}; 