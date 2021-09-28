import React from 'react'
import styled from 'styled-components';
import {COLORS} from '../../../components/Colors'

const MessageInfoWrapper=styled.div`
    padding: 10px;
    border-bottom: solid 1px ${COLORS.grey_light};
    
    .container {
        display: flex;
        justify-content: space-between;
    }

    .name {
        font-size: 1em;
        color:${COLORS.black};
        display: inline-block;

    }
    .date {
        font-size: 0.5em;
        color:${COLORS.grey_500};
        display: inline-block;
        
    }

    .title {
        margin-top: 5px;
        width: 400;
        height: 20px;
        font-size: 0.8em;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

`;


const MessagesInfo = ({id,nick, date, title})=>{
    return(
        <MessageInfoWrapper>
        <div className = "container">
            <p className="name">{nick}</p>
            <p className="date">{date}</p>
        </div>
        <p className="title">{title}</p>
        </MessageInfoWrapper>
    );
};

export default MessagesInfo;