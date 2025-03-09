import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";



export default function Users() {
    const [users, setUsers] = useState([]);
    const [userID, setUserID] = useState("");
    const [getData, setGetData] = useState(false);
    const [showDeleteModal, setshowDeleteModal] = useState(false);
    const [showEditModal, setshowEditModal] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://sabzlearn-9c335-default-rtdb.firebaseio.com/users.json');
                const data = await response.json();
                setUsers(Object.entries(data));
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();

    }, [getData, users]);


    useEffect(() => {

        let mainUserInfo = users.find(user => user[0] === userID)

        // this useEffect run when our component executed. so we give it the below condition 
        // for returning undefined
        if (mainUserInfo){
            setFirstName(mainUserInfo[1].firstName)
            setLastName(mainUserInfo[1].lastName)
            setEmail(mainUserInfo[1].email)
        }

        console.log(mainUserInfo);
        

    }, [userID])


    const removeHandler = async () => {

        await fetch(`https://sabzlearn-9c335-default-rtdb.firebaseio.com/users/${userID}.json`, {
            method: 'DELETE'
        }).then(response => console.log(response)
        )
        
        setshowDeleteModal(false)
        setGetData(prev => !prev)
    }


    const editHandler = async () => {

        let userNewInfo = {
            firstName,
            lastName,
            email
        }

        await fetch(`https://sabzlearn-9c335-default-rtdb.firebaseio.com/users/${userID}.json`, {
            method: 'PUT',
            body: JSON.stringify(userNewInfo)
        }).then(response => console.log(response))

        setshowEditModal(false)
        setGetData(prev => !prev)
    }

    return (
        <>
        <Table style={{width: '80%', marginRight: 'auto', marginLeft: 'auto'}} striped bordered hover>
            <thead>
                <tr style={{textAlign: 'center'}}>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr style={{textAlign: 'center'}} key={index}>
                        <td>{index + 1}</td>
                        <td>{user[1].firstName}</td>
                        <td>{user[1].lastName}</td>
                        <td>{user[1].email}</td>
                        <td style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', minHeight: 40}}>
                            <FiEdit3 onClick={() => {
                                setshowEditModal(true)
                                setUserID(user[0])
                            }}
                             style={{cursor: 'pointer'}}/>
                            <MdDelete onClick={() => {
                                setshowDeleteModal(true)
                                setUserID(user[0])
                            }} style={{cursor: 'pointer'}}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>


        {/* Delete Modal */}
        <Modal
        show={showDeleteModal}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Delete Confirm
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                Are You Sure To Delete This User?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setshowDeleteModal(false)}>Cancel</Button>
                <Button onClick={() => removeHandler()}>Delete</Button>
            </Modal.Footer>
        </Modal>


        {/* Edit Modal */}
        <Modal
        show={showEditModal}
        size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                Edit User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={event => setFirstName(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={event => setLastName(event.target.value)}/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)}/>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setshowEditModal(false)}>Cancel</Button>
                <Button onClick={() => editHandler()}>Edit</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

