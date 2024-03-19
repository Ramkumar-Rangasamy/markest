import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Card } from 'react-bootstrap';




import './sidenav.css';
import { FaSearch } from "react-icons/fa";
import { BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { HiBellAlert } from "react-icons/hi2";
// import { SiCocacola } from "react-icons/si";
import { ImFolderPlus } from "react-icons/im";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAd, 
  faBullseye, 
  faChartBar, 
  faTasks, 
  faRoute, 
  faLightbulb, 
  faPlug, 
  faCircleHalfStroke, 
  faLifeRing,
  faGear,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import logo from './Assets/logo.png';

import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { RiArrowUpSFill } from "react-icons/ri";

import { RiTriangleFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";


//icons 
import { SiCocacola } from "react-icons/si";
import { SiBuffer } from "react-icons/si";
import { SiHootsuite } from "react-icons/si";
import { SiZoho } from "react-icons/si";
import { FaSalesforce } from "react-icons/fa6";

//
import Cocacola from './Cocacola';
import Others from './Others';
import Campaigns from './Campaigns';
import Numberchat from './Numberchat';
import Autorange from './Autorange';
import Card3 from './Card3';
import Autostatus from './Autostatus';


const Sidenav = () => {

    const chartRef = useRef(null);
   
  useEffect(() => {

    //Analytic charbar
    const ctx = chartRef.current.getContext('2d');

    const gradient = ctx.createLinearGradient(1, 1, 1, 550);
    gradient.addColorStop(0, '#0f5132'); 
    gradient.addColorStop(1, '#FFFFFF');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        
        labels: ['Day', 'Week', 'Month','Year'],
        datasets: [
          { 
            label: 'Dataset 1',
            data: [3, 2, 4,4],
            backgroundColor: gradient,
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [4, 3.5, 2,2 ],
            backgroundColor: gradient, // Change color as needed
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [3.5, 6, 5, 5],
            backgroundColor: gradient, // Change color as needed
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [6, 7, 6, 6],
            backgroundColor: gradient, // Change color as needed
            borderWidth: 1,
          },
          // Add more datasets as needed
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        },
        indexAxis: 'x',
        plugins: {
          legend: {
            display: false,
          },
        },
        barPercentage: 0.8, // Adjust as needed
        categoryPercentage: 0.6, // Adjust as needed
      },
    });


    //

    return () => {
      myBarChart.destroy();
    };
  }, []);
  return (
    <>
      <div className='full'>
        <div className="container-fluid">
          
          <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand pl-5" href="#">
              <img src={logo} width='200' className='img-logo' alt="Logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav search-font ml-auto  ">
                <li class="nav-item active">
                  <a class="nav-link text-light  pr-4 pt-3" href="#"><FaSearch /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light pr-4 pt-3" href="#"><ImFolderPlus /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light pr-4 pt-3" href="#"><BsFillEnvelopeExclamationFill /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light pt-3" href="#"><HiBellAlert /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light " href="#"><SiCocacola className='cocaola' /></a>
                </li>
              </ul>
            </div>
          </nav>

          

          <div className="row">
            <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block  full sidebar">
              <div className="position-sticky side">
                <ul className="nav flex-column pl-4">
                  <div className='allname'>
                    <li className='pl-4 pb-2 Dashboard'>
                      <p>Dashboard</p>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        <div className='row'>
                          <div>
                            <FontAwesomeIcon icon={faAd} className='font-style'/>
                          </div>
                          <div>
                            <p className='pl-1'>Advertise</p>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link " href="#">
                        <div className='row'>
                        <div>
                            <FontAwesomeIcon icon={faBullseye} className='font-style'/>
                        </div>
                        <div>
                            <p className='pl-1'>Radar</p>
                        </div>
                        </div>
                    </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#">
                            <div className='row'>
                            <div>
                                <FontAwesomeIcon icon={faTasks} className='font-style'/>
                            </div>
                            <div>
                                <p className='pl-1'>Engage</p>
                            </div>
                            </div>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#">
                            <div className='row'>
                            <div>
                                <FontAwesomeIcon icon={faRoute} className='font-style'/>
                            </div>
                            <div>
                                <p className='pl-1'>Analystics</p>
                            </div>
                            </div>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#">
                            <div className='row'>
                            <div>
                                <FontAwesomeIcon icon={faLightbulb} className='font-style'/>
                            </div>
                            <div>
                                <p className='pl-1'>Activities</p>
                            </div>
                            </div>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#">
                            <div className='row'>
                            <div>
                                <FontAwesomeIcon icon={faPlug} className='font-style'/>
                            </div>
                            <div>
                                <p className='pl-1'>Tracking</p>
                            </div>
                            </div>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#">
                            <div className='row'>
                            <div>
                                <FontAwesomeIcon icon={faCircleHalfStroke} className='font-style'/>
                            </div>
                            <div>
                                <p className='pl-1'>Insights</p>
                            </div>
                            </div>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#">
                            <div className='row'>
                            <div>
                                <FontAwesomeIcon icon={faChartBar} className='font-style'/>
                            </div>
                            <div>
                                <p className='pl-1'>Integration</p>
                            </div>
                            </div>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#">
                            <div className='row'>
                            <div>
                                <FontAwesomeIcon icon={faGear} className='font-style' />
                            </div>
                            <div>
                                <p className='pl-1'>Settings</p>
                            </div>
                            </div>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#">
                            <div className='row'>
                            <div>
                                <FontAwesomeIcon icon={faLifeRing} className='font-style'/>
                            </div>
                            <div>
                                <p className='pl-1'>Support</p>
                            </div>
                            </div>
                        </a>
                    </li>

                    <li className="nav-item pt-5">
                      <a className="nav-link " href="#">
                        <div className='row'>
                          <div>
                            <FontAwesomeIcon icon={faEnvelope} className='font-style' />
                          </div>
                          <div>
                            <p className='pl-1'>Team chat</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4  ">

              <div className="mb-2">
                <div className='emt-box '></div>
              </div>

              <div className='row'>
                <div className='container-fluid '>
                    <div className='total-head'>
                      <div className='row'>
                          <div className='social-head'>
                          <p>Social Media Followers</p>
                          <hr className='custom'/>
                              <div className='brand-list'>
                                  <div className='row'>

                                      <div className='col-md-3 col-3  '>

                                          <div className='select-1 p-2'>
                                              <h5 className='text-start'>24.5k</h5>
                                              <p className='text-start'>Twitter</p>

                                              <div className='row'>
                                              
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark text-start  pl-5' href='#'><RiTwitterXLine  className='font'/></a>
                                                  </div>
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark  pl-2' href='#'><RiArrowUpSFill className='font-color ' /></a>
                                                  </div>
                                              
                                              </div>

                                              <div className='para-single '>
                                              
                                              <span>Insert your desired text here.</span>
                                              </div>
                                          </div>

                                      </div>

                                      <div className='col-md-3 col-3  '>

                                          <div className='select-1 p-2'>
                                              <h5 className='text-start'>21.2K</h5>
                                              <p className='text-start'>Facebook</p>

                                              <div className='row'>
                                              
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark text-start  pl-5' href='#'><FaFacebookSquare  className='font'/></a>
                                                  </div>
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark  pl-2' href='#'><RiArrowUpSFill className='font-color ' /></a>
                                                  </div>
                                              
                                              </div>

                                              <div className='para-single '>
                                              
                                              <span>Insert your desired text here.</span>
                                              </div>
                                          </div>

                                      </div>

                                      <div className='col-md-3  col-3  '>

                                          <div className='select-1 p-2'>
                                              <h5 className='text-start'>14.7K </h5>
                                              <p className='text-start'>LinkedIn</p>

                                              <div className='row'>
                                              
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark text-start  pl-5' href='#'><FaLinkedin  className='font'/></a>
                                                  </div>
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark  pl-2' href='#'><RiArrowUpSFill className='font-color ' /></a>
                                                  </div>
                                              
                                              </div>

                                              <div className='para-single '>
                                              
                                              <span>Insert your desired text here.</span>
                                              </div>
                                          </div>

                                      </div>

                                      <div className='col-md-3 col-3  '>

                                          <div className='select-1 p-2'>
                                              <h5 className='text-start'>74.4K </h5>
                                              <p className='text-start'>Instagram</p>

                                              <div className='row'>
                                              
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark text-start  pl-5' href='#'><TiSocialInstagram  className='font'/></a>
                                                  </div>
                                                  <div className='col-md-6 col-2'>
                                                  <a className='text-dark  pl-2' href='#'><RiArrowUpSFill className='font-color ' /></a>
                                                  </div>
                                              
                                              </div>

                                              <div className='para-single '>
                                              
                                              <span>Insert your desired text here.</span>
                                              </div>
                                          </div>

                                      </div>

                                      

                                      
                                  </div>
                              </div>
                          </div>

                          <div className='col-md-3'>
                              <div className='facebook'>
                                <p className=''>Facebook</p> 
                                <hr className='custom-hr-two'/> 
                                  <div className='flex-container'>
                                    <div class="flex-box">$ 10k<p>spend</p> </div>
                                    <div class="flex-box"> . 567<p className='text-center'>Clicks</p></div>
                                  </div>
                                <div class="flex-container">
                                      <div class="flex-box">$ 15k<p>CPC</p></div>
                                      <div class="flex-boxone">
                                          <RiTriangleFill id="tri-icon" /><RxDotFilled id="tri-icon" />75</div>
                                  </div>

                              </div>




                              <div className='facebook mt-2'>
                                <p>Instagram</p> 
                                <hr className='custom-hr-two'/> 
                                <div className='flex-container'>
                                    <div class="flex-box">$ 12k<p>spend</p> </div>
                                    <div class="flex-box"> . 713<p className='text-center'>Clicks</p></div>
                                  </div>
                                <div class="flex-container">
                                      <div class="flex-box">$ 13k<p>CPC</p></div>
                                      <div class="flex-boxone">
                                          <RiTriangleFill id="tri-icon" /><RxDotFilled id="tri-icon" />69</div>
                                  </div>
                              </div>

                              <div className='Twitter mt-2'>
                                <p>Twitter</p> 
                                <hr className='custom-hr-two'/> 
                                <div className='flex-container'>
                                    <div class="flex-box-Twitter"> </div>
                                    <div class="flex-box-Twitter"> </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      
                      <div className='col'>
                        <div className='Analytic-card-head pl-2 pt-1  mt-2'>
                            <Card style={{ width: '335px', height: '200px', border: 'none' }} className=' '>
                              <Card.Header className='Analytic '>Analytic</Card.Header>
                                <div>
                                    <canvas ref={chartRef} width="300px" height="150px"></canvas>
                                </div>
                                
                            </Card>    
                        </div>
                      </div> 
                    

                  </div>
                </div>
                <div className=''>

                  <Numberchat/>
                </div>
                <div>
                   <Campaigns/>
                </div>

                <div>
                  <Autorange/>
                </div>
                <div>
                  <Autostatus/>
                </div>
                <div>
                   <Card3/>
                </div>
              </div> 






              <div className='banner_container'>
                      <div className='row'>
                        <div className="cola_banner_container">
                          <p className='horizontal-rule  txt_cola'>CocaCola</p>
                          <SiCocacola className='logo_coca'/>
                          <div className="grid_week_month">
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container'>
                                      <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>112.5</h1>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt'>This Month</small>
                                  <div class="container_progress_cola"> 
                                      <div class="skill cola_ads"></div> 
                                  </div> 
                                  <small className='ads_percentage'>39%</small>
                            </div> 
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container text-dark'>
                                      <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>18.6</h1>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt'>This Week</small>
                                  <Cocacola/>
                            </div> 
                          </div>
                        </div>

                        <div className="cola_banner_container-two">
                          <p className='horizontal-rule  txt_cola-other'>Buffer</p>
                            <div className='row'>
                              <div>
                                <SiBuffer className='buffer-logo'/>
                              </div>
                              <div>
                                <h4 className='buffer-name'>Buffer</h4>
                              </div>
                            </div>
                            <div className="grid_week_month">
                              <div className='cola_ads_container'>
                                <div className='amt_ads_container'>
                                  <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>93.8</h1>
                                  <h3 className='amt_substands_cola'>K</h3>
                                </div>
                                <small className='ads_spent_txt'>This Month</small>
                                <div class="container_progress_cola"> 
                                  <div class="skill cola_ads"></div> 
                                </div> 
                                <small className='ads_percentage'>39%</small>
                              </div> 
                            </div>
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container text-dark'>
                                      <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>11.5</h4>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt'>This Week</small>
                                  <Others/>
                            </div> 

                        </div>

                        <div className="cola_banner_container-two">
                          <p className='horizontal-rule  txt_cola-other'>Hootsuite</p>
                            <div className='row'>
                              <div>
                                <SiHootsuite className='Hootsuite-logo'/>
                              </div>
                              <div>
                                <h4 className='Hootsuite-name'>Hootsuite</h4>
                              </div>
                            </div>
                            <div className="grid_week_month">
                              <div className='cola_ads_container'>
                                <div className='amt_ads_container'>
                                  <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>101</h1>
                                  <h3 className='amt_substands_cola'>K</h3>
                                </div>
                                <small className='ads_spent_txt'>This Month</small>
                                <div class="container_progress_cola"> 
                                  <div class="skill cola_ads"></div> 
                                </div> 
                                <small className='ads_percentage'>39%</small>
                               
                              </div> 
                            </div>
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container text-dark'>
                                      <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>12.5</h4>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt'>This Week</small>
                                  <Others/>
                            </div> 

                        </div>

                        <div className="cola_banner_container-two">
                          <p className='horizontal-rule  txt_cola-other'>Zoho</p>
                                <SiZoho className='logo_Zoho'/>
                            <div className="grid_week_month">
                              <div className='cola_ads_container'>
                                <div className='amt_ads_container'>
                                  <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>145</h1>
                                  <h3 className='amt_substands_cola'>K</h3>
                                </div>
                                <small className='ads_spent_txt'>This Month</small>
                                <div class="container_progress_cola"> 
                                  <div class="skill cola_ads"></div> 
                                </div> 
                                <small className='ads_percentage'>39%</small>
                              </div> 
                            </div>
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container text-dark'>
                                      <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>21.1</h4>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt'>This Week</small>
                                  <Others/>
                            </div> 

                        </div>

                        <div className="cola_banner_container-two">
                          <p className='horizontal-rule  txt_cola-other'>Salesforce</p>
                                <FaSalesforce className='logo_Salesforce'/>
                            <div className="grid_week_month">
                              <div className='cola_ads_container'>
                                <div className='amt_ads_container'>
                                  <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>113.4</h1>
                                  <h3 className='amt_substands_cola'>K</h3>
                                </div>
                                <small className='ads_spent_txt'>This Month</small>
                                <div class="container_progress_cola"> 
                                  <div class="skill cola_ads"></div> 
                                </div> 
                                <small className='ads_percentage'>39%</small>
                              </div> 
                            </div>
                            <div className='cola_ads_container'>
                                  <div className='amt_ads_container text-dark'>
                                      <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>24.2</h4>
                                      <h3 className='amt_substands_cola'>K</h3>
                                  </div>
                                  <small className='ads_spent_txt'>This Week</small>
                                  <Others/>
                            </div> 

                        </div>
                      </div>
              </div>

            </main>




             



          </div>
        </div>
      </div>


      
    </>
  )
}

export default Sidenav;


