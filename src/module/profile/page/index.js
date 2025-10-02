import { Container } from "react-bootstrap";
import { profileTeacherApi } from "../../../api/GiaSuUserService/teacher/profile"
import { useEffect, useState } from "react"
import { ProfileCard } from "../../../component/profile";

export const Index = () => {
    const [ teacher, setTeacher ] = useState(
        {
            name: "Lê Tuấn Anh",
            avatar: "/images/avatar.jpg",
            email: "admin@gmail.com",
            phone: "0917046821",
            gender: 1,
            dateOfBirth: "23/08/1999",
            role: 1,
        }
    );
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