import React from 'react'

import './css/about.css'

const About = () => {
    return(
        <div className="about">
            <div className="content">
                <p>Catena's Blog là một webblog cá nhân hoạt động từ ngày</p>
                <h4>Mục tiêu</h4>
                <p>Mục tiêu chính của mình khi lập blog này là để một thằng sinh viên như mình tập code.</p>
                <p>Mình muốn chia sẻ những điều thú vị, những câu chuyện đến với mọi người.</p>
                <p>Blog của mình vẫn đang trong quá trình xây dựng thêm tính năng nhé.</p>
                <h4>Tôn chỉ</h4>
                <p>Nội dung các bài viết hoàn toàn miễn phí.</p>
                <h4>Vấn đề bản quyền</h4>
                <p>Hai đầu truyện Detective Conan và OnePiece được chia sẻ lại:</p>
                <ul>
                    <li>
                        Detective Conan lấy từ kenhsinhvien.vn
                        <a className="btn btn-link" href="https://kenhsinhvien.vn/forum/conan-reading-room.510/" target="blank">Go to this page</a>
                    </li>
                    <li>
                        OnePiece lấy từ sachvui.com
                        <a className="btn btn-link" href="https://sachvui.com/ebook/truyen-tranh-one-piece-dao-hai-tac-eiichiro-oda.2846.html" target="blank">Go to this page</a>
                    </li>
                </ul>
                <p>Nếu có bất kì nội dung nào vi phạm bản quyền xin vui lòng gửi Email về <strong>hungnh99.ptit@gmail.com</strong>, kèm theo nội dung vi phạm và văn bản yêu cầu nếu có.</p>
                <h4>Lời kết</h4>
                <p>Blog luôn hoan nghênh và đón nhận các đóng góp của mọi người để cung cấp bài viết đa dạng và phù hợp hơn.<br/>Thân ái,</p>
            </div>
        </div>
    )
}

export default About