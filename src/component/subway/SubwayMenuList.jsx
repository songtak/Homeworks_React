import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useStore } from '../../Stores/Helper';
import SubwayMenu from './SubwayMenu';


const bread = [
    {name: "플랫브레드", price: 1000 },{name: "통밀빵", price: 1500 },{name: "식빵", price: 800 },
    {name: "바게트빵", price: 1500 },{name: "글루텐프리", price: 1500 },{name: "쌀식빵", price: 1200 }
]

const meat = [
    {name: "돼지고기", price: 2500 },{name: "소고기", price: 3000 },{name: "닭고기", price: 2000 },
    {name: "양고기", price: 3000 },{name: "콩고기", price: 2000 },{name: "생선", price: 2500 }
]

const veggie = [
    {name: "양상추", price: 500 },{name: "양배추", price: 300 },{name: "파프리카", price: 1200 },
    {name: "올리브", price: 500 },{name: "토마토", price: 800 },{name: "피클", price: 300 },
    {name: "양파", price: 300 },{name: "할라피뇨", price: 300 },{name: "아보카도", price: 1500 }
]

const source = [
    {name: "케챱", price: 0 },{name: "마요네즈", price: 0 },{name: "발사믹", price: 500 },
    {name: "렌치드레싱", price: 300 },{name: "머스타드", price: 300 },{name: "사워크림", price: 300 },
    {name: "데리야끼", price: 400 },{name: "칠리", price: 200 },{name: "스위트칠리", price: 200 }
]

const topping = [
    {name: "체다치즈", price: 500 },{name: "크림치즈", price: 1000 },{name: "베이컨", price: 1500 },
    {name: "계란후라이", price: 500 }
]


const SubwayMenuList = observer(() => {
    const { subwayStore } = useStore();

    const onPut = (name, price) => {
        subwayStore.put(name, price)
      }

    const menuLists  = subwayStore.menus.map((item) => <SubwayMenu {...item} key={item.name} onClick={onPut}/>)

    const onMenu = (menu) => {
        subwayStore.menus = menu
    } 

    return (
        <div>
            <button onClick={()=>onMenu(bread)}>bread</button>
            <button onClick={()=>onMenu(meat)}>meat</button>
            <button onClick={()=>onMenu(veggie)}>veggie</button>
            <button onClick={()=>onMenu(source)}>source</button>
            <button onClick={()=>onMenu(topping)}>topping</button>
            <p></p>
        {menuLists}
        </div>
    );
});

export default SubwayMenuList;