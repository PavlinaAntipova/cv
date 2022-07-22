import Modal from 'components/Modal';
import { useState } from 'react';
import { BsCursorFill } from 'react-icons/bs';
import { EducationItem, Period, Courses, Certifications, CertificationsItem, NameBox, Img } from '../style/EducationPage.styled';

import { certifications } from '../../data/certifications';

const Education = () => {
    const [showModal, setShowModal] = useState(false);
    const [idModalItem, setIdModalItem] = useState(null);

  
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  }

  const getItemId = id => {
    setIdModalItem(id);
  }
    
const [modalItem] = certifications.filter(certification => idModalItem === certification.id);

    return <section>
        <h2 className="visually-hidden">Education</h2>
        <Courses>
            <EducationItem><div><BsCursorFill size='15'/><h3>IT School GOIT</h3></div> <Period>Jun 2021 - Jul 2022</Period>
            <p>Full Stack Developer | React + Node.js</p></EducationItem>
            <EducationItem><div><BsCursorFill size='15'/><h3>National University of Life and Environmental Sciences of Ukraine</h3></div> <Period>Sep 2014 - Jun 2018</Period>
            <p>Bachelor | Marketing</p></EducationItem>
        </Courses>

        <h2>Certifications</h2>
        <Certifications>
            {certifications.map(certification => <CertificationsItem key={certification.id}>
                <NameBox>
                    <img src={certification.logo} alt={`${certification.company} logo`} width="15" />
                    <h4><button onClick={(e) => { toggleModal(); getItemId(certification.id) }}>{certification.name}</button></h4>
                </NameBox>
                
                <p>{certification.company}</p>
            </CertificationsItem>)}
        </Certifications>

        {showModal && <Modal toggleModal={toggleModal}><Img src={modalItem.img} alt={modalItem.name} /></Modal>}

    </section>
}

export default Education;