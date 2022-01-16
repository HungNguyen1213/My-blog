import React from 'react'
import { Link } from 'react-router-dom'

import './css/relax.css'

const Relax = () => {
    return(
        <div className="relax">
            <div className="content">
                <div className="topic">
                    <h3>Comic</h3>
                    <hr/>
                    <p>Đây là một vài bộ truyện tranh mà mình cóp nhặt trên mạng về up lại.
                        Chủ yếu là để mình đọc :v nhân tiện chia sẻ đến với các bạn có cùng sở thích đọc truyện với mình.
                    </p>
                    <Link to="/relax/comic" className="btn btn-secondary"><i className="fas fa-angle-double-right fa-lg"></i></Link>
                </div>
                <div className="topic">
                    <h3>Beautiful Girls</h3>
                    <hr/>
                    <p>Beautiful Girls là chuyên mục mỗi ngày mình sẽ up thêm một ảnh. Mình thấy nên các bạn cũng phải thấy :v</p>
                    <Link to="/relax/beautiful-girls" className="btn btn-secondary"><i className="fas fa-angle-double-right fa-lg"></i></Link>
                </div>
            </div>
        </div>
    )
}
export default Relax