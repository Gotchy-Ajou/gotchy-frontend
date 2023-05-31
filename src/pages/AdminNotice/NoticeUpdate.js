import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NoticeWrite.css";

function NoticeUpdate() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const param = useParams(); // 파라미터 가져오기

    useEffect(() => {
        console.log(param.postId);
        const getNotice = async () => {
            const { data } = await axios.post(`http://gotchy.site/NoticeList/${param.postId}`);
            return data;
        }
        getNotice().then((result) => {
            setTitle(result.title);
            setContent(result.content);
        });
    }, [])

    const changeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const changeContent = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    }

    /* 공지사항 업데이트 */
    const updateNotice = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("postId", param.postId);
        formData.append("title", title);
        formData.append("content", content);

        axios.post("http://gotchy.site/NoticeList/update", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then((resp) => {
                console.log("[NoticeUpdate.js] updateNotice() success :D");
                console.log(resp.data);
                alert("공지사항을 성공적으로 수정했습니다 :D");
                navigate("/AdminNotice"); // 공지사항 목록 페이지로 이동
            })
            .catch((err) => {
                console.log("[NoticeUpdate.js] updateNotice() error :<");
                console.log(err);
            });
    }


    return (
        <div>
            <div className="notice-write-title">공지사항을 수정해주세요!</div>

            <div class="Write_wrapper">
                <div class="form_container">
                    <form onSubmit={updateNotice}>
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
                            <button type="submit" className="Write_submit_button"><i className="fas fa-pen"></i>수정하기</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );

}

export default NoticeUpdate;