import React, { useParams, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Notice/Notice.css";

const tempList = [
    {
        postId: 1,
        title: "Notice 1",
        content: "Notice 1의 내용입니다.",
        createdDate: "2022-05-20"
    },
    {
        postId: 2,
        title: "Notice 2",
        content: "Notice 2의 내용입니다.",
        createdDate: "2022-08-20"
    },
    {
        postId: 3,
        title: "Notice 3",
        content: "Notice 3의 내용입니다.",
        createdDate: "2023-05-20"
    }
];

const AdminNotice = () => {
    const [notice, setNotice] = useState({
        postId: 0,
        title: null,
        content: null,
        createdDate: null
    });

    const { postId, title, content, createdDate } = notice;

    // DB에 저장되어 있는 공지사항 리스트 가져오기 위한 변수
    const [noticeList, setNoticeList] = useState([]);

    // Link 용 (함수) 
    let navigate = useNavigate();

    // 우선 더미데이터로 들어감 => 백이랑 연동 후, tempList => noticeList
    const [cardOnOff, setCardOnOff] = useState([]);
    const [showList, setShowList] = useState([]);
    showList.sort((a, b) => b.postId - a.postId); // id순 정렬 (생성 날짜순으로 id 생성되므로 내림차순)

    /* [POST / notice]: 공지사항 목록 가져오기 */
    const loadNoticeList = async () => {

        await axios.get('http://localhost:3000/api/v1/posts')
            .then(function (response) {
                setNoticeList(response.data.responseData.map(function (el, idx) {
                    console.log("[NoticeList.js] useEffect() 성공");
                    console.log(response.data);
                    var returnObj = {}

                    returnObj['postId'] = el.postId;
                    returnObj['title'] = el.title;
                    returnObj['content'] = el.content;
                    returnObj['createdDate'] = el.createdDate;
                    returnObj['show'] = false;

                    return returnObj;
                }));
            }).catch(function (reason) {
                console.log("[NoticeList.js] useEffect() 실패");
                console.log(reason);
            });
    }

    useEffect(() => {
        loadNoticeList();
    }, []);

    /* 공지사항 항목 삭제하기 */
    const deleteNotice = (postId) => {
        axios.delete(`http://localhost:3000/api/v1/posts/${postId}`)
            .then((result) => {
                loadNoticeList();
            })
            .catch(() => {
                alert('오류가 발생했습니다!');
            });
    };

    const getQnACard = (item, index) => {
        return (
            <div className="notice-card" key={index}>
                <div
                    className="notice-card-title"
                    onClick={() => {
                        let tempCard = cardOnOff;
                        tempCard[index].show = !tempCard[index].show;
                        setCardOnOff([...tempCard]);
                    }}
                >
                    <span className="notice-title-left">{item.title}</span>
                    <span className="notice-title-right">{item.createdDate}</span>
                </div>
                <div
                    className={
                        noticeList[index].show
                            ? "notice-card-context"
                            : "notice-card-context notice-card-none"
                    }
                >
                    <span className="notice-card-context">{item.content}</span>
                    <div className="notice-buttons">
                        <button className="notice-delete-button" onClick={() => {
                            const confirmBox = window.confirm(
                                "선택한 공지사항 항목을 정말 삭제하시겠습니까?"
                            )
                            if (confirmBox === true) {
                                deleteNotice(item.postId)
                            }
                        }}>삭제</button>
                        <Link className="notice-update-button" to={{ pathname: `/NoticeUpdate/${item.postId}` }}>수정</Link>
                    </div>
                </div>
            </div>
        );
    };

    useEffect(() => {
        setShowList(noticeList);
    }, []);

    return (
        <div className="notice-title-parent">
            <div className="notice-title">공지사항 관리</div>
            <div className="notice-write">
                <Link className="notice-write-button" to="/NoticeWrite">공지사항 등록</Link>
            </div>

            <div className="notice-parent">
                <div className="notice-list">
                    {showList.map((item, index) => getQnACard(item, index))}
                </div>
            </div>
        </div>
    );
};

export default AdminNotice;