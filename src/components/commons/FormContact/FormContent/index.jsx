import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TextArea from '../../../forms/TextArea';
import TextField from '../../../forms/TextField';
import Button from '../../../foundation/Button';
import Box from '../../../foundation/layout/Box';
import Grid from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';
import errorAnimation from './animations/error.json';
import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export default function FormContent({ onClose }) {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  };

  const isFormInvalid = userInfo.name.length === 0
  || userInfo.email.length === 0
  || userInfo.message.length === 0;

  return (
    <form
      id="formContact"
      onSubmit={(event) => {
        event.preventDefault();

        setSubmissionStatus(formStates.LOADING);
        setIsFormSubmited(true);

        // setTimeout(() => {
        fetch('https://contact-form-api-jamstack.herokuapp.com/messag', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        }).then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Não foi possível cadastrar o usuário agora :(');
        }).then(() => {
          setSubmissionStatus(formStates.DONE);

          setUserInfo({
            name: '',
            email: '',
            message: '',
          });
        }).catch(() => {
          setSubmissionStatus(formStates.ERROR);
        });
        // }, 100000);
      }}
    >
      <Grid.Row
        margin="0"
      >
        <Grid.Col
          value={{ xs: 11, md: 11 }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              variant="modalTitle"
              tag="h1"
              textTransform="uppercase"
            >
              envie sua mensagem
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 1, md: 1 }}
        >
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            flexGrow="1"
          >
            <Button type="button" onClick={onClose}>x</Button>
          </Box>
        </Grid.Col>
      </Grid.Row>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          {/* https://lottiefiles.com/43920-success-alert-icon */}
          <Lottie
            width="50px"
            height="50px"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <p id="successMessage">Mensagem enviada com sucesso!</p>
          </Box>
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          {/* https://lottiefiles.com/13865-sign-for-error-flat-style */}
          <Lottie
            width="50px"
            height="50px"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <p id="failMessage">>Erro ao enviar a mensagem. Por favor, tente mais tarde! :(</p>
          </Box>
        </Box>
      )}

      <div>
        <Text
          variant="paragraph"
          tag="span"
          paddingBottom="5px"
        >
          Seu nome

        </Text>
        <TextField
          placeholder="Nome"
          name="name"
          value={userInfo.name}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <Text
          variant="paragraph"
          tag="span"
        >
          Seu e-mail

        </Text>
        <TextField
          placeholder="E-mail"
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <Text
          variant="paragraph"
          tag="span"
        >
          Sua mensagem

        </Text>
        <TextArea
          placeholder="Mensagem"
          name="message"
          value={userInfo.message}
          onChange={handleChange}
          rows="7"
        />
      </div>

      {submissionStatus !== formStates.LOADING && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            variant="paragraph"
            tag="span"
            textTransform="uppercase"
            padding="5px"
          >
            enviar
          </Text>
          <Button type="submit" disabled={isFormInvalid}>&gt;</Button>
        </Box>
      )}
      {submissionStatus === formStates.LOADING && (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* https://lottiefiles.com/14975-loading */}
        <Lottie
          width="30px"
          height="30px"
          config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
        />
      </Box>
      )}

    </form>
  );
}

FormContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  onClose: PropTypes.func.isRequired,
};
