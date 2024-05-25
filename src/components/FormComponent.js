import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../css/form.css'

const FormComponents = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')

    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRePassword, setErrorRePassword] = useState('')

    const [usernameColor, setUsernameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [repasswordColor, setRePasswordColor] = useState('')

    const validateForm = (event) => {
        event.preventDefault()

        if (username.length >= 8) {
            setErrorUsername('')
            setUsernameColor('green')
        } else {
            setErrorUsername('กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษรขึ้นไป')
            setUsernameColor('red')
        }

        if (email.includes('@')) {
            setErrorEmail('')
            setEmailColor('green')
        } else {
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }

        if (password.length >= 8) {
            setErrorPassword('')
            setPasswordColor('green')
        } else {
            setErrorPassword('รหัสผ่านต้องมีจำนวน 8 ตัวอักษรขึ้นไป')
            setPasswordColor('red')
        }

        if (repassword != '' && repassword === password) {
            setErrorRePassword('')
            setRePasswordColor('green')
        } else {
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRePasswordColor('red')
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className='form-box w-50 p-5 align-self-center'>
                <h2 className='mb-4'>Registration Form</h2>
                <Form onSubmit={validateForm}>

                    {/* USERNAME */}
                    <Form.Group className="mb-4" controlId="formBasicFullname">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} 
                            onChange={(event) => {setUsername(event.target.value)}} 
                            style={{borderColor: usernameColor}}
                            placeholder="Enter username" />
                        <Form.Text style={{color: usernameColor}} >{errorUsername}</Form.Text>
                    </Form.Group>

                    {/* EMAIL */}
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} 
                            onChange={(event) => {setEmail(event.target.value)}} 
                            style={{borderColor: emailColor}}
                            placeholder="Enter email" />
                        <Form.Text style={{color: emailColor}}>{errorEmail}</Form.Text>
                    </Form.Group>

                    {/* PASSWORD */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} 
                            onChange={(event) => {setPassword(event.target.value)}} 
                            style={{borderColor: passwordColor}}
                            placeholder="Enter Password" />
                        <Form.Text style={{color: passwordColor}}>{errorPassword}</Form.Text>
                    </Form.Group>

                    {/* VERIFY PASSWORD */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control type="password" value={repassword} 
                            onChange={(event) => {setRePassword(event.target.value)}} 
                            style={{borderColor: repasswordColor}}
                            placeholder="Verify password" />
                        <Form.Text style={{color: repasswordColor}}>{errorRePassword}</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

            
        </div>
    )
}

export default FormComponents