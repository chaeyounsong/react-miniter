import React from 'react';
import { red } from 'ansi-colors';

function Btn(props){
    console.log(props);
    let btnText = props.text;
    return(
        <div style={{color:props.color}}>확인</div>
    )
}

export default Btn;