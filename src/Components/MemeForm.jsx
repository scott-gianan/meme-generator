import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Styles/MemeFormStyle.css';
import { useState, useEffect } from 'react';

export default function MemeForm() {
    const [imageData, setImageData] = useState({
        topText : '',
        bottomText: '',
        randomImage: ""
    });

    const [allmemeImages, setAllMemeImages] = useState([]);

    useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setAllMemeImages(data.data.memes));
    },[]);

    const getRandomMemeImage = () => {
        let randomIndex = Math.floor(Math.random()*allmemeImages.length);
        setImageData(previousImageLink => {
            const newImageLink = {
                ...previousImageLink,
                randomImage : allmemeImages[randomIndex].url
            };
            return newImageLink;
        });
    };

    const handleChange = (event) => {
        const {name, type, value} = event.target;
        setImageData(previousImageData => {
            return (
                {
                    ...previousImageData,
                    [name] : value
                }
            );
        });
    };

    return(
        <>
            <Container>
                <Row className='mt-3'>
                    <Col xs={12} md={6} className='mt-3'>
                        <Form.Control type="text" placeholder="Top Text" 
                            onChange={handleChange}
                            name='topText'
                            value={imageData.topText} 
                        />
                    </Col>
                    <Col xs={12} md={6} className='mt-3'>
                        <Form.Control type="text" placeholder="Bottom Text" 
                            onChange={handleChange}
                            name='bottomText'
                            value={imageData.bottomText}
                        />
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={12} md={6} className='mt-3 mx-auto'>
                        <Button variant="primary" onClick={getRandomMemeImage} className='align-self-center w-100'>Get a new meme image!</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='meme'>
                            <img src={imageData.randomImage} className='generated-image' />
                            <h2 className="meme--text top">{imageData.topText}</h2>
                            <h2 className="meme--text bottom">{imageData.bottomText}</h2>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
