import React, { useState } from 'react';
import './MyPage.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Axios } from 'axios';

const MyPage = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        age: '',
        region: '',
        hobbies: [],
        file: null,
    });

    const [preview, setPreview] = useState(null);

    const { name, age, region, hobbies, file } = userInfo;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
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
          const response = await Axios.post('http://localhost:5000/api/updateUserInfo', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
      
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div>
            <h1>My Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={handleChange} />
                </label>
                <label>
                    Age:
                    <input type="text" name="age" value={age} onChange={handleChange} />
                </label>
                <label>
                    Region:
                    <input type="text" name="region" value={region} onChange={handleChange} />
                </label>
                <div>
                    Hobbies:
                    <label htmlFor="Hobby1">Hobby1</label>
                    <input type="checkbox" id="Hobby1" name="Hobby1" onChange={handleCheckboxChange} />
                    <label htmlFor="Hobby2">Hobby2</label>
                    <input type="checkbox" id="Hobby2" name="Hobby2" onChange={handleCheckboxChange} />
                    <label htmlFor="Hobby3">Hobby3</label>
                    <input type="checkbox" id="Hobby3" name="Hobby3" onChange={handleCheckboxChange} />
                </div>
                <label>
                    Upload your photo:
                    <input type="file" onChange={handleFileChange} />
                </label>
                {preview && <img src={preview} alt="Preview" className="preview" />}
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default MyPage;
