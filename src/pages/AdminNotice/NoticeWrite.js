import axios from "axios";
import "./NoticeWrite.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NoticeWrite() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const changeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const changeContent = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    }

    /* 공지사항 작성 */
    const createNotice = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);


        axios.post("http://gotchy.site/NoticeList/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then((resp) => {
                console.log("[NoticeWrite.js] createNotice() success :D");
                console.log(resp.data);
                alert("새로운 공지사항을 성공적으로 등록했습니다 :D");
                navigate("/AdminNotice"); // 공지사항 목록 페이지로 이동
            })
            .catch((err) => {
                console.log("[NoticeWrite.js] createNotice() error :<");
                console.log(err);
            });
    }


    return (

        <div>
            <div className="notice-write-title">새로운 공지사항을 등록해주세요!</div>

            <div class="Write_wrapper">
                <div class="form_container">
                    <form onSubmit={createNotice}>
                        <table>
                            <tbody>

                                <tr>
                                    <th class="Write_header">제목</th>
                                    <td class="Write_input_container">
                                        <input class="Write_input" type="text" value={title} onChange={changeTitle} size="50px" />
                                    </td>
                                </tr>

                                <tr>
                                    <th class="Write_header">내용</th>
                                    <td class="Write_input_container">
                                        <textarea class="Write_input" value={content} onChange={changeContent} rows="10"></textarea>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div className="my-5 d-flex justify-content-center">
                            <button type="submit" className="Write_submit_button"><i className="fas fa-pen"></i> 등록하기</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default NoticeWrite;