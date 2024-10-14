import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { PersonFill, LockFill } from 'react-bootstrap-icons';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginModal = ({ show, handleClose, setLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);


    // Loại bỏ khoảng trắng thừa
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError("Username and password must not be empty");

      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api-demo-4gqb.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: trimmedUsername, password: trimmedPassword }),
        }
      );

      if (!response.ok) {
        throw new Error("Username or password incorrect");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Hiển thị thông báo thành công
      toast.success("Login successful", {containerId: 'notification'});
      
      // Set trạng thái đăng nhập thành true
      setLoggedIn(true);

      handleClose(); // Đóng modal sau khi đăng nhập thành công
    } catch (err) {
      setError(err.message);
      toast.error("Login Failed. Please check again", { autoClose: 5000 });
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Modal show={show} onHide={handleClose} centered style={{}}>
        <Modal.Header closeButton >
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group
              className="mb-3 d-flex align-items-center"
              controlId="formBasicEmail"
            >
              <Form.Label className="me-2">
                <PersonFill />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex align-items-center"
              controlId="formBasicPassword"
            >
              <Form.Label className="me-2">
                <LockFill />
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Text className="text-muted">
              <a href="#forgot-password">Forgot password?</a>
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end mt-3">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleLogin} disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
