import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import axios from 'axios'

const Post = () => {
    const [post, setPost] = useState({
        id: '',
        content: '',
        imgUrl: ''
    })
    const handleChange = (event) => {
        const {name, value} = event.target
        setPost({...post, [name]: value})
    }
    const handleEditor = (event, editor) => {
        setPost({...post, content : editor.getData()})
    }
    const handleSubmit = () => {
        axios.post(`http://localhost:8000/post-api`, post)
    }
    return(
        <div className="post-form">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Image Url</Label>
                    <Input type="text" name="imgUrl" value={post.imgUrl} placeholder="Type the Url" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Content</Label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={post.content}
                        onChange={handleEditor}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default Post