import { useParams, } from "react-router-dom";

const Profile = () => {
    const param = useParams();

    console.log(param.id)
    return (
        <div>Profile</div>
    )
}

export default Profile;