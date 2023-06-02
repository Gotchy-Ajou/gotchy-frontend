import React, { useState } from 'react';
import './MyPage.css';
import 'react-datepicker/dist/react-datepicker.css';

const MyPage = () => {
    const [userInfo, setUserInfo] = useState({
      name: '',
      age: '',
      region: '',
      hobbies: [],
      file: null,
    });
  
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
    };
  
    return (
        <div>
        <h1>My Page</h1>
        <form>
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
            <label htmlFor="Hobby1"><p> Hobby1 </p></label>
            <input type="checkbox" id=" Hobby1 " name="Hobby1" onChange={handleCheckboxChange} />
            <label htmlFor="Hobby2"> Hobby2 </label>
            <input type="checkbox" id=" Hobby2 " name="Hobby2" onChange={handleCheckboxChange} />
            <label htmlFor="Hobby3"> Hobby3 </label>
            <input type="checkbox" id=" Hobby3 " name="Hobby3" onChange={handleCheckboxChange} />
          </div>
          <label>
            Upload your photo: 
            <input type="file" onChange={handleFileChange} />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  };
  
  export default MyPage;
