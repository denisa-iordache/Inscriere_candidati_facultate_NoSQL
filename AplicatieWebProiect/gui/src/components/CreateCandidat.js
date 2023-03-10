import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

export default function CreateCandidat() {
    const nameRef = useRef();
    const surnameRef = useRef();
    const telefonRef = useRef();
    const emailRef = useRef();
    const eseuRef = useRef();
    const medieLicRef = useRef();
    const opt1Ref = useRef();
    const opt2Ref = useRef();
    const opt3Ref = useRef();
    const nota1Ref = useRef();
    const nota2Ref = useRef();
    const nota3Ref = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setError("");
            setLoading(true);
            const discipline = ["Romana", "Matematica/Istorie", "Proba la alegere"]
            const note = [parseFloat(nota1Ref.current.value), parseFloat(nota2Ref.current.value), parseFloat(nota3Ref.current.value)]
            const opt = [opt1Ref.current.value, opt2Ref.current.value, opt3Ref.current.value]
            const postData = {
                nume: nameRef.current.value,
                prenume: surnameRef.current.value,
                telefon: telefonRef.current.value,
                email: emailRef.current.value,
                eseuMotivational: eseuRef.current.value,
                noteBacalaureat: new Object({ discipline, note }),
                medieLiceu: parseFloat(medieLicRef.current.value),
                optiuniUniversitare: opt
            };
            console.log(postData);

            fetch("http://localhost:8080/candidati/add", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            }).then((res) => res.json());

            navigate("/");
        } catch (error) {
            setError("Adaugarea a esuat");
        }
        setLoading(false);
    }

    return (
        <>
            <div
            >
                <Container
                    className="d-flex align-items-center justify-content-center mt-2 mb-2"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Card
                            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                        >
                            <Card.Body>
                                <h2 className="text-center">Adauga un candidat</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="name">
                                        <Form.Label>Nume
                                            <span style={{ color: "red", marginLeft: "3px" }}>*</span>
                                        </Form.Label>
                                        <Form.Control type="text" ref={nameRef} required></Form.Control>
                                    </Form.Group>
                                    <Form.Group id="surname">
                                        <Form.Label>Prenume
                                            <span style={{ color: "red", marginLeft: "3px" }}>*</span>
                                        </Form.Label>
                                        <Form.Control type="text" ref={surnameRef} required></Form.Control>
                                    </Form.Group>
                                    <Form.Group id="telefon">
                                        <Form.Label>Telefon
                                            <span style={{ color: "red", marginLeft: "3px" }}>*</span>
                                        </Form.Label>
                                        <Form.Control type="text" ref={telefonRef} required></Form.Control>
                                    </Form.Group>
                                    <Form.Group id="email">
                                        <Form.Label className="d-flex flex-row">
                                            Adres?? de email
                                            <span style={{ color: "red", marginLeft: "3px" }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            ref={emailRef}
                                            required
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group id="eseu">
                                        <Form.Label>Eseu motivational
                                            <span style={{ color: "red", marginLeft: "3px" }}>*</span>
                                        </Form.Label>
                                        <Form.Select ref={eseuRef} className="mt-1">
                                            <option>Da</option>
                                            <option>Nu</option>
                                        </Form.Select>
                                        {/* <Form.Control type="text" ref={eseuRef}></Form.Control> */}
                                    </Form.Group>
                                    <Form.Group id="medieLiceu">
                                        <Form.Label>Medie liceu
                                            <span style={{ color: "red", marginLeft: "3px" }}>*</span>
                                        </Form.Label>
                                        <Form.Control type="text" ref={medieLicRef} required></Form.Control>
                                    </Form.Group>
                                    <Form.Group id="optiuniUniversitare">
                                        <Form.Label>Optiuni universitare:
                                            <span style={{ color: "red", marginLeft: "3px" }}>*</span>
                                        </Form.Label>
                                        <Form.Select ref={opt1Ref}>
                                            <option>Administrarea afacerilor (??n limba englez??)</option>
                                            <option>Administrarea afacerilor (??n limba francez??)</option>
                                            <option>Administrarea afacerilor (??n limba german??)</option>
                                            <option>Administrarea afacerilor ??n comer??, turism, servicii, merceologie ??i managementul calit????ii</option>
                                            <option>Administrarea afacerilor ??n comer??, turism, servicii, merceologie ??i managementul calit????ii (??n limba englez??)</option>
                                            <option>Administra??ie public??</option>
                                            <option>Cibernetic?? economic??</option>
                                            <option>Contabilitate ??i informatic?? de gestiune</option>
                                            <option>Contabilitate ??i informatic?? de gestiune (??n limba englez??)</option>
                                            <option>Economie agroalimentar?? ??i a mediului</option>
                                            <option>Economie ??i afaceri interna??ionale</option>
                                            <option>Economie ??i comunicare economic?? ??n afaceri</option>
                                            <option>Finan??e ??i b??nci</option>
                                            <option>Finan??e ??i b??nci (??n limba englez??)</option>
                                            <option>Informatic?? economic??</option>
                                            <option>Informatic?? economic?? (??n limba englez??)</option>
                                            <option>Limbi moderne aplicate (englez?? - francez??)</option>
                                            <option>Management</option>
                                            <option>Management (??n limba englez??)</option>
                                            <option>Marketing</option>
                                            <option>Marketing (??n limba englez??)</option>
                                            <option>Resurse umane</option>
                                            <option>Statistic?? ??i previziune economic??</option>
                                            <option>Drept</option>
                                        </Form.Select>
                                        <Form.Select ref={opt2Ref} className="mt-1">
                                            <option>Administrarea afacerilor (??n limba englez??)</option>
                                            <option>Administrarea afacerilor (??n limba francez??)</option>
                                            <option>Administrarea afacerilor (??n limba german??)</option>
                                            <option>Administrarea afacerilor ??n comer??, turism, servicii, merceologie ??i managementul calit????ii</option>
                                            <option>Administrarea afacerilor ??n comer??, turism, servicii, merceologie ??i managementul calit????ii (??n limba englez??)</option>
                                            <option>Administra??ie public??</option>
                                            <option>Cibernetic?? economic??</option>
                                            <option>Contabilitate ??i informatic?? de gestiune</option>
                                            <option>Contabilitate ??i informatic?? de gestiune (??n limba englez??)</option>
                                            <option>Economie agroalimentar?? ??i a mediului</option>
                                            <option>Economie ??i afaceri interna??ionale</option>
                                            <option>Economie ??i comunicare economic?? ??n afaceri</option>
                                            <option>Finan??e ??i b??nci</option>
                                            <option>Finan??e ??i b??nci (??n limba englez??)</option>
                                            <option>Informatic?? economic??</option>
                                            <option>Informatic?? economic?? (??n limba englez??)</option>
                                            <option>Limbi moderne aplicate (englez?? - francez??)</option>
                                            <option>Management</option>
                                            <option>Management (??n limba englez??)</option>
                                            <option>Marketing</option>
                                            <option>Marketing (??n limba englez??)</option>
                                            <option>Resurse umane</option>
                                            <option>Statistic?? ??i previziune economic??</option>
                                            <option>Drept</option>
                                        </Form.Select>
                                        <Form.Select ref={opt3Ref} className="mt-1">
                                            <option>Administrarea afacerilor (??n limba englez??)</option>
                                            <option>Administrarea afacerilor (??n limba francez??)</option>
                                            <option>Administrarea afacerilor (??n limba german??)</option>
                                            <option>Administrarea afacerilor ??n comer??, turism, servicii, merceologie ??i managementul calit????ii</option>
                                            <option>Administrarea afacerilor ??n comer??, turism, servicii, merceologie ??i managementul calit????ii (??n limba englez??)</option>
                                            <option>Administra??ie public??</option>
                                            <option>Cibernetic?? economic??</option>
                                            <option>Contabilitate ??i informatic?? de gestiune</option>
                                            <option>Contabilitate ??i informatic?? de gestiune (??n limba englez??)</option>
                                            <option>Economie agroalimentar?? ??i a mediului</option>
                                            <option>Economie ??i afaceri interna??ionale</option>
                                            <option>Economie ??i comunicare economic?? ??n afaceri</option>
                                            <option>Finan??e ??i b??nci</option>
                                            <option>Finan??e ??i b??nci (??n limba englez??)</option>
                                            <option>Informatic?? economic??</option>
                                            <option>Informatic?? economic?? (??n limba englez??)</option>
                                            <option>Limbi moderne aplicate (englez?? - francez??)</option>
                                            <option>Management</option>
                                            <option>Management (??n limba englez??)</option>
                                            <option>Marketing</option>
                                            <option>Marketing (??n limba englez??)</option>
                                            <option>Resurse umane</option>
                                            <option>Statistic?? ??i previziune economic??</option>
                                            <option>Drept</option>
                                        </Form.Select>
                                        {/* <Form.Control type="text" ref={opt1Ref} ></Form.Control>
                                        <Form.Control type="text" ref={opt2Ref} className="mt-1"></Form.Control>
                                        <Form.Control type="text" ref={opt3Ref} className="mt-1"></Form.Control> */}
                                    </Form.Group>
                                    <Form.Group id="noteBacalaureat">
                                        <div className="mt-2"><Form.Label>Note bacalaureat:
                                            <span style={{ color: "red", marginLeft: "3px" }}>*</span></Form.Label></div>
                                        <Form.Label>Romana</Form.Label>
                                        <Form.Control type="text" ref={nota1Ref} required></Form.Control>
                                        <Form.Label>Matematica/Istorie</Form.Label>
                                        <Form.Control type="text" ref={nota2Ref} required></Form.Control>
                                        <Form.Label>Proba la alegere</Form.Label>
                                        <Form.Control type="text" ref={nota3Ref} required></Form.Control>
                                    </Form.Group>
                                    <Button
                                        disabled={loading}
                                        className="w-100 mt-2"
                                        type="submit"
                                    >
                                        Adauga candidatul
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        </>
    );
}