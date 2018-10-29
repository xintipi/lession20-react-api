import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    onDelete = (id) => {
        if (confirm('Do you want to delete this product?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    };

    render() {
        const {product, index} = this.props;
        let productStatus = product.status === 'true' ? true : false;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{product.id}</td>
                <td className="text-center">{product.name}</td>
                <td className="text-center">{product.price}</td>
                <td className="text-center">
                    <span className={productStatus ? 'label label-success' : 'label label-warning'}>
                        {productStatus ? 'Còn Hàng' : 'Hết Hàng'}
                    </span>
                </td>
                <td className="text-center">
                    <Link to={`/product/edit/${product.id}`} className="btn btn-success">
                        Sửa
                    </Link>
                    &nbsp;
                    <button className="btn btn-danger" type="button" onClick={() => {this.onDelete(product.id)}}>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
