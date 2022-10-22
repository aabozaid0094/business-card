import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import LinkedIconGroup from "./LinkedIconGroup";
import LinkedIcon from "./LinkedIcon";
import {
    FaEnvelope,
    FaLinkedin,
    FaTwitter,
    FaFacebookSquare,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";
import UsersData from "../data/UsersData";

let BusinessCard = () => {
    const BCElements = UsersData.map((UserData) => {
        return (
            <Card bg="dark" key={`user_${UserData.id}`}>
                <Card.Img
                    className="mw-100"
                    variant="top"
                    src={UserData.avatar_url}
                    alt={UserData.name}
                />
                <Card.Body>
                    {UserData.name && (
                        <Card.Title as="h1">{UserData.name}</Card.Title>
                    )}
                    {UserData.bio && (
                        <Card.Subtitle as="h3">{UserData.bio}</Card.Subtitle>
                    )}
                    {UserData.blog && (
                        <div className="blog">{UserData.blog}</div>
                    )}
                    {(UserData.email || UserData.linkedin_url) && (
                        <CardGroup className="buttons p-2">
                            <Button
                                className="m-2"
                                href={`mailto:${UserData.email}`}
                                variant="light"
                                size="lg"
                            >
                                <FaEnvelope /> Email
                            </Button>
                            <Button
                                className="m-2"
                                href={UserData.linkedin_url}
                                variant="primary"
                                size="lg"
                            >
                                <FaLinkedin /> LinkedIn
                            </Button>
                        </CardGroup>
                    )}
                    <Card.Text className="text-start">
                        {UserData.about && (
                            <div className="about">
                                <h4>About</h4>
                                <p>{UserData.about}</p>
                            </div>
                        )}
                        {UserData.interests && (
                            <div className="interests">
                                <h4>Interests</h4>
                                <p>{UserData.interests}</p>
                            </div>
                        )}
                    </Card.Text>
                </Card.Body>
                {(UserData.twitter_url ||
                    UserData.facebook_url ||
                    UserData.instagram_url ||
                    UserData.github_url) && (
                    <Card.Footer>
                        <LinkedIconGroup justifyContent="center">
                            {UserData.twitter_url && (
                                <LinkedIcon href={UserData.twitter_url}>
                                    <FaTwitter className="d-block" />
                                </LinkedIcon>
                            )}
                            {UserData.facebook_url && (
                                <LinkedIcon href={UserData.facebook_url}>
                                    <FaFacebookSquare className="d-block" />
                                </LinkedIcon>
                            )}
                            {UserData.instagram_url && (
                                <LinkedIcon href={UserData.instagram_url}>
                                    <FaInstagram className="d-block" />
                                </LinkedIcon>
                            )}
                            {UserData.github_url && (
                                <LinkedIcon href={UserData.github_url}>
                                    <FaGithub className="d-block" />
                                </LinkedIcon>
                            )}
                        </LinkedIconGroup>
                    </Card.Footer>
                )}
            </Card>
        );
    });
    return <div className="business-card my-2 text-center">{BCElements}</div>;
};

export default BusinessCard;
