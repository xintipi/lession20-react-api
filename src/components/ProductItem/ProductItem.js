import React, {Component} from 'react';

class ProductItem extends Component {
    render() {
        const {product, index} = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{product.id}</td>
                <td className="text-center">{product.name}</td>
                <td className="text-center">{product.price}</td>
                <td className="text-center">
                    <span className={product.status ? 'label label-success' : 'label label-warning'}>
                        {product.status ? 'Còn Hàng' : 'Hết Hàng'}
                    </span>
                </td>
                <td className="text-center">
                    <button className="btn btn-success" type="button">
                        Sửa
                    </button>
                    &nbsp;
                    <button className="btn btn-danger" type="button">
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
