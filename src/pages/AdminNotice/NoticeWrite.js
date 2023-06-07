import axios from "axios";
import "./NoticeWrite.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NoticeWrite() {

    const navigate = useNavigate();

    // const [title, setTitle] = useState(null);
    // const [content, setContent] = useState(null);

    // const changeTitle = (e) => {
    //     e.preventDefault();
    //     setTitle(e.target.value);
    // }

    // const changeContent = (e) => {
    //     e.preventDefault();
    //     setContent(e.target.value);
    // }
    const [data, setData] = useState({
        postId: 10,
        title: null,
        content: null,
    });
    const { title, content } = data;

    const onNoticeChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    function submitData() {
        console.log(data);
        axios.post("http://localhost:3000/api/v1/posts", {
            'authorId': 10,
            'title': data.title,
            'content': data.content
        })
            .then((response) => {
                console.log("success");
                console.log(response.data);
                alert("새로운 공지사항을 성공적으로 등록했습니다 :D");
                navigate("/AdminNotice"); // 공지사항 목록 페이지로 이동
            })
            .catch((err) => {
                console.log("error");
                console.log(err);
            });
    };

    /* 공지사항 작성 */
    // const createNotice = async (e) => {
    //     e.preventDefault();
    //     // let formData = new FormData();
    //     // formData.append("title", title);
    //     // formData.append("content", content);

    //     axios.post("http://localhost:3000/api/v1/posts", {
    //         'title': title,
    //         'content': content
    //     })
    //         .then((resp) => {
    //             console.log("[NoticeWrite.js] createNotice() success :D");
    //             console.log(resp.data);
    //             alert("새로운 공지사항을 성공적으로 등록했습니다 :D");
    //             navigate("/AdminNotice"); // 공지사항 목록 페이지로 이동
    //         })
    //         .catch((err) => {
    //             console.log("[NoticeWrite.js] createNotice() error :<");
    //             console.log(err);
    //         });
    // }


    return (

        <div>
            <div className="notice-write-title">새로운 공지사항을 등록해주세요!</div>

            <div class="Write_wrapper">
                <div class="form_container">
                    {/* <form> */}
                        <table>
                            <tbody>

                                <tr>
                                    <th class="Write_header">제목</th>
                                    <td class="Write_input_container">
                                        <input class="Write_input" type="text" name="title" value={title} onChange={e => onNoticeChange(e)} size="50px" />
                                    </td>
                                </tr>

                                <tr>
                                    <th class="Write_header">내용</th>
                                    <td class="Write_input_container">
                                        <textarea class="Write_input" name="content" value={content} onChange={e => onNoticeChange(e)} rows="10"></textarea>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div className="my-5 d-flex justify-content-center">
                            <button className="Write_submit_button" onClick={() => submitData()}>등록하기</button>
                            {/* <button type="submit" className="Write_submit_button"><i className="fas fa-pen"></i> 등록하기</button> */}
                        </div>
                    {/* </form> */}

                </div>
            </div>
        </div>
    );
}

export default NoticeWrite;