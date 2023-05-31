import './Manage.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

function PartnerManage() {
    const [record, setRecord] = useState([
        {
            name: "아주 풋살경기장",
            region: "경기",
            phone: "031-222-1234",
            durate: "3년"

        },
        {
            name: "리리라라 합주실",
            region: "서울",
            phone: "070-8080-5678",
            durate: "1년"
        },
        {
            name: "자이언츠 베이스볼",
            region: "부산",
            phone: "031-6505-9956",
            durate: "5년"
        }
    ]);

    /* 제휴업체 정보 로드하기 */
    const loadPartnerRecord = async () => {
        await axios.post('http://gotchy.site/partners')
            .then(function (response) {
                setRecord(response.data.map(function (el, idx) {
                    var returnObj = {}

                    returnObj['name'] = el.name;
                    returnObj['region'] = el.region;
                    returnObj['phone'] = el.phone;
                    returnObj['durate'] = el.durate;

                    return returnObj;
                }));
            }).catch(function (reason) {
                console.log(reason);
            });

    }
    useEffect(() => {
        loadPartnerRecord();
    }, []);

    return (
        <div>
            <div className="manage-title">가치 제휴업체 관리</div>
            <section class="tableSection">
                <table class="admin">
                    <thead>
                        <tr class="admin">
                            <th class="admin">제휴업체</th>
                            <th class="admin">지역</th>
                            <th class="admin">연락처</th>
                            <th class="admin">계약기간</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((user, idx) =>
                            <tr class="admin" key={idx}>
                                <td class="admin">{user.name}</td>
                                <td class="admin">{user.region}</td>
                                <td class="admin">{user.phone}</td>
                                <td class="admin">{user.durate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </section >
        </div>
    )
}

export default PartnerManage;