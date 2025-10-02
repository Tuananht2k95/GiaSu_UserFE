import { Button, Card } from "react-bootstrap"
import { USER } from "../../config/constant.js"
import "./index.scss"
import { Link } from "react-router-dom";

export const ProfileCard = (props = {}) => {
    const teacher = props.teacher;  
    const InfoRow = ({label, value}
    ) => {
        return(<div className="row border-bottom py-2">
            <div className="col-sm-5 mb-0"><strong>{label}</strong></div>
            <div className="col-sm-7">{value}</div>
        </div>)
    };
    
    return(
        <div id="profileCard" className="row gutters-sm">  
            <div className="card col-md-5">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src={teacher.avatar} alt="Admin" className="rounded-circle" width="150"></img>
                    <div className="mt-3">
                        <h4>{teacher.name}</h4>
                        <InfoRow label={"Role"} value={USER.role[teacher.role]}></InfoRow>
                    </div>
                </div>
            </div>
            </div>
            <Card className="col-md-6">
                <Card.Body>
                    <InfoRow label="Email" value={teacher.email}></InfoRow>
                    <InfoRow label="Số điện thoại" value={teacher.phone}></InfoRow>
                    <InfoRow label="Giới tính" value={USER.gender[teacher.gender]}></InfoRow>
                    <InfoRow label="Ngày sinh" value={teacher.dateOfBirth}></InfoRow>
                    <Button variant="primary" className="col-sm-6 col-md-4 mt-3">
                        <Link to={"/profile/edit"} className="text-decoration-none text-dark">Thay đổi</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}