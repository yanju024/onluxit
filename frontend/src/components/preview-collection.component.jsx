import React from "react";

import './preview-collection.styles.scss'
import CollectionItem from "./collection-item";

const PreviewCollecton = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title"> {title} </h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherItemPops}) => {
                    return <CollectionItem key={id} {...otherItemPops} />
                })
            }
        </div>
    </div>
)

export default PreviewCollecton;