import React from "react";
import './collection.css';

import DisplayItems from "../items/items.component";

const CollectionItem = ({title, items}) =>{
    return(
        <div className="collection-tab">
            <h1 className="collection-title">{title}</h1>
            <div className="item">
                {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherprops}) =>(
                    <DisplayItems key={id} {...otherprops}  />
                ))
                }
            </div>
        </div>
    )
}

export default CollectionItem;