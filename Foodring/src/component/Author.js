import NavBar from "./NavBar";
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'

const Author = () => {
    return (
        <div>
            <div className="resturant-menu-navbar">
                <NavBar />
            </div>
            <div className="author-container">
                <h1>Mansi Jain</h1>
                <h3>Software Engineer</h3>
                <p>{<UilGithub />}<b>Github - </b><a href="https://github.com/Mansijain06/Foodring/tree/main/Foodring" target="_blank">Foodring</a></p>
                <p>{<UilLinkedin />}<b>LinkedIn - </b><a href="https://www.linkedin.com/in/mansi-jain06/" target="_blank">https://www.linkedin.com/in/mansi-jain06/</a></p>
            </div>
        </div >
    );
};

export default Author;
