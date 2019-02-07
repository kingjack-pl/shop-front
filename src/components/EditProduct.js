import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { updateProduct } from "../actions";

import requireIsAdmin from "./requireIsAdmin";
import NotificationDisplay from "./NotificationDisplay";
import { Multiselect } from "react-widgets";
import 'react-widgets/dist/css/react-widgets.css';

class EditProduct extends Component {
    onSubmit = values => {
        this.props.updateProduct(values);
    };

    renderField = field => {
        const isShowError = field.meta.touched && field.meta.error;
        return (
            <div className="form-group">
                <input
                    className={`form-control ${isShowError ? "is-invalid" : ""}`}
                    placeholder={field.placeholder}
                    type={field.type}
                    {...field.input}
                />
                <span />
                <div className="invalid-feedback">
                    {isShowError ? field.meta.error : ""}
                </div>
            </div>
    )};

    renderMultiselect = ({ input, data, valueField, textField }) => (
        <div className="form-group">
            <Multiselect {...input}
                 onBlur={() => input.onBlur()}
                 value={input.value || []}
                 data={data}
                 valueField={valueField}
                 textField={textField}
                 placeholder="Categories"
            />
        </div>
    );

    render() {
        return(
            <div className="fullPage">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="login-form">
                    <NotificationDisplay />
                    <h1 className="h3 mb-3 font-weight-normal">Edit Product</h1>
                    <Field
                        name="title"
                        type="text"
                        placeholder="Title"
                        component={this.renderField}
                    />
                    <Field
                        name="author"
                        type="text"
                        placeholder="Author"
                        component={this.renderField}
                    />
                    <Field
                        name="price"
                        type="number"
                        placeholder="Price"
                        component={this.renderField}
                    />
                    <Field
                        name="description"
                        type="text"
                        placeholder="Description"
                        component={this.renderField}
                    />
                    <Field
                        name="photo"
                        type="text"
                        placeholder="Photo Url"
                        component={this.renderField}
                    />
                    <Field
                        name="categories"
                        component={this.renderMultiselect}
                        data={[ 'Category 1', 'Category 2' ]}
                    />
                    <button className="btn btn-lg btn-primary btn-block mt-3">Add product</button>
                </form>
            </div>
        )
    }
}
export default compose(
    requireIsAdmin,
    reduxForm({form: "EditProduct"}),
    connect(null, { updateProduct })
)(EditProduct);
