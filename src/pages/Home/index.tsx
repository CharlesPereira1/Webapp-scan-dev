import React, { useEffect } from 'react';
import Quagga from 'quagga';

import { Container, Video } from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#video'),
            constraints: {
              facingMode: 'environment',
            },
          },
          numOfWorker: 1,
          locate: true,
          decoder: {
            readers: ['ean_reader'],
          },
        },
        (err: string) => {
          if (err) {
            console.error(err);
            alert(
              'Error ao abrir câmera do dispositivo, por favor, dê permissão para o uso.',
            );
          }
        },
      );
    }
  }, []);

  return (
    <Container>
      <Video id="video" />
    </Container>
  );
};

export default Home;
