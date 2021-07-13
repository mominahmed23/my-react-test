import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import { Spinner } from 'reactstrap';
export default function Login() {
    const [password, setpassword] = useState('');
    const [loading, setloading] = useState(false);
    {/**   change Handler for password */}
    const onChangeHandler=(e)=>{
        setpassword(e.target.value)
        console.log(e.target.value)
    }
    {/** ----------------------------------- */}

    {/** on Submit handle */}
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(password);
        setloading(true);

        setTimeout(()=>{
            setloading(false);
        },2000)
    }

     {/** ----------------------------------- */}


    return (
        <>
            <div>
              <Container>
                    <Row>
                        <Col lg={{size: 4, order: 2, offset: 4}} md={{size: 6, order: 2, offset: 3}} sm={{ size: 8, order: 2, offset: 2 }}>
                            <div className="text-center pt-4">
                            <Form onSubmit={handleSubmit}>
                                <div className="mb-3 font-weight-bold">
                                     Login to your account
                                </div>
                                <FormGroup className="mb-2">
                                    <Input type="text" placeholder="Username" />
                                </FormGroup>
                        
                                <FormGroup className="mb-2">
                                    <Input placeholder="password" value={password} onChange={onChangeHandler}/>
                                </FormGroup>
                                <div className="d-grid gap-2">
                                    {/* <Button type="submit" color="success" disabled={!password || loading} block variant="success"> */}
                                        {loading?(
                                       
                                       <Button type="submit" color="success" disabled block variant="success">
                                       <span className="p-1">
                                        <Spinner 
                                        animation="grow" 
                                        role="status"
                                        size="sm"
                                        >
                                            <span className="sr-only"></span>
                                        </Spinner>
                                        </span>
                                        </Button>):(<Button type="submit" color="success" disabled={!password || loading} block variant="success">
                                                        Login
                                                    </Button>
                                        )
                                        }
                                        
                                </div>
                               
                                </Form>
                            </div>
                            <div className="pt-2">
                                        Invalid password
                                </div>
                        </Col>
                       
                    </Row>
      
              </Container>
              
            </div>  
        </>
    )
}
