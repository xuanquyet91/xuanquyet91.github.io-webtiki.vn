import React from 'react'
import {Link} from 'react-router-dom'

function SuggestionsTiki() {
    return (
        <Link to="/Product" class="link-item">
            <div className="suggestionsTiki">
                <div className="suggestions-today">
                    <p>Gợi Ý Hôm Nay</p>
                </div>
                <div className="suggestions-list">
                    <div className="suggestions-item">
                    <div className="suggestionsImage">
                        <img src="https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp" alt="" />
                    </div>
                    <div className="suggestionsTitle">
                        <p>Dành Cho Bạn</p>
                    </div>
                    </div>
                    <div className="suggestions-item">
                    <div className="suggestionsImage">
                        <img src="https://salt.tikicdn.com/cache/w100/ts/tikimsp/65/22/b3/cc7e531e7025d04f35615383255f97fc.png.webp" alt="" />
                    </div>
                    <div className="suggestionsTitle">
                        <p>Mua 1 Tính Tiền 2</p>
                    </div>
                    </div>
                    <div className="suggestions-item">
                    <div className="suggestionsImage">
                        <img src="https://salt.tikicdn.com/cache/w100/ts/personalish/41/99/9a/8898607d7fca4b79775a708c57a8152f.png.webp" alt="" />
                    </div>
                    <div className="suggestionsTitle">
                        <p>Mua 1 Tặng 1</p>
                    </div>
                    </div>
                    <div className="suggestions-item">
                    <div className="suggestionsImage">
                        <img src="https://salt.tikicdn.com/cache/w100/ts/tikimsp/e7/8e/3d/fa2cde2a26135c02279dbe752a9950aa.png.webp" alt="" />
                    </div>
                    <div className="suggestionsTitle">
                        <p>Deal Siêu Hot</p>
                    </div>
                    </div>
                    <div className="suggestions-item">
                    <div className="suggestionsImage">
                        <img src="https://salt.tikicdn.com/cache/w100/ts/personalish/0f/59/9d/215fa18ef72e430eefcbfe5355cab8e2.png.webp" alt="" />
                    </div>
                    <div className="suggestionsTitle">
                        <p>Rẻ Vô Đối</p>
                    </div>
                    </div>
                    <div className="suggestions-item">
                    <div className="suggestionsImage">
                        <img src="https://salt.tikicdn.com/cache/w100/ts/personalish/2c/25/8d/16f4e3834461f44d14b11cdd8a0ce918.png.webp" alt="" />
                    </div>
                    <div className="suggestionsTitle">
                        <p>Đi Chợ Sale</p>
                    </div>
                    </div>
                    <div className="suggestions-item">
                    <div className="suggestionsImage">
                        <img src="https://salt.tikicdn.com/cache/w100/ts/personalish/7d/8a/6e/d8b76e2c43cbd06b7e1aa3ab8c54df64.png.webp" alt="" />
                    </div>
                    <div className="suggestionsTitle">
                        <p>Hàng Mới</p>
                    </div>
                    </div>
                    <div className="suggestions-item">
                    <div className="suggestionsImage">
                        <img src="https://salt.tikicdn.com/cache/w100/ts/personalish/dc/f1/b1/6ba9e529785de3ad1a81b9c569d05aa0.png.webp" alt="" />
                    </div>
                    <div className="suggestionsTitle">
                        <p>Xu Hướng Thời Trang</p>
                    </div>
                    </div>
                </div>
                </div>
            </Link>

    )
}

export default SuggestionsTiki
