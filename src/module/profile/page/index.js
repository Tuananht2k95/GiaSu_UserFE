import { Card, Container } from "react-bootstrap";
import { profileTeacherApi } from "../../../api/GiaSuUserService/teacher/profile"
import { useEffect, useState } from "react"

export const Index = () => {
    const [ teacher, setTeacher ] = useState({});
    const  getProfileTeacher = async () => {
        const response = await profileTeacherApi.show();
        if (response.success) {
            setTeacher(response.data);
        }
    }   
    useEffect(
        () => {
            getProfileTeacher();           
        }, []
    )
    return(
        <>
            <Container>
                <Card>
                    <Card.Header>Thông tin cá nhân</Card.Header>
                    <Card.Body>
                        {teacher.name}
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}