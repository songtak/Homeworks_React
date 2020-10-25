import React from 'react';
import SubwayTemplate from './SubwayTemplate';
import { observer } from "mobx-react";
import SubwayMenuList from './SubwayMenuList';
import NeedsList from './NeedsList';


const Subway = observer(() => {


    return (<>
    <SubwayTemplate items={<SubwayMenuList />} needs={<NeedsList/>}/>
    </>)
})

export default Subway;