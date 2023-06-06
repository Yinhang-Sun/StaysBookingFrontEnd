import React from "react";
import { Form, Input, InputNumber, Button, message } from "antd";
import { uploadStay } from "../utils";

const layout = {
    labelCol: { span: 8}, 
    wrapperCol: { span: 16}, 
}; 

class UploadStay extends React.Component {
    state = {
        loading: false, 
    }; 

    fileInputRef = React.createRef();

    handleSubmit = async (values) => {
        const formData = new FormData();

        const { files } = this.fileInputRef.current;

        if(files.length > 5) {
            message.error("You can at most upload 5 picutures");
            return;
        }

        for(let i = 0; i < files.length; i++) {
            formData.append("images", files[i]);
        }

        formData.append("name", values.name);
        formData.append("address", values.address);
        formData.append("description", values.description);
        formData.append("guest_number", values.guest_number);

        this.setState({
            loading: true,
        });

        try {
            await uploadStay(formData);
            message.success("upload successfully");
        } catch(error) {
            message.error(error.message);
        } finally {
            this.setState({
                loading: false, 
            });
        }
    };

    
}