import React, {useState} from "react";

import BottomNavigation from "../../layout/BottomNavigation";
import Messages from "./components/Messages";
import TopNavagation from "../../layout/TopNavigation";
import { dummyMessage } from "../../components/dummyData";
import styled from "styled-components";

const AlarmWrapper=styled.div`
  width: 100%;
  height: calc(100% - 70px);  
  padding-top: 20px;

    .top-navigation{
        margin:12px;
}
    h2{
        text-decoration: underline;
    }
`

const Index = () => {
    return(
        <AlarmWrapper>
            <div className="top-navigation">
               <h2>쪽지함</h2>
            </div>
            <Messages message={dummyMessage} />
            
            
            
            <div className="bottom-navigation">
            <BottomNavigation  activeNum={3}></BottomNavigation>
            </div>
        </AlarmWrapper>
    );
};

export default Index;