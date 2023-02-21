import { useEffect, useState, useRef } from "react";
import { Card, Button, Modal, Form, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TfiAgenda } from "react-icons/tfi";
import {
    FcNumericalSorting12,
    FcViewDetails,
    FcCheckmark
} from "react-icons/fc";
import {
    AiOutlineSortAscending,
    AiOutlineSortDescending,
} from "react-icons/ai";

function ListCandidati() {
    const [candidati, setCandidati] = useState(null);
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

    const [candidat, setCandidat] = useState(null);
    const [showCandidat, setShowCandidat] = useState(false);
    const [showDeleteCandidat, setShowDeleteCandidat] = useState(false);
    const handleShowCandidat = () => setShowCandidat(true);
    const handleCloseCandidat = () => setShowCandidat(false);
    const handleShowDeleteCandidat = () => setShowDeleteCandidat(true);
    const handleCloseDeleteCandidat = () => setShowDeleteCandidat(false);

    const getCandidati = (
    ) => {
        fetch(
            "http://localhost:8080/candidati/",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiAsc = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/asc",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiDesc = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/desc",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiCSIE = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/CSIE",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiFABIZ = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/FABIZ",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiBT = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/BT",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiFAMP = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/FAMP",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiCIG = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/CIG",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiEAM = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/EAM",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiREI = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/REI",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiETA = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/ETA",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiFABBV = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/FABBV",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiMK = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/MK",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiMAN = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/MAN",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidatiDREPT = (
    ) => {
        fetch(
            "http://localhost:8080/candidatiFind/DREPT",
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCandidati(data);
            });
    };

    const getCandidat = (id) => {
        fetch(`http://localhost:8080/candidati/${id}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setCandidat(data);
            });
    };

    const cards = () => {
        const cards = [];
        if (candidati) {
            candidati.forEach((candidat) => {
                cards.push(
                    <div className="m-5 shadow-sm">
                        <Card border="light" bg="light">
                            <Card.Body className="d-md-flex">
                                <Card.Title
                                    style={{ flexShrink: "0", width: "33%" }}
                                    className="text-center p-3"
                                >
                                    {candidat.nume} {candidat.prenume}
                                </Card.Title>
                                <Card.Text
                                    className="d-md-flex gap-6"
                                    style={{ flexShrink: "0" }}
                                >
                                    <div
                                        className="d-md-flex flex-column"
                                        style={{ width: "450px" }}
                                    >
                                        <div>
                                            <BsFillTelephoneFill />
                                            <span>
                                                {" "}
                                                - {candidat.telefon}
                                            </span>
                                        </div>
                                        <div>
                                            <AiOutlineMail />
                                            <span> - {candidat.email}</span>
                                        </div>
                                        <div>
                                            <TfiAgenda />
                                            <span> Eseu motivational depus - {candidat.eseuMotivational}</span>
                                        </div>
                                        <div>
                                            <FcViewDetails />
                                            <span> Note bacalaureat:</span>
                                            <br />
                                            <span>  ➜ {candidat.noteBacalaureat.discipline[0]} - {candidat.noteBacalaureat.note[0]}</span>
                                            <br />
                                            <span>  ➜ {candidat.noteBacalaureat.discipline[1]} - {candidat.noteBacalaureat.note[1]}</span>
                                            <br />
                                            <span>  ➜ {candidat.noteBacalaureat.discipline[2]} - {candidat.noteBacalaureat.note[2]}</span>
                                        </div>
                                    </div>
                                    <div
                                        className="d-md-flex flex-column"
                                        style={{ width: "450px" }}
                                    >
                                        <div>
                                            <FcCheckmark />
                                            <span> Medie liceu - {candidat.medieLiceu}</span>
                                        </div>
                                        <div>
                                            <FcCheckmark />
                                            <span> Medie bacalaureat - {candidat.medieBac}</span>
                                        </div>
                                        <div>
                                            <FcCheckmark />
                                            <span> Medie admitere - {candidat.medieAdmitere}</span>
                                        </div>
                                        <div>
                                            <FcNumericalSorting12 />
                                            <span> Lista optiuni: <br />
                                                1. {candidat.optiuniUniversitare[0]}<br />2. {candidat.optiuniUniversitare[1]}<br />3. {candidat.optiuniUniversitare[2]}</span>
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className="d-flex justify-content-around">
                            <Button variant="outline-warning" className="w-25 m-2" onClick={() => {
                                handleShowCandidat();
                                getCandidat(candidat._id);
                            }}>Editeaza</Button>
                            <Button variant="outline-danger" className="w-25 m-2"
                                onClick={() => {
                                    handleShowDeleteCandidat();
                                    getCandidat(candidat._id);
                                }}>Sterge</Button>
                        </div>
                    </div>
                );
            });
        }
        return cards;
    };

    useEffect(() => {
        getCandidati();
    }, []);

    const putCandidat = (id) => {
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

        fetch(`http://localhost:8080/candidati/update/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        }).then((res) => res.json());
    }

    const handleDeleteCandidat = (id) => {
        fetch(`http://localhost:8080/candidati/${id}`, {
            method: "delete",
        }).then((res) => res.json());
    }

    return (
        <>
            <div>
                <Modal show={showCandidat} onHide={handleCloseCandidat} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editează candidatul </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {candidat && (
                            <Form>
                                <Form.Group id="name1">
                                    <Form.Label>Nume</Form.Label>
                                    <Form.Control
                                        className="mb-3"
                                        type="text"
                                        ref={nameRef}
                                        required
                                        defaultValue={candidat.nume}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group id="name2">
                                    <Form.Label>Prenume</Form.Label>
                                    <Form.Control
                                        className="mb-3"
                                        type="text"
                                        ref={surnameRef}
                                        required
                                        defaultValue={candidat.prenume}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group id="name3">
                                    <Form.Label>Telefon</Form.Label>
                                    <Form.Control
                                        className="mb-3"
                                        type="text"
                                        ref={telefonRef}
                                        required
                                        defaultValue={candidat.telefon}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group id="name4">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        className="mb-3"
                                        type="text"
                                        ref={emailRef}
                                        required
                                        defaultValue={candidat.email}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group id="name5">
                                    <Form.Label>Eseu motivational</Form.Label>
                                    <Form.Select ref={eseuRef} className="mb-3" defaultValue={candidat.eseuMotivational}>
                                        <option>Da</option>
                                        <option>Nu</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group id="medieLiceu">
                                    <Form.Label>Medie liceu
                                    </Form.Label>
                                    <Form.Control type="text" ref={medieLicRef} defaultValue={candidat.medieLiceu} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="optiuniUniversitare">
                                    <Form.Label>Optiuni universitare:
                                    </Form.Label>
                                    <Form.Select ref={opt1Ref} defaultValue={candidat.optiuniUniversitare[0]}>
                                        <option>Administrarea afacerilor (în limba engleză)</option>
                                        <option>Administrarea afacerilor (în limba franceză)</option>
                                        <option>Administrarea afacerilor (în limba germană)</option>
                                        <option>Administrarea afacerilor în comerț, turism, servicii, merceologie și managementul calității</option>
                                        <option>Administrarea afacerilor în comerț, turism, servicii, merceologie și managementul calității (în limba engleză)</option>
                                        <option>Administrație publică</option>
                                        <option>Cibernetică economică</option>
                                        <option>Contabilitate și informatică de gestiune</option>
                                        <option>Contabilitate și informatică de gestiune (în limba engleză)</option>
                                        <option>Economie agroalimentară și a mediului</option>
                                        <option>Economie și afaceri internaționale</option>
                                        <option>Economie și comunicare economică în afaceri</option>
                                        <option>Finanțe și bănci</option>
                                        <option>Finanțe și bănci (în limba engleză)</option>
                                        <option>Informatică economică</option>
                                        <option>Informatică economică (în limba engleză)</option>
                                        <option>Limbi moderne aplicate (engleză - franceză)</option>
                                        <option>Management</option>
                                        <option>Management (în limba engleză)</option>
                                        <option>Marketing</option>
                                        <option>Marketing (în limba engleză)</option>
                                        <option>Resurse umane</option>
                                        <option>Statistică și previziune economică</option>
                                        <option>Drept</option>
                                    </Form.Select>
                                    <Form.Select ref={opt2Ref} className="mt-1" defaultValue={candidat.optiuniUniversitare[1]}>
                                        <option>Administrarea afacerilor (în limba engleză)</option>
                                        <option>Administrarea afacerilor (în limba franceză)</option>
                                        <option>Administrarea afacerilor (în limba germană)</option>
                                        <option>Administrarea afacerilor în comerț, turism, servicii, merceologie și managementul calității</option>
                                        <option>Administrarea afacerilor în comerț, turism, servicii, merceologie și managementul calității (în limba engleză)</option>
                                        <option>Administrație publică</option>
                                        <option>Cibernetică economică</option>
                                        <option>Contabilitate și informatică de gestiune</option>
                                        <option>Contabilitate și informatică de gestiune (în limba engleză)</option>
                                        <option>Economie agroalimentară și a mediului</option>
                                        <option>Economie și afaceri internaționale</option>
                                        <option>Economie și comunicare economică în afaceri</option>
                                        <option>Finanțe și bănci</option>
                                        <option>Finanțe și bănci (în limba engleză)</option>
                                        <option>Informatică economică</option>
                                        <option>Informatică economică (în limba engleză)</option>
                                        <option>Limbi moderne aplicate (engleză - franceză)</option>
                                        <option>Management</option>
                                        <option>Management (în limba engleză)</option>
                                        <option>Marketing</option>
                                        <option>Marketing (în limba engleză)</option>
                                        <option>Resurse umane</option>
                                        <option>Statistică și previziune economică</option>
                                        <option>Drept</option>
                                    </Form.Select>
                                    <Form.Select ref={opt3Ref} className="mt-1" defaultValue={candidat.optiuniUniversitare[2]}>
                                        <option>Administrarea afacerilor (în limba engleză)</option>
                                        <option>Administrarea afacerilor (în limba franceză)</option>
                                        <option>Administrarea afacerilor (în limba germană)</option>
                                        <option>Administrarea afacerilor în comerț, turism, servicii, merceologie și managementul calității</option>
                                        <option>Administrarea afacerilor în comerț, turism, servicii, merceologie și managementul calității (în limba engleză)</option>
                                        <option>Administrație publică</option>
                                        <option>Cibernetică economică</option>
                                        <option>Contabilitate și informatică de gestiune</option>
                                        <option>Contabilitate și informatică de gestiune (în limba engleză)</option>
                                        <option>Economie agroalimentară și a mediului</option>
                                        <option>Economie și afaceri internaționale</option>
                                        <option>Economie și comunicare economică în afaceri</option>
                                        <option>Finanțe și bănci</option>
                                        <option>Finanțe și bănci (în limba engleză)</option>
                                        <option>Informatică economică</option>
                                        <option>Informatică economică (în limba engleză)</option>
                                        <option>Limbi moderne aplicate (engleză - franceză)</option>
                                        <option>Management</option>
                                        <option>Management (în limba engleză)</option>
                                        <option>Marketing</option>
                                        <option>Marketing (în limba engleză)</option>
                                        <option>Resurse umane</option>
                                        <option>Statistică și previziune economică</option>
                                        <option>Drept</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group id="noteBacalaureat">
                                    <div className="mt-2"><Form.Label>Note bacalaureat:</Form.Label></div>
                                    <Form.Label>Romana</Form.Label>
                                    <Form.Control type="text" ref={nota1Ref} required defaultValue={candidat.noteBacalaureat.note[0]}></Form.Control>
                                    <Form.Label>Matematica/Istorie</Form.Label>
                                    <Form.Control type="text" ref={nota2Ref} required defaultValue={candidat.noteBacalaureat.note[1]}></Form.Control>
                                    <Form.Label>Proba la alegere</Form.Label>
                                    <Form.Control type="text" ref={nota3Ref} required defaultValue={candidat.noteBacalaureat.note[2]}></Form.Control>
                                </Form.Group>
                            </Form>
                        )}
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">
                        <Button
                            className="btn btn-warning w-25"
                            onClick={handleCloseCandidat}
                        >
                            Anulează
                        </Button>
                        {candidat && (
                            <Button
                                className="btn btn-success w-25"
                                onClick={() => {
                                    putCandidat(candidat._id);
                                    window.location.reload();
                                }}
                            >
                                Salvează
                            </Button>
                        )}
                    </Modal.Footer>
                </Modal>
                {candidat && (
                    <Modal show={showDeleteCandidat} onHide={handleCloseDeleteCandidat} animation={false}>

                        <Modal.Header closeButton>
                            <Modal.Title>Sterge candidatul {candidat.nume} {candidat.prenume}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Esti sigur ca doresti sa stergi candidatul {candidat.nume} {candidat.prenume}? </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-between">
                            <Button className="btn btn-warning w-25" onClick={handleCloseDeleteCandidat}>
                                Anulează
                            </Button>
                            <Button className="btn btn-danger w-25"
                                onClick={() => {
                                    handleDeleteCandidat(candidat._id);
                                    window.location.reload();
                                }}>
                                Șterge
                            </Button>
                        </Modal.Footer>

                    </Modal>
                )}

                <Form.Label className="m-3 mb-0">Vezi doar candidatii care au aplicat la:</Form.Label>
                <div className="d-flex justify-content-between">
                    <Form.Group className="m-3 mb-0 w-25">
                        <Form.Select id="select" onChange={() => {
                            if (document.getElementById("select").value == "Toti candidatii") {
                                getCandidati()
                            } else if (document.getElementById("select").value == "Facultatea Administrarea Afacerilor, cu predare in limbi straine") {
                                getCandidatiFABIZ()
                            } else if (document.getElementById("select").value == "Facultatea Administratie si Management Public") {
                                getCandidatiFAMP()
                            } else if (document.getElementById("select").value == "Facultatea de Business si Turism (fosta Comert)") {
                                getCandidatiBT()
                            } else if (document.getElementById("select").value == "Facultatea de Cibernetica, Statistica si Informatica Economica") {
                                getCandidatiCSIE()
                            } else if (document.getElementById("select").value == "Facultatea de Contabilitate si Informatica de Gestiune") {
                                getCandidatiCIG()
                            } else if (document.getElementById("select").value == "Facultatea de Economie Agroalimentara si a Mediului") {
                                getCandidatiEAM()
                            } else if (document.getElementById("select").value == "Facultatea de Economie Teoretica si Aplicata (fosta Economie)") {
                                getCandidatiETA()
                            } else if (document.getElementById("select").value == "Facultatea de Finante, Asigurari, Banci si Burse de Valori") {
                                getCandidatiFABBV()
                            } else if (document.getElementById("select").value == "Facultatea de Management") {
                                getCandidatiMAN()
                            } else if (document.getElementById("select").value == "Facultatea de Marketing") {
                                getCandidatiMK()
                            } else if (document.getElementById("select").value == "Facultatea de Relatii Economice Internationale") {
                                getCandidatiREI()
                            } else if (document.getElementById("select").value == "Facultatea de Drept") {
                                getCandidatiDREPT()
                            }

                        }}>
                            <option>Toti candidatii</option>
                            <option>Facultatea Administrarea Afacerilor, cu predare in limbi straine</option>
                            <option>Facultatea Administratie si Management Public</option>
                            <option>Facultatea de Business si Turism (fosta Comert)</option>
                            <option>Facultatea de Cibernetica, Statistica si Informatica Economica</option>
                            <option>Facultatea de Contabilitate si Informatica de Gestiune</option>
                            <option>Facultatea de Economie Agroalimentara si a Mediului</option>
                            <option>Facultatea de Economie Teoretica si Aplicata (fosta Economie)</option>
                            <option>Facultatea de Finante, Asigurari, Banci si Burse de Valori</option>
                            <option>Facultatea de Management</option>
                            <option>Facultatea de Marketing</option>
                            <option>Facultatea de Relatii Economice Internationale</option>
                            <option>Facultatea de Drept</option>
                        </Form.Select>
                    </Form.Group>
                    <DropdownButton
                        as={ButtonGroup}
                        id="dropdown-button-drop-end"
                        variant="outline-primary"
                        drop="end"
                        title="Sorteaza dupa media de admitere"
                        className="m-3 mb-0 w-25"
                    // style={{height:"50px"}}
                    >
                        <Dropdown.Item
                            as="button"
                            onClick={() => {
                                getCandidatiAsc()
                            }}
                        >
                            Ascendent <AiOutlineSortAscending />
                        </Dropdown.Item>
                        <Dropdown.Item
                            as="button"
                            onClick={() => {
                                getCandidatiDesc()
                            }}
                        >
                            Descendent <AiOutlineSortDescending />
                        </Dropdown.Item>
                    </DropdownButton></div>



                {cards()}

            </div>
        </>
    );
}

export default ListCandidati;
