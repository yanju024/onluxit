import React from "react";
import SHOP_DATA from './shop.data'
import PreviewCollecton from '../../components/preview-collection.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state
        return (<div className="shop-page"> 
            {
                collections.map(({id, ...otherCollectionData}) => {
                    return <PreviewCollecton key={id} {...otherCollectionData} />
                })
            }
         </div>);
    }
}

export default ShopPage;