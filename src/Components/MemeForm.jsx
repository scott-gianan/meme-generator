import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MemesData from '../../memesData.jsx';
import '../Styles/MemeFormStyle.css';
import { useState } from 'react';

export default function MemeForm() {
    const memesDataArray = MemesData.data.memes;

    const [imageLink, setImageLink] = useState({
        topText : '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allmemeImages, setAllMemeImages] = useState(memesDataArray);

    const getRandomMemeImage = () => {
        let randomIndex = Math.floor(Math.random()*allmemeImages.length);
        setImageLink(previousImageLink => {
            const newImageLink = {
                ...previousImageLink,
                randomImage : allmemeImages[randomIndex].url
            }
            return newImageLink
        })

    }

    return(
        <>
            <Container>
                <Row className='mt-3'>
                    <Col xs={12} md={6} className='mt-3'>
                        <Form.Control type="text" placeholder="Top Text" />
                    </Col>
                    <Col xs={12} md={6} className='mt-3'>
                        <Form.Control type="text" placeholder="Bottom Text" />
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={12} md={6} className='mt-3 mx-auto'>
                        <Button variant="primary" onClick={getRandomMemeImage} className='align-self-center w-100'>Get a new meme image!</Button>
                    </Col>
                </Row>
                <img src={imageLink.randomImage} className='generated-image' />
            </Container>
        </>
    )
}
