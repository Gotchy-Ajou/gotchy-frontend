import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import AddHobby from './AddHobby';
import EditHobby from './EditHobby';
import "./MyHobby.css"

function MyLevel() {
    // 모달창 나타내기 위한 변수들
    const [selected, setSelected] = useState()
    const [addHobby, setAddHobby] = useState(false); // 새로운 취미 추가 버튼 누를 때에만 활성화
    const [editHobby, setEditHobby] = useState(false); // 취미 수정 버튼 누를 떄에만 활성화
    const [hobbyList, setHobbyList] = useState([
        // { hobbyId: 1, hobbyName: "축구", hobbyLevel: "비기너" },
        // { hobbyId: 2, hobbyName: "노래", hobbyLevel: "프로" }
    ]);
    let userid = localStorage.getItem('userid');

    // 기존의 hobby List 가져오기
    const loadHobbyList = async () => {
        await axios.post('http://8080/api/v1/hobby/1', { userid })
            .then(function (response) {
                setHobbyList(response.data.map(function (el) {
                    console.log(el);

                    var returnObj = {}
                    returnObj['hobbyId'] = el.hobbyId;
                    returnObj['hobbyName'] = el.hobbyName;
                    returnObj['hobbyLevel'] = el.hobbyLevel;

                    return returnObj;
                }));
            }).catch(function (reason) {
                console.log(reason);
            });
    }
    useEffect(() => {
        loadHobbyList();
    }, []);

    // hobby 삭제
    const deleteHobby = async (productId) => {
        // await axios.delete(`http://gotchy.site/HobbyList/${productId}`, { userid }) // usetid 하위의 취미 id 찾아서 삭제하기
        //     .then((result) => {
        //         loadHobbyList();
        //     })
        //     .catch(() => {
        //         alert('오류가 발생했습니다!');
        //     });
    };

    // 모달창에서 편집하기 위함
    const onEdit = (hobby) => {
        let data = {
            hobbyId: hobby.hobbyId,
            hobbyName: hobby.hobbyName,
            hobbyLevel: hobby.hobbyLevel
        };
        console.log(data);
        setSelected(data);
    }

    return (
        <div>
            <div className="hobby-title">나의 취미</div>
            <section class="hobbySection">
                <button class="hobby-add-button" onClick={() => setAddHobby(!addHobby)}>
                    새로운 취미 추가
                </button>

                {addHobby && (
                    <Modal closeModal={() => setAddHobby(!addHobby)}>
                        <AddHobby />
                    </Modal>
                )}

                <table class="hobbyList">
                    <thead class="hobbyList">
                        <tr class="hobbyList">
                            <th class="hobbyList">취미</th>
                            <th class="hobbyList">레벨</th>
                            <th class="hobbyList">수정</th>
                            <th class="hobbyList">삭제</th>
                        </tr>
                    </thead>

                    <tbody class="hobbyList">
                        {hobbyList.map((el) =>
                            <tr class="hobbyList">
                                <td class="hobbyList">{el.hobbyName}</td>
                                <td class="hobbyList">{el.hobbyLevel}</td>
                                <td class="hobbyList">
                                    <button class="hobby-edit-button" onClick={() => {
                                        setEditHobby(!editHobby)
                                        onEdit(el);
                                    }}>수정
                                    </button>
                                    {editHobby && (
                                        <Modal closeModal={() => setEditHobby(!editHobby)}>
                                            <EditHobby data={selected} />
                                        </Modal>
                                    )}
                                </td>
                                <td class="hobbyList">
                                    <button class="hobby-delete-button"
                                        onClick={() => {
                                            const confirmBox = window.confirm(
                                                "'" + el.name + "'" + " 취미를 정말 삭제하시겠습니까?"
                                            )
                                            if (confirmBox === true) {
                                                deleteHobby(el.hobbyId)
                                            }
                                        }}>삭제
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    )
}


export default MyLevel