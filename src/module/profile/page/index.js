import { Container } from "react-bootstrap";
import { profileTeacherApi } from "../../../api/GiaSuUserService/teacher/profile"
import { useEffect, useState } from "react"
import { ProfileCard } from "../../../component/profile";

export const Index = () => {
    const [ teacher, setTeacher ] = useState({});
    const  getProfileTeacher = async () => {
        const response = await profileTeacherApi.show();
        
        if (!response) {
            return;
        }

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
                <ProfileCard teacher = {teacher} />
            </Container>
        </>
    )
}