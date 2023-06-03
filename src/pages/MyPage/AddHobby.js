import React, { useState, useEffect } from 'react';
import axios from 'axios';
import loadHobbyList from "./MyHobby"
import "./Add.css"

export default function AddHobby() {
    const hobbyKind = ['축구', '농구', '족구', '탁구', '배드민턴', '테니스',
        '합주(밴드, 오케스트라)', '노래', '춤', '독서토론', '보드게임'];
    const levelKind = ['비기너', '아마추어', '프로'];

    let userid = localStorage.getItem('userid');
    const [hobby, setHobby] = useState({
        hobbyId: 0,
        hobbyName: "",
        hobbyLevel: ""
    });
    const { hobbyName, hobbyLevel } = hobby;

    const onInputChange = e => {
        setHobby({ ...hobby, [e.target.name]: e.target.value });
    };

    const submitHobby = async (e) => {
        e.preventDefault();
        e.target.reset();
        console.log(hobby);
        await axios.post("http://gotchy.site/Hobby/Hobby_submit", { userid, hobby })
            .then(function (response) {
                console.log(response.data);
                // if(response.data === "success") {
                alert('추가되었습니다!');
                // }
                // else {
                //     alert('잘못 입력된 값이 존재합니다!');
                // }

            }).catch(function (reason) {
                console.log(reason.data);
            });

        window.close(); //클로즈 먼저해야만 새로고침이 되었음
        window.location.reload();
    };

    return (
        <form onSubmit={submitHobby}>
            <div>
                <h2 class="add-modal-title">취미 추가</h2>
            </div>
            <div class="hobby-form-item">
                <label class="hobby-label">취미</label>
                <select class="Write_input" id="hobbyName" name="hobbyName" value={hobbyName} onChange={e => onInputChange(e)} required>
                    <option value="" selected>취미를 선택하세요.</option>
                    {hobbyKind.map((option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div class="hobby-form-item">
                <label class="hobby-label">레벨</label>
                <select class="Write_input" id="hobbyLevel" name="hobbyLevel" value={hobbyLevel} onChange={e => onInputChange(e)} required>
                    <option value="" selected>레벨을 선택하세요.</option>
                    {levelKind.map((option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button class="hobby-form-add" type="submit">추가하기</button>
            </div>
        </form>
    )
}