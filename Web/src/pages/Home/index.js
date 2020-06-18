import React from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/Footer';

import './styles.css';

// import Logo from '../../assets/logo-agitasantos-hori.png';
import AppTab from '../../assets/Menu.png';
import ANDROID from '../../assets/android.png';
import IOS from '../../assets/ios.png';


import Pitch from '../../assets/pitch.mp4';
import { Carousel } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <NavBar />
      <div className='home-container'>
        <section className='d-flex  home'>
          <div className='d-flex justify-content-between  row'>
            <div className='d-flex col-6'>
              <div>

              </div>
            </div>
          </div>
        </section>
        <section className='primary-background'>
          <div className='container d-flex justify-content-center'>
            <div className='col-10 d-flex justify-content-center'>
              <video controls>
                <source src={Pitch} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
        <section className='pt-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col-12 col-lg-6 image'>
                    <img alt='' src={AppTab} height='500' />
                  </div>
                  <div className='col-12 col-lg-6'>
                    <div className='row'>
                      <div className='col-12'>
                        <h1>
                          Aplicativo
                        </h1>
                      </div>
                      <div className='col-12'>
                        <p>
                          No aplicativo do agita santos,
                          possibilita a os artistas meios
                          de divulgar seus trabalhos e
                          eventos participados é lista
                          para que todos possam
                          visualizar e conhecer seu trabalho.
                        </p>
                      </div>
                      <div className='col-12'>
                        <div className='row'>
                          <div className='col-6 img-link'>
                            <Link to='/'>
                              <img alt='' src={ANDROID} />
                            </Link>
                          </div>
                          <div className='col-6 img-link'>
                            <Link to='/'>
                              <img alt='' src={IOS} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='users d-flex justify-content-center'>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <div className='row'>
                  <div className='col-12'>
                    <h1>Divulgação</h1>
                  </div>
                  <div className='col-12'>
                    <p>Publicidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-0 feedbacks'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <Carousel indicators={false}>
                  <Carousel.Item>
                    <div className='feedback'>
                      <Avatar></Avatar>
                      <h2>Roberto</h2>
                      <h4>Roberto</h4>
                      <p>
                        O agita santos ideia incrivel, esse aplicativo tem futuro.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className='feedback'>
                      <Avatar></Avatar>
                      <h2>Roberto</h2>
                      <h4>Roberto</h4>
                      <p>
                        O agita santos ideia incrivel, esse aplicativo tem futuro.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className='feedback'>
                      <Avatar></Avatar>
                      <h2>Roberto</h2>
                      <h4>Roberto</h4>
                      <p>
                        O agita santos ideia incrivel, esse aplicativo tem futuro.
                      </p>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        <section className='frelencer d-flex justify-content-center'>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <div className='row'>
                  <div className='col-12'>
                    <h1>Frelencer</h1>
                  </div>
                  <div className='col-12'>
                    <p>Oportunidades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col-12 col-lg-6 image'>
                    <img alt='' src={AppTab} height='500' />
                  </div>
                  <div className='col-12 col-lg-6'>
                    <h1>
                      Equipe
                    </h1>
                    <p>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}