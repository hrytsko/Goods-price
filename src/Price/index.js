import React from 'react';

const Price = ({minPrice}) => {
    let inputGoods, inputCost,  msgSpanRes;
    const onClick=()=>{
        msgSpanRes.innerText=parseInt(inputGoods.value)*parseInt(inputCost.value);
    }

    return (
        <div>
            <div>
                <label>
                    Кількість товару :
                    <input ref={node => inputGoods = node} type="number" /><br/>
                    Вартість одиниці товару грн.
                    <input ref={node1 => inputCost = node1} type="number" />
                </label>
            </div>
            <button onClick={onClick}>Порахувати</button>
            <div >
                <span>Загальна сума </span>
                <span ref ={node=>msgSpanRes=node}></span>
                <span> грн.</span>
            </div>
            <hr/>
            <a href="URL">>>>Code source </a>
        </div>
    );
};
export default Price;