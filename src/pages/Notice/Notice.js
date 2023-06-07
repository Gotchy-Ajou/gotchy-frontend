import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Notice.css";

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

const Notice = () => {
    // DB에 저장되어 있는 공지사항 리스트 가져오기 위한 변수
    const [noticeList, setNoticeList] = useState([]);

    // 우선 더미데이터로 들어감 => 백이랑 연동 후, tempList => noticeList
    const [cardOnOff, setCardOnOff] = useState(tempList);
    const [showList, setShowList] = useState(tempList);
    showList.sort((a, b) => b.postId - a.postId); // id순 정렬 (생성 날짜순으로 id 생성되므로 내림차순)

    /* [POST / notice]: 공지사항 목록 가져오기 */
    const loadNoticeList = async () => {

        // await axios.post('http://gotchy.site/NoticeList')
        //     .then((res) => {
        //         console.log("[NoticeList.js] useEffect() 성공");
        //         console.log(res.data);
        //         setNoticeList(res.data);
        //     })
        //     .catch((err) => {
        //         console.log("[NoticeList.js] useEffect() 실패");
        //         console.log(err);
        //     });
    }

    useEffect(() => {
        loadNoticeList();
    }, []);

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
                        tempList[index].show
                            ? "notice-card-context"
                            : "notice-card-context notice-card-none"
                    }
                >
                    <span className="notice-card-context">{item.content}</span>
                </div>
            </div>
        );
    };

    useEffect(() => {
        setShowList(tempList);
    }, []);

    return (
        <div className="notice-title-parent">
            <div className="notice-title">공지사항</div>

            <div className="notice-parent">
                <div className="notice-list">
                    {showList.map((item, index) => getQnACard(item, index))}
                </div>
            </div>
        </div>
    );
};

export default Notice;