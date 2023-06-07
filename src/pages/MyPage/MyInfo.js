import React, { useState, useEffect } from 'react';
import './MyInfo.css';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { Axios } from 'axios';

const MyInfo = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        age: '',
        region: '',
        hobbies: [],
        file: null,
        bankAccount: '',
        cashBalance: 0,
    });

    const [preview, setPreview] = useState(null);

    const { name, age, region, hobbies, file, bankAccount, cashBalance } = userInfo;

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/getUserInfo'); // your API endpoint here
                setUserInfo(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: name === 'hobbies' ? value.split(', ').filter((hobby) => hobby !== '') : value,
        });
    };



    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setUserInfo({
            ...userInfo,
            hobbies: checked ? [...hobbies, name] : hobbies.filter((hobby) => hobby !== name),
        });
    };

    const handleFileChange = (e) => {
        setUserInfo({
            ...userInfo,
            file: e.target.files[0],
        });

        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('age', age);
        formData.append('region', region);
        for (let hobby of hobbies) {
            formData.append('hobbies', hobby);
        }
        formData.append('file', file);

        try {
            // Send the updated user info back to the server
            const response = await axios.post('http://localhost:5000/api/updateUserInfo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    // This is a mock function for cash charging. You should replace it with real API call.
    const handleCashCharge = async (e) => {
        console.log("Cash charging...");
        // You need to call actual API to charge cash
    }

    return (
        <div>
            <div className="hobby-title">나의 정보</div>
            <div style={{ margin: "auto", textAlign: "center" }}>
                <form class="myPage-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            성함:
                            <input class="myPage-input" type="text" name="name" value={name} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            나이:
                            <input class="myPage-input" type="text" name="age" value={age} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            지역:
                            <input class="myPage-input" type="text" name="region" value={region} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            취미:
                            <input class="myPage-input" type="text" name="hobbies" value={hobbies.join(', ')} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            계좌 정보:
                            <input class="myPage-input" type="text" name="bankAccount" value={bankAccount} onChange={handleChange} disabled />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            잔액:
                            <input class="myPage-input" type="text" name="cashBalance" value={cashBalance} onChange={handleChange} disabled />
                        </label>
                        <button class="myPage-button" type="button" onClick={handleCashCharge}>충전하기</button>
                    </div>
                    <div className="form-group">
                        <label>
                            사진 업로드:
                            <input class="myPage-input" type="file" onChange={handleFileChange} />
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
