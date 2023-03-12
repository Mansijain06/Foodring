import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from '../utils/UserContext';

const Landing = () => {

    const { users } = useContext(UserContext);
    console.log(users)

    return (
        <div className="landing-container">
            <h3>Select an account</h3>
            <ul className="landing-list">
                {users.map((user) => {
                    return (
                        <Link to={"/profile/" + user.id} key={user.id}>
                            <li>
                                <img
                                    src={user.profilepicture}
                                    alt={user.name}
                                    className="user-img"
                                />
                                {user.name}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default Landing;
