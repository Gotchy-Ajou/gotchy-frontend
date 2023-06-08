import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./MyHobby.css"

function MyApply() {
    const [applyList, setApplyList] = useState([]);

    let usersId = 1

    // 기존의 가치 신청 List 가져오기
    const loadApplyList = async () => {
        await axios.get(`http://localhost:3000/api/v1/users/${usersId}/my-apply`)
            .then(function (response) {
                console.log(response.data);
                setApplyList(response.data.responseData.map(function (el) {
                    console.log(el);

                    var returnObj = {}
                    returnObj['gotchyDate'] = el.gotchyDate;
                    returnObj['gotchyTime'] = el.gotchyTime;
                    returnObj['gotchyName'] = el.gotchyName;
                    returnObj['gotchyHobby'] = el.gotchyHobby;
                    returnObj['location'] = el.location;
                    returnObj['gotchyMode'] = el.gotchyMode;
                    return returnObj;
                }));
            }).catch(function (reason) {
                console.log(reason);
            });
    }
    useEffect(() => {
        loadApplyList();
    }, []);

    return (
        <div>
            <div className="hobby-title">나의 가치 신청 내역</div>
            <section class="hobbySection">

                <table class="hobbyList">
                    <thead class="hobbyList">
                        <tr class="hobbyList">
                            <th class="hobbyList">날짜</th>
                            <th class="hobbyList">시간</th>
                            <th class="hobbyList">가치</th>
                            <th class="hobbyList">취미</th>
                            <th class="hobbyList">위치</th>
                            <th class="hobbyList">개인모집</th>
                        </tr>
                    </thead>

                    <tbody class="hobbyList">
                        {applyList.map((el) =>
                            <tr class="hobbyList">
                                <td class="hobbyList">{el.gotchyDate}</td>
                                <td class="hobbyList">{el.gotchyTime}</td>
                                <td class="hobbyList">{el.gotchyName}</td>
                                <td class="hobbyList">{el.gotchyHobby}</td>
                                <td class="hobbyList">{el.location}</td>
                                <td class="hobbyList">{el.gotchyMode}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    )
}


export default MyApply