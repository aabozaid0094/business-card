import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import LinkedIconGroup from './LinkedIconGroup';
import LinkedIcon from './LinkedIcon';
import { FaEnvelope, FaLinkedin, FaTwitter, FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";

let BusinessCard = () => {
    let user = {
        login: "aabozaid0094",
        avatar_url: "https://avatars.githubusercontent.com/u/56685532?v=4",
        name: "Ahmed Abo Zaid",
        blog: "",
        location: "Egypt",
        bio: "Software Developer",
        about: "WordPress Developer(Themes/Plugins), Hosting(Linux WHM&CPanel / Windows Server) DevOps(for web Apps), Opentext AppWorks developing experience, .NET Software Developer",
        interests: "Seeking to build a good career in Software Development.",
        email: "aabozaid0094@gmail.com",
        linkedin_url: "https://www.linkedin.com/in/aabozaid0094",
        twitter_url: "https://twitter.com/AAboZaid7",
        facebook_url: "https://facebook.com/",
        instagram_url: "https://www.instagram.com/",
        github_url: "https://github.com/aabozaid0094",
    };
    return (
        <div className="business-card my-2 text-center">
            <Card bg="dark">
                <Card.Img className="mw-100" variant="top" src={user.avatar_url} alt={user.name} />
                <Card.Body>
                    <Card.Title as="h1">{user.name}</Card.Title>
                    <Card.Subtitle as="h3">{user.bio}</Card.Subtitle>
                    <div className="blog">{user.blog}</div>
                    <CardGroup className="buttons p-2">
                        <Button className="m-2" href={`mailto:${user.email}`} variant="light" size="lg"><FaEnvelope/> Email</Button>
                        <Button className="m-2" href={user.linkedin_url} variant="primary" size="lg"><FaLinkedin/> LinkedIn</Button>
                    </CardGroup>
                    <Card.Text className="text-start">
                        <div className="about">
                            <h4>About</h4>
                            <p>{user.about}</p>
                        </div>
                        <div className="interests">
                            <h4>Interests</h4>
                            <p>{user.interests}</p>
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <LinkedIconGroup justifyContent="center">
                        <LinkedIcon href={user.twitter_url}><FaTwitter/></LinkedIcon>
                        <LinkedIcon href={user.facebook_url}><FaFacebookSquare/></LinkedIcon>
                        <LinkedIcon href={user.instagram_url}><FaInstagram/></LinkedIcon>
                        <LinkedIcon href={user.github_url}><FaGithub/></LinkedIcon>
                    </LinkedIconGroup>
                </Card.Footer>
            </Card>
        </div>
    );
};
export default BusinessCard;