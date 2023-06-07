import React, { useState, useEffect } from 'react';
import './MyInfo.css';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { Axios } from 'axios';

const MyInfo = () => {
    const [userInfo, setUserInfo] = useState({
        name: null,
        age: null,
        region: null,
        hobbyList: [],
        gotchyList: [],
        account: null,
    });

    let usersId = 1;
    const [preview, setPreview] = useState(null);
    const { name, age, region, hobbyList, gotchyList, account } = userInfo;

    const loadMyInfo = async () => {
        await axios.get(`http://localhost:3000/api/v1/users/${usersId}`)
            .then(function(response) {
                console.log(response.data);
                setUserInfo(response.data.responseData.map(function (el) {
                    console.log(el);

                    var returnObj = {}
                    returnObj['name'] = el.name;
                    returnObj['age'] = el.age;
                    returnObj['region'] = el.region;
                    returnObj['hobbyList'] = el.hobbies;
                    returnObj['gotchyList'] = el.bankAccount;
                    returnObj['account'] = el.cashBalance;

                    return returnObj;
                }));
            }).catch(function (reason) {
                console.log(reason);
            });
    }
    useEffect(() => {
        loadMyInfo();
    }, []);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserInfo({
    //         ...userInfo,
    //         [name]: name === 'hobbies' ? value.split(', ').filter((hobby) => hobby !== '') : value,
    //     });
    // };



    // const handleCheckboxChange = (e) => {
    //     const { name, checked } = e.target;
    //     setUserInfo({
    //         ...userInfo,
    //         hobbies: checked ? [...hobbies, name] : hobbies.filter((hobby) => hobby !== name),
    //     });
    // };

    // const handleFileChange = (e) => {
    //     setUserInfo({
    //         ...userInfo,
    //         file: e.target.files[0],
    //     });

    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPreview(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     } else {
    //         setPreview(null);
    //     }
    // };
    // const handleSubmit = async (e) => {
    //     // e.preventDefault();

    //     // const formData = new FormData();
    //     // formData.append('name', name);
    //     // formData.append('age', age);
    //     // formData.append('region', region);
    //     // for (let hobby of hobbies) {
    //     //     formData.append('hobbies', hobby);
    //     // }
    //     // formData.append('file', file);

    //     // try {
    //     //     // Send the updated user info back to the server
    //     //     const response = await axios.post('http://localhost:5000/api/updateUserInfo', formData, {
    //     //         headers: {
    //     //             'Content-Type': 'multipart/form-data',
    //     //         },
    //     //     });

    //     //     console.log(response.data);
    //     // } catch (error) {
    //     //     console.error(error);
    //     // }
    // };


    // // This is a mock function for cash charging. You should replace it with real API call.
    // const handleCashCharge = async (e) => {
    //     console.log("Cash charging...");
    //     // You need to call actual API to charge cash
    // }

    return (
        <div>
            <div className="hobby-title">나의 정보</div>
            <div style={{ margin: "auto", textAlign: "center" }}>
                <form class="myPage-form">
                    <div className="form-group">
                        <label>
                            이름:
                            <div class="myPage-input">{userInfo.name}</div>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            나이:
                            <div class="myPage-input">{userInfo.age}</div>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            지역:
                            <div class="myPage-input">{userInfo.region}</div>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            취미:
                            <div class="myPage-input">{userInfo.hobbyList}</div>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            신청내역
                            <div class="myPage-input">{userInfo.gotchyList}</div>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            계좌:
                            <div class="myPage-input">{userInfo.account}</div>
                        </label>
                        <button class="myPage-button" type="button">충전하기</button>
                    </div>
                    <div className="form-group">
                        <label>
                            사진 업로드:
                            <input class="myPage-input" type="file"/>
                        </label>
                        {preview && <img src={preview} alt="Preview" className="preview" />}
                        <button class="myPage-button" type="submit">수정하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyInfo;
