
import Form from 'react-bootstrap/Form';


function Boosreac () {
  return (
    <>
   <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Nattirpottornamede@gmail.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Put Some things</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
</>
   
  );
}

export default Boosreac;