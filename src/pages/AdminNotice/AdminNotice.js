import React, { useParams, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Notice/Notice.css";

const tempList = [
    {
        id: 1,
        title: "Notice 1",
        context: "Notice 1의 내용입니다.",
        date: "2022-05-20"
    },
    {
        id: 2,
        title: "Notice 2",
        context: "Notice 2의 내용입니다.",
        date: "2022-08-20"
    },
    {
        id: 3,
        title: "Notice 3",
        context: "Notice 3의 내용입니다.",
        date: "2023-05-20"
    }
];

const AdminNotice = () => {
    const [notice, setNotice] = useState({
        id: 0,
        title: "",
        context: "",
        date: ""
    });

    const { id, title, context, date } = notice;

    // DB에 저장되어 있는 공지사항 리스트 가져오기 위한 변수
    const [noticeList, setNoticeList] = useState([]);

    // Link 용 (함수) 
    let navigate = useNavigate();

    // 우선 더미데이터로 들어감 => 백이랑 연동 후, tempList => noticeList
    const [cardOnOff, setCardOnOff] = useState(tempList);
    const [showList, setShowList] = useState(tempList);
    showList.sort((a, b) => b.id - a.id); // id순 정렬 (생성 날짜순으로 id 생성되므로 내림차순)

    /* [POST / notice]: 공지사항 목록 가져오기 */
    const loadNoticeList = async () => {

        await axios.post('http://gotchy.site/NoticeList')
            .then((res) => {
                console.log("[NoticeList.js] useEffect() 성공");
                console.log(res.data);
                setNoticeList(res.data);
            })
            .catch((err) => {
                console.log("[NoticeList.js] useEffect() 실패");
                console.log(err);
            });
    }

    useEffect(() => {
        loadNoticeList();
    }, []);

    /* 공지사항 항목 삭제하기 */
    const deleteNotice = (productId) => {
        axios.delete(`http://gotchy.site/NoticeList/${id}`)
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
                    <span className="notice-title-right">{item.date}</span>
                </div>
                <div
                    className={
                        tempList[index].show
                            ? "notice-card-context"
                            : "notice-card-context notice-card-none"
                    }
                >
                    <span className="notice-card-context">{item.context}</span>
                    <div className="notice-buttons">
                        <button className="notice-delete-button" onClick={() => {
                            const confirmBox = window.confirm(
                                "선택한 공지사항 항목을 정말 삭제하시겠습니까?"
                            )
                            if (confirmBox === true) {
                                deleteNotice(item.id)
                            }
                        }}>삭제</button>
                        <Link className="notice-update-button" to={{ pathname: `/NoticeUpdate/${item.id}` }}>수정</Link>
                    </div>
                </div>
            </div>
        );
    };

    useEffect(() => {
        setShowList(tempList);
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