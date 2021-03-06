import React, { useEffect } from 'react';
import Quagga from 'quagga';
import { IoScanOutline } from 'react-icons/io5';

import logoReact from '../../../assets/react.png';

import { Video, Container, ScanMarker } from './styles';

interface DataProps {
  codeResult: {
    code: string;
  };
}

const scannerAttemps = 0;

const Scanner: React.FC = () => {
  const onDetected = (data: DataProps) => {
    console.log('passei aqui');
    Quagga.offDetected(onDetected);

    const barCode = data.codeResult.code;

    if (barCode) {
      alert(barCode);
      return;
    }

    // scannerAttemps++;
    if (scannerAttemps >= 5) {
      alert(
        'Não é possivel fazer a leitura do código de barras, por favor, tente novamente.',
      );

      console.log('scannerAttemps', scannerAttemps);
      Quagga.onDetected(onDetected);
    }
  };

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
          numOfWorker: 5,
          locate: true,
          decoder: {
            readers: ['ean_reader', 'code_128_reader'],
          },
        },
        (err: string) => {
          if (err) {
            console.error(err);
            alert(
              'Error ao abrir câmera do dispositivo, por favor, dê permissão para o uso.',
            );
          }

          Quagga.start();
        },

        Quagga.onDetected(onDetected),
      );
    }
  }, []); // eslint-disable-line

  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarker>
          <IoScanOutline size={260} color="#fff" />
          <p>Aponte para o código de barras</p>
        </ScanMarker>
        {/* <img src={logoReact} alt="logo" /> */}
      </Container>
    </>
  );
};

export default Scanner;
