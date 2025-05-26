import { Card, Button } from "react-bootstrap"

export const ProfileCard = (props = {}) => {
    const teacher = props.teacher;    
    
    return(
        <>
            <Card >
                <Card.Img variant="top" src = {teacher.avatar} />
                <Card.Body>
                    <Card.Title>{teacher.name}</Card.Title>
                    <Card.Text>
                    123
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}