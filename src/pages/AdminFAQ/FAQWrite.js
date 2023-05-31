import axios from "axios";
import "../AdminNotice/NoticeWrite.css"; // css 동일하므로 컴포넌트 갖다 쓰기

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tempCategories } from "./AdminFAQ";

function FAQWrite() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [context, setContext] = useState("");
    const [category, setCategory] = useState("");

    const changeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const changeContext = (e) => {
        e.preventDefault();
        setContext(e.target.value);
    }

    const changeCategory = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
    }

    /* FAQ 작성 */
    const createFAQ = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("title", title);
        formData.append("context", context);


        axios.post("http://gotchy.site/FAQList/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then((resp) => {
                console.log("[FAQWrite.js] createFAQ() success :D");
                console.log(resp.data);
                alert("새로운 공지사항을 성공적으로 등록했습니다 :D");
                navigate("/AdminFAQ"); // FAQ 목록 페이지로 이동
            })
            .catch((err) => {
                console.log("[FAQWrite.js] createFAQ() error :<");
                console.log(err);
            });
    }


    return (

        <div>
            <div className="notice-write-title">새로운 FAQ를 등록해주세요!</div>

            <div class="Write_wrapper">
                <div class="form_container">
                    <form onSubmit={createFAQ}>
                        <table>
                            <tbody>

                                <tr>
                                    <th class="Write_header">카테고리</th>
                                    <td class="Write_input_container">
                                        <select class="Write_input" id="category" name="category" value={category} onChange={e => changeCategory} required>
                                            <option value="" selected>카테고리를 선택하세요.</option>
                                            {tempCategories.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.name}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <th class="Write_header">제목</th>
                                    <td class="Write_input_container">
                                        <input class="Write_input" type="text" value={title} onChange={changeTitle} size="50px" />
                                    </td>
                                </tr>

                                <tr>
                                    <th class="Write_header">내용</th>
                                    <td class="Write_input_container">
                                        <textarea class="Write_input" value={context} onChange={changeContext} rows="10"></textarea>
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

export default FAQWrite;