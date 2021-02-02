import React, { useEffect, useState } from "react";
import "../app.css";
import { db } from "../firebase";
//firebase
const Friendship = () => {
    const [name,setName] = useState("");
    const [contact,setContact] = useState("");
    const [message,setMessage] = useState("");

    const [loader,setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setLoader(true);
        
        db.collection("friendships").add({
            name: name,
            contact: contact,
            message: message,
        })
        .then(() => {
              alert("ระบบยังไม่เปิดนะจ๊ะตัวเอง💋");//alert("ข้อมูลถูกส่งเเล้ว ขอบคุณค้าบ🚀");
            setLoader(false);
        })
        .catch(error => {
            alert(error.message);
            setLoader(false);
        });

        setName("");
        setContact("");
        setMessage("");
    };
/////////////////////////////////////////////////
//google sheet
//    const [data, setData] = useState({
//        name:"",
//        contact:"",
//        message:"",
//    });
    
//    const {name1, contact1, message1} = data
    
//   const handleChange = e => {
//        setData({...data, [e.target.name]: e.target.value1 });
//    };
    
//    const handleSubmit1 = async (e) => {
//        e.preventDefault();
//        try {
//          const response = await fetch("https://v1.nocodeapi.com/polawich/google_sheets/RQgPHUpnxYZYMZtY?tabId=Sheet1"
//{
//              method: 'POST',
//              headers: {
//                  'Content-Type': 'application/json'
//              },
//              body: JSON.stringify([[name, contact, message, new Date().toLocaleString()],]),
//            }
//         );
//         await response.json()
//         setData({ ...data, name: "", contact: "", message: ""});
          
//        } catch (err) {
//          console.log(err);
//        }
//    };
/////////////////////////////////////////////////////
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Friendship 👋🏻</h1>

            <lable>ชื่อ:✏️</lable>
            <input placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
//            value1={name1}
//            onChange={handleChange}
            />
            
            <lable>ช่องทางการติดต่อ:🌐</lable>
            <input placeholder="Contact"  
            value={contact}
            onChange={(e) => setContact(e.target.value)}
//            value1={contact1}
//            onChange={handleChange}
            />
      
            <lable>มีอะไรอยากจะบอกเราไหม:📝</lable>
            <textarea placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
//            value1={message1}
//            onChange={handleChange}
            ></textarea>
            
            <button type="Submit" style={{background : loader ? "#ccc" : "rgb(2,2,110)" }}>
                Submit 🍻
            </button>
        </form>
    );
};

export default Friendship;
