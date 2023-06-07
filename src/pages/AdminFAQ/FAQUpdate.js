import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../AdminNotice/NoticeWrite.css"; // css 동일하므로 컴포넌트 갖다 쓰기

import { tempCategories } from "./AdminFAQ";

function FAQUpdate() {

    const navigate = useNavigate();

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [category, setCategory] = useState("");

    const param = useParams(); // 파라미터 가져오기

    useEffect(() => {
        // console.log(param.faqId);
        // const getFAQ = async () => {
        //     const { data } = await axios.post(`http://gotchy.site/FAQList/${param.faqId}`);
        //     return data;
        // }
        // getFAQ().then((result) => {
        //     setQuestion(result.question);
        //     setAnswer(result.answer);
        //     setCategory(result.category);
        // });
    }, [])

    const changeQuestion = (e) => {
        e.preventDefault();
        setQuestion(e.target.value);
    }

    const changeAnswer = (e) => {
        e.preventDefault();
        setAnswer(e.target.value);
    }

    const changeCategory = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
    }

    /* FAQ 업데이트 */
    const updateFAQ = async (e) => {
        // e.preventDefault();
        // let formData = new FormData();
        // formData.append("faqId", param.faqId);
        // formData.append("question", question);
        // formData.append("answer", answer);
        // formData.append("category", category);

        // axios.post("http://gotchy.site/FAQList/update", formData, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     }
        // })
        //     .then((resp) => {
        //         console.log("[FAQWrite.js] createFAQ() success :D");
        //         console.log(resp.data);
        //         alert("새로운 FAQ를 성공적으로 등록했습니다 :D");
        //         navigate("/AdminFAQ"); // FAQ 목록 페이지로 이동
        //     })
        //     .catch((err) => {
        //         console.log("[FAQWrite.js] createFAQ() error :<");
        //         console.log(err);
        //     });
    }


    return (

        <div>
            <div className="notice-write-title">FAQ를 수정해주세요!</div>

            <div class="Write_wrapper">
                <div class="form_container">
                    <form onSubmit={updateFAQ}>
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
                                    <th class="Write_header">질문</th>
                                    <td class="Write_input_container">
                                        <input class="Write_input" type="text" value={question} onChange={changeQuestion} size="50px" />
                                    </td>
                                </tr>

                                <tr>
                                    <th class="Write_header">답변</th>
                                    <td class="Write_input_container">
                                        <textarea class="Write_input" value={answer} onChange={changeAnswer} rows="10"></textarea>
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

export default FAQUpdate;