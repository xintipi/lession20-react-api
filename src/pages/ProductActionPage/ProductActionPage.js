import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from './../../actions/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chbStatus: ''
        }
    }

    componentDidMount() {
        let {match} = this.props;
        if (match) {
            let id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                id: nextProps.itemEditing.id,
                txtName: nextProps.itemEditing.name,
                txtPrice: nextProps.itemEditing.price,
                chbStatus: nextProps.itemEditing.status
            })
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        if (name === 'chbStatus') {
            value = value === true ? 'true' : 'false';
        }
        this.setState({
            [name]: value
        });
    };

    onSave = (e) => {
        e.preventDefault();
        let {id, txtName, txtPrice, chbStatus} = this.state;
        let {history} = this.props;
        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chbStatus
        };
        if (id) {
            //update
            this.props.onUpdateProduct(product);
            history.goBack()
        } else {
            // add
            this.props.onAddProduct(product);
            history.goBack()
        }
    };

    render() {
        let {txtName, txtPrice, chbStatus} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label />Tên sản phẩm
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label />Giá
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label />Trạng Thái
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chbStatus"
                                value={chbStatus}
                                onChange={this.onChange}
                                checked={chbStatus === 'true' ? true : false}
                            />
                            Còn Hàng
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger">
                        Quay Lại
                    </Link>
                    &nbsp;
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(action.actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(action.actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(action.actUpdateProductRequest(product))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
