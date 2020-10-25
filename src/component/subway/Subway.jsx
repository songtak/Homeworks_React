import React from 'react';
import SubwayTemplate from './SubwayTemplate';
import { observer } from "mobx-react";
import SubwayMenuList from './SubwayMenuList';


const Subway = observer(() => {


    return (<>
    <SubwayTemplate items={<SubwayMenuList />} needs={null}/>
    </>)
})

export default Subway;