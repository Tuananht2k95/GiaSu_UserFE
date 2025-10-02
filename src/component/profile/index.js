import { Card } from "react-bootstrap"
import { USER } from "../../config/constant.js"

export const ProfileCard = (props = {}) => {
    const teacher = props.teacher;    
    
    return(
        <>
            <Card >
                <Card.Img variant="top" src = {teacher.avatar} />
                <Card.Body>
                    <Card.Title>{teacher.name}</Card.Title>
                    <Card.Text>
                        <strong>Email:</strong> {teacher.email} <br />
                        <strong>Số điện thoại:</strong> {teacher.phone} <br />
                        <strong>Giới tính</strong> {USER.gender[teacher.gender] } <br />
                        <strong>Ngày sinh</strong> {teacher.dateOfBirth} <br />
                        <strong>Nghiệp vụ</strong> {teacher.role} <br />

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}