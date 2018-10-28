import React, {Component} from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';

class ProductListPage extends Component {
    showProduct = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                )
            });
        }
        return result;
    };

    render() {
        const products = [];
        return (
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <button type="button" className="btn btn-info mb-10">
                    Thêm sản phẩm
                </button>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
}

export default ProductListPage;
