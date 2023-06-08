import './Manage.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserManage() {
    const [record, setRecord] = useState([]);

    /* 유저 정보 로드하기 */
    const loadUserRecord = async () => {
        await axios.get('http://localhost:3000/api/v1/users')
            .then(function (response) {
                setRecord(response.data.responseData.map(function (el, idx) {
                    var returnObj = {}

                    returnObj['usersId'] = el.usersId;
                    returnObj['name'] = el.name;
                    returnObj['nickname'] = el.nickname;
                    returnObj['gender'] = el.gender;
                    returnObj['age'] = el.age;
                    returnObj['phone'] = el.phone;
                    returnObj['region'] = el.region;

                    return returnObj;
                }));
            }).catch(function (reason) {
                console.log(reason);
            });

    }
    useEffect(() => {
        loadUserRecord();
    }, []);

    return (
        <div>
            <div className="manage-title">가치 회원 관리</div>
            <section class="tableSection">
                <table class="admin">
                    <thead>
                        <tr class="admin">
                            <th class="admin">ID</th>
                            <th class="admin">이름</th>
                            <th class="admin">닉네임</th>
                            <th class="admin">성별</th>
                            <th class="admin">나이</th>
                            <th class="admin">연락처</th>
                            <th class="admin">지역</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((user, idx) =>
                            <tr class="admin" key={idx}>
                                <td class="admin">{user.usersId}</td>
                                <td class="admin">{user.name}</td>
                                <td class="admin">{user.nickname}</td>
                                <td class="admin">{user.gender}</td>
                                <td class="admin">{user.age}</td>
                                <td class="admin">{user.phone}</td>
                                <td class="admin">{user.region}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </section >
        </div>
    )
}

export default UserManage;