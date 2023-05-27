import React, { useEffect, useState } from "react";

import "./Notice.css";

const noticeList = [
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

const Notice = () => {
    const [cardOnOff, setCardOnOff] = useState(noticeList);
    const [showList, setShowList] = useState(noticeList);
    showList.sort((a, b) => b.id - a.id); // id순 정렬 (생성 날짜순으로 id 생성되므로 내림차순)

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
                    {/* <span className="question-mark"></span> */}
                    <span className="notice-title-left">{item.title}</span>
                    <span className="notice-title-right">{item.date}</span>
                </div>
                <div
                    className={
                        noticeList[index].show
                            ? "notice-card-context"
                            : "notice-card-context notice-card-none"
                    }
                >
                    <span className="notice-card-context">{item.context}</span>
                </div>
            </div>
        );
    };

    useEffect(() => {
        setShowList(noticeList);}, []);

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