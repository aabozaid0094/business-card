import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import LinkedIconGroup from './LinkedIconGroup';
import LinkedIcon from './LinkedIcon';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

let BusinessCard = () => {
    let user = {
        login: "aabozaid0094",
        avatar_url: "https://avatars.githubusercontent.com/u/56685532?v=4",
        name: "Ahmed Abo Zaid",
        company: null,
        blog: "",
        location: "Egypt",
        bio: "Software Developer",
        email: "aabozaid0094@gmail.com",
        linkedin_username: "AAboZaid7",
        twitter_url: "AAboZaid7",
        facebook_url: "https://facebook.com/",
        instagram_url: "https://twitter.com/",
        github_url: "https://github.com/aabozaid0094",
    };
    return (
        <div className='business-card w-400px'>
            <Card bg="dark">
                <Card.Img className="mw-100" variant="top" src={user.avatar_url} alt={user.name} />
                <Card.Body>
                    <Card.Title as="h1">{user.name}</Card.Title>
                    <Card.Subtitle as="h3">{user.bio}</Card.Subtitle>
                    <div className="blog">{user.blog}</div>
                    <CardGroup className="buttons p-2">
                        <Button className="m-2" href={user.email} variant="light" size="lg">Email</Button>
                        <Button className="m-2" href={user.linkedin_url} variant="primary" size="lg">LinkedIn</Button>
                    </CardGroup>
                    <Card.Text>
                        Some quick example text to build on the card title and make
                        up the bulk of the card's content.
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