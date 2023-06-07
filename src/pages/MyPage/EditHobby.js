import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Add.css"

export default function EditHobby(props) {
    const levelKind = ['비기너', '아마추어', '프로'];

    let userid = localStorage.getItem('userid');

    const [edited, setEdited] = useState(props.data); // 선택한 row의 보호자 데이터 불러오기
    const [hobby, setHobby] = useState({
        usersId: edited.usersId,
        hobbyId: edited.hobbyId,
        hobbyName: edited.hobbyName,
        hobbyLevel: edited.hobbyLevel
    });
    const { hobbyId, hobbyName, hobbyLevel } = hobby;
    console.log(edited);

    // 레벨 변경 시
    const onInputChange = (e) => {
        setHobby({ ...hobby, [e.target.name]: e.target.value })
    };

    // form 제출
    const submitHobby = async (e) => {
        e.preventDefault();
        // e.target.reset();
        console.log(hobby.usersId, hobby.hobbyId)
        await axios.put(`http://localhost:3000/api/v1/hobby/${hobby.usersId}/${hobby.hobbyId}`);
        alert('수정되었습니다!');
        window.close(); //클로즈 먼저해야만 새로고침이 되었음
        window.location.reload();
    };

    return (
        <form onSubmit={submitHobby}>
            <div>
                <h2 class="edit-modal-title"><span style={{color: "#a000c8"}}>"{edited.hobbyName}"</span> 레벨 수정</h2>
            </div>
            <div class="hobby-form-item">
                <label class="hobby-label">취미</label>
                <select class="Write_input" id="hobbyName" name="hobbyName" value={hobbyName} disabled>
                    <option value="" selected>{hobbyName}</option>
                </select>
            </div>

            <div class="hobby-form-item">
                <label class="hobby-label">레벨</label>
                <select class="Write_input" name="hobbyLevel" value={hobbyLevel} onChange={onInputChange} required>
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
                <button class="hobby-form-add" type="submit">수정하기</button>
            </div>
        </form >
    )
}