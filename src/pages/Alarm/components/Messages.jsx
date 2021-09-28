import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MessagesInfo from "./MessagesInfo";

const MessagesWrapper = styled.div`
    display: block;
    height: 40px;
    margin-top: 25px;

`;

const Messages= ({message}) =>{
    return(
        <MessagesWrapper>
            
            {message.map((m) => (
            <Link to={`/alarm/${m.id}`}>
                    <MessagesInfo
                        nick={m.nick}
                        date={m.date}
                        title={m.title}
                    />
            </Link>
                ))}
            
        </MessagesWrapper>
    );
};

export default Messages;
