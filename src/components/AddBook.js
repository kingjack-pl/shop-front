import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { addProduct } from "../actions";

class AddBook extends Component {
    onSubmit = values => {
        this.props.addProduct(values);
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

    render() {
        const { handleSubmit } = this.props;

        return(
            <div className="fullPage">
                <form onSubmit={handleSubmit(this.onSubmit)} className="login-form">
                    <h1 className="h3 mb-3 font-weight-normal">Add Product</h1>
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
                        name="categories"
                        type="text"
                        placeholder="Categories"
                        component={this.renderField}
                    />
                    <Field
                        name="photo"
                        type="text"
                        placeholder="Photo Url"
                        component={this.renderField}
                    />
                    <button className="btn btn-lg btn-primary btn-block">Add product</button>
                </form>
            </div>
        )
    }
}
export default compose(
    reduxForm({form: "AddProduct"}),
    connect(null, { addProduct })
)(AddBook);