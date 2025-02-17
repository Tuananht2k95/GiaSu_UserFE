import { Container, Card, Button, CardGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import './index.scss'

export const Index = () => {
    const button = <Button variant="primary">Đăng ký thuê gia sư ngay</Button>;
    const cardContent1 = [
        {
            title: "Dạy hiệu quả",
            text: "Con chỉ có thể học tốt nếu yêu thích việc học. Gia sư tại GrowGreen luôn biết cách tạo động lực cho con, bằng các phương pháp giảng dạy thú vị, dễ hiểu và hiệu quả."
        },
        {
            title: "Tiến bộ nhanh",
            text: "Với gia sư giỏi tại GrowGreen, con bạn sẽ nhanh chóng học tập tiến bộ, có kết quả khác biệt chỉ sau 10 buổi học: Con chăm ngoan, học tốt hơn, điểm số cao hơn."
        },
        {
            title: "Học thử 2 buổi",
            text: "Sau 2 buổi học thử đầu tiên, nếu không hài lòng về gia sư, bạn không cần phải thanh toán học phí. Tất nhiên, GrowGreen luôn có những gia sư khiến bạn hài lòng nhất."
        }
    ]
    const cardContent2 = [
        {
            text: 'Không phải mất công đi lại, gia sư đến dạy trực tiếp ngay tại nhà'
        },
        {
            text: 'Con được học 1-1, tạo nên chất lượng giảng dạy tốt nhất'
        },
        {
            text: 'Dễ dàng quản lý giờ giấc học tập của con, không sợ con ham chơi, trốn học'
        },
        {
            text: 'Biết được tình trạng học tập của con bất cứ khi nào bạn muốn'
        },
        {
            text: 'Không còn lo lắng mỗi khi con đối mặt với thi cử, bởi gia sư đã giúp con đã nắm vững kiến thức'
        },
        {
            text: 'Việc học tập của con được đảm bảo, trong khi bạn không phải tốn quá nhiều công sức và thời gian'
        },
    ]

    return(
        <Container>
            <Card>
                {/* <Card.Img src="" alt="dang-ky-thue-gia-su" fluid></Card.Img> */}
                {/* <Card.ImgOverlay> */}
                    <Card.Header>Trung tâm gia sư</Card.Header>
                    <Card.Body>
                        <Card.Title>Mang thành công đến với con bạn</Card.Title>
                        <Card.Text>Bạn muốn con chăm ngoan, học giỏi? Đăng ký ngay! Đội ngũ gia sư giỏi của GrowGreen sẽ giúp con bạn tiến bộ nhanh chóng.</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Button variant="warning">
                            Đăng ký thuê gia sư ngay
                        </Button>
                    </Card.Body>
                {/* </Card.ImgOverlay> */}
            </Card>
            <Card>
                <Card.Header>Bạn là giáo viên, sinh viên?</Card.Header>
                <Card.Body>
                    <Card.Text>Gia nhập vào đội ngũ gia sư của GrowGreen, nhận lớp và có thêm thu nhập từ những kiến thức, kỹ năng giảng dạy của bạn.</Card.Text>
                    <Card.Link href="auth/register">Đăng ký làm gia sư</Card.Link>
                    <Card.Link href="auth/login">Đăng nhập vào tài khoản</Card.Link>
                    <Card.Link href="product">Xem danh sách lớp mới</Card.Link>
                </Card.Body>
                <Card.Body>
                    <Button variant="success">Đến trang dành cho gia sư</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>Bạn cần thuê gia sư?</Card.Header>
                <Card.Body>
                    <Card.Title>Trải nghiệm dịch vụ chất lượng và chuyên nghiệp!</Card.Title>
                    <Card.Text>Thật tốn thời gian khi gặp phải gia sư không phù hợp. GrowGreen luôn làm việc chuyên nghiệp và trách nhiệm, bắt đầu từ việc tuyển chọn đến đào tạo gia sư. Đảm bảo gia sư luôn đạt tiêu chuẩn về kiến thức và kỹ năng giảng dạy.</Card.Text>
                </Card.Body>
                <Card.Body>
                    {button}
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>Tại sao chọn trung tâm gia sư GrowGreen?</Card.Header>
                <Card.Body>
                    <CardGroup>
                        {
                            cardContent1.map(
                                (item) => {
                                    return(
                                        <Card key={item.title} className="mx-2">
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>{item.text}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )
                                }
                            )
                        }
                    </CardGroup>
                </Card.Body>
                <Card.Body>
                    {button}
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>Những lợi ích mà bạn có được:</Card.Header>
                <Card.Body>
                    {
                        cardContent2.map(
                            (item) => {
                                return(
                                    <div key={item.text}>
                                        <span className="mx-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        <span>
                                            {item.text}
                                        </span>
                                    </div>
                                )
                            }
                        )
                    }
                </Card.Body>
                <Card.Body>
                    {button}
                </Card.Body>
            </Card>
        </Container>
    )
}