import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import axios from 'axios'

function BeautifulGirlsForm() {
    const [bg, setBg] = useState({
        id: '',
        caption: '',
        imgUrl: ''
    })

    const handleChange = (event) => {
        let {name, value} = event.target
        setBg({...bg, [name] : value})
    }

    const handleSubmit = () => {
        axios.post(`http://localhost:8000/beautiful-girl-api`, bg)
    }

    const handleEditor = (event, editor) => {
        setBg({...bg, caption : editor.getData()})
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Image Url</Label>
                    <Input type="text" name="imgUrl" value={bg.imgUrl} placeholder="Type the Url" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Caption</Label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={bg.caption}
                        onChange={handleEditor}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default BeautifulGirlsForm
