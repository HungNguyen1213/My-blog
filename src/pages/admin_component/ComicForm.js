import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import axios from 'axios'

const ComicForm = () => {
    const [comic, setComic] = useState({
        id: '',
        title: '',
        codeName: '',
        author: '',
        description: '',
        status: '',
        imgUrl: ''
    })

    const handleEditor = (event, editor) => {
        setComic({...comic, description : editor.getData()})
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setComic({...comic, [name] : value})
    }

    const handleSubmit = () => {
        axios.post(`http://localhost:8000/comic-api`, comic)
    }

    return(
        <div className="comic-form">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type="text" name="title" value={comic.title} placeholder="Type the Title" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Code Name</Label>
                    <Input type="text" name="codeName" value={comic.codeName} placeholder="Type the Code Name" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Author</Label>
                    <Input type="text" name="author" value={comic.author} placeholder="Type the Author" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <CKEditor
                        editor = {ClassicEditor}
                        data = {comic.description}
                        onChange = {handleEditor}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Status</Label>
                    <Input type="text" name="status" value={comic.status} placeholder="Type the Status" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Image Url</Label>
                    <Input type="text" name="imgUrl" value={comic.imgUrl} placeholder="Type the Url" onChange={handleChange} />
                </FormGroup>
                
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default ComicForm