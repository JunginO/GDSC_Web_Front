import React from 'react'
import { Link } from 'react-router-dom';
import {dummyDetailMessage} from  "../../../components/dummyData";
import styled from 'styled-components';
import {COLORS} from '../../../components/Colors'

import arrow from "../../../assets/vector/vectorRight.svg";


const MessagesDetailWrapper=styled.div`
    display: block;
    height: 40px;
    margin-top: 25px;

    .inner {
        padding: 10px;
        border-bottom: solid 1px ${COLORS.grey_light};
    }

    .container {
        display: flex;
        justify-content: space-between;
    }

    .name {
        font-size: 0.8em;
        color:${COLORS.black};
        display: inline-block;

    }

    .date {
        font-size: 0.5em;
        color:${COLORS.grey_500};
        display: inline-block;
        
    }

    .contents {
        margin-top: 5px;
        width: 400;
        height: flex;
        font-size: 0.8em;
        white-space: normal;
        
    }
  

    .arrange-center {
    text-align: center;
    align-items: center;
    margin:10px;
    height: 20px;
    }
    h1 {
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    display:inline-block;
    margin: 0px auto;
    padding: 0px 0px 5px 0px;  
    width: 50%;
    }
    .back-button{
        width:15px;
        display: inline-block;
    }
    .reverse{
        transform: scaleX(-1);
        float:left;
    }

`

const MessagesDetail = (props) =>{
    console.log(props);
    return(
        <MessagesDetailWrapper>
            <div className="arrange-center">
            <button class="back-button"><img src={arrow} alt="뒤로 가기" class="reverse" /></button>
            <h1>익명</h1>
            </div>
            {dummyDetailMessage.map((m) => (
                <div className = "inner" >
                    <div className = "container">
                        <p className = "name" style={m.isFrom ? { color:'green'} : {color : 'yellow'}}>{m.isFrom?"받은쪽지":"보낸쪽지"}</p>
                        <p className = "date">{m.date}</p>
                    </div>        
                    <p className = "contents">{m.contents}</p>
                </div>
            
                ))}
            
        </MessagesDetailWrapper>
    );
}
export default MessagesDetail;