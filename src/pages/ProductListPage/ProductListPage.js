import React, {Component} from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as action from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        // chay ngay sau khi ham Render chay
        this.props.fetchAllProducts(); // lay du lieu tren server ve va truyen du lieu vao props "fetchAllProducts"
    }

    showProduct = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    };

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    };

    render() {
        let {products} = this.props; // lay product tren store
        // let {products} = this.state;
        return (
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <Link to="/product/add" className="btn btn-info mb-10">
                    Thêm sản phẩm
                </Link>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }; // lay tat ca du lieu tren store va luu vao props "products"
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(action.actFetchProductsRequest())
            // luu du lieu tu API len store
        },
        onDeleteProduct: (id) => {
            dispatch(action.actDeleteProductRequest(id));
            // xoa product tren server api va tien hanh luu lai tren store
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
