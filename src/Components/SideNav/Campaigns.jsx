import React from 'react'
import "./camp.css"
import { LuCalculator } from "react-icons/lu";
import { FaHubspot, FaViacoin } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { SiClickup } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Card,Row,Col } from 'react-bootstrap';
Chart.register(ArcElement);


const data = {
  datasets: [
    {
      data: [40, 10, 50],
      backgroundColor: ["darkgreen", "lightgreen", "grey"],
      display: true,
      borderColor: "#D1D6DC",
    },
  ],
};
const data1 = {
  datasets: [
    {
      data: [70, 20, 10],
      backgroundColor: ["darkgreen", "lightgreen", "grey"],
      display: true,
      borderColor: "#D1D6DC",
    },
  ],
};
const data2 = {
    datasets: [
      {
        data: [0, 0, 100],
        backgroundColor: ["darkgreen", "lightgreen", "grey"],
        display: true,
        borderColor: "#D1D6DC",
      },
    ],
  };
  

const Campaigns = () => {
  return (
    <div className="header">
        <Row>
            <Col>
       <div className="campaign">
            <p className='txt_campaign'>Campaigns</p>
            <hr className='line_campaign'></hr>
            <div className='campaign_content'>
                <div className='tools'>
                    <div className='tools_header'>
                        <LuCalculator className='icon_calc'/>
                        <p className='txt_tools_header'>Last 3 Months</p>
                    </div>
                    <div className='tools_icon'>
                        <FaHubspot className='icon_hubspot' />
                        <FaTrello className='icon_trello' />
                        <FaSlack className='icon_slack' />
                        <SiClickup className='icon_clickup' />
                        <FaFacebookSquare className='icon_fb' />
                    </div>
                </div>
                <div className='email'>
                    <p className='txt_email'>Email Sent</p>
                    <h3 className='no_email'>12,620</h3>
                    <div className="growth">
                        <BiUpArrowAlt className='arrow_up' />
                        <p className='txt_growth'>5%</p>
                    </div>
                </div>
                <div className='transaction_revenue'>
                    <p className='txt_transaction'>Transaction Revenue</p>
                    <div className='div_no_transaction'>
                        <h3 className='no_transcation'>21.380,80</h3>
                        <BsCurrencyDollar className='icon_dolar' />
                    </div>
                  
                    <div className="growth">
                        <BiUpArrowAlt className='arrow_up_Transaction'/>
                        <p className='transcation_txt_growth'>5%</p>
                    </div>
                </div>
            </div>
        </div>
        </Col>
        <Col>
        < div className='campaign_ads row ml-2'>

            <div className='campaign_ads_container col-md-4'>
                <p className='campaign_txt_ads'>Google Ads</p>
                <div className='campaign_amt_ads_container'>
                    <h1 className='campaign_amt_ads'><span className='campaign_icon_dollar_ads'>$</span>13.5</h1>
                    <h3 className='campaign_amt_substands'>K</h3>
                </div>
                <small className='text-center text-dark spent_text'>Spent This Month</small>
                <div className="inside_campaign_container"> 
                    <div className="campaign_skill google_ads"></div> 
                </div> 
                <small className='campaign_ads_percentage'>62%</small>
            </div>


            <div className='campaign_ads_container col-md-4'>
                <p className='campaign_txt_ads'>Facebook</p>
                <div className='campaign_amt_ads_container'>
                    
                    <h1 className='campaign_amt_ads'><span className='campaign_icon_dollar_ads'> $ </span> 4.5</h1>
                    <h3 className='campaign_amt_substands'>K</h3>
                </div>
                <small className='text-center text-dark spent_text'>Spent This Month</small>
                <div className="inside_campaign_container"> 
                    <div className="campaign_skill facebook_ads"></div> 
                </div> 
                <small className='campaign_ads_percentage'>46%</small>
            </div>


            <div className='campaign_ads_container col-md-4'>
                <p className='campaign_txt_ads'>Instagram</p>
                <div className='campaign_amt_ads_container'>
                   
                    <h1 className='campaign_amt_ads'><span className='campaign_icon_dollar_ads'>$</span>1.7</h1>
                    <h3 className='campaign_amt_substands'>K</h3>
                </div>
                <small className='text-center text-dark spent_text'>Spent This Month</small>
                <div className="inside_campaign_container"> 
                    <div className="campaign_skill instagram_ads"></div> 
                </div> 
                <small className='campaign_ads_percentage'>21%</small>
            </div>

            
            <div className='row'>
              <div className="conversion col-md-4">
                  <h1 className='no_conversion'>302</h1>
                  <p className='txt_conversion'>Conversion</p>
              </div>
              <div className="conversion col-md-4 pl-4">
                  <h1 className='no_conversion'>302</h1>
                  <p className='txt_conversion'>Conversion</p>
              </div>
              <div className="conversion col-md-4 pl-3">
                  <h1 className='no_conversion pl-4'>302</h1>
                  <p className='txt_conversion pl-4'>Conversion</p>
              </div>
            </div>
            
        </div> 
        </Col>
        <Col>

       <div className='adss'>
       <Card className='adsss' style={{ position: "relative", width: "100px",height:"235px", marginLeft:"20px"}}>
 
 <div   style={{ width: "80px",height:"auto",marginLeft:"10px" }}>
 
 {/* First Doughnut */}
 <Doughnut
   data={data}
   options={{
     plugins: {
       legend: {
         display: false,
       },
       tooltip: {
         enabled: false,
       },
     },
   
     rotation: -90,
     circumference: 180,
     cutout: "60%",
     maintainAspectRatio: true,
     responsive: true,
   }}
 />
  </div>
  
<div style={{ width: "80px",height:"auto",marginLeft:"10px" }}>
<Doughnut

   data={data1}
   options={{
     plugins: {
       legend: {
         display: false,
       },
       tooltip: {
         enabled: false,
       },
     },
     rotation: -90,
     circumference: 180,
     cutout: "60%",
     maintainAspectRatio: true,
     responsive: true,
   }}
 /></div>
 
 <div style={{ width: "80px",height:"auto",marginLeft:"10px" }}>
 {/* Third Doughnut */}

 <Doughnut
   data={data2}
   options={{
     plugins: {
       legend: {
         display: false,
       },
       tooltip: {
         enabled: false,
       },
     },
     rotation: -90,
     circumference: 180,
     cutout: "60%",
     maintainAspectRatio: true,
     responsive: true,
   }}
 />
</div >
<div style={{ color:"black" }} >
<span  style={{ position:"absolute",top:"3px",fontSize:"8px",left:"10px",fontWeight:"10px",color:"black" }} >Email Recieved</span>
<span  style={{ position:"absolute",top:"45px",fontSize:"10px",left:"35px",fontWeight:"25px",color:"black" }} >19,574</span>
<span  style={{ position:"absolute",top:"65px",fontSize:"4px",left:"35px",fontWeight:"15px",color:"black" }} > previous 30 day</span>
<span  style={{ position:"absolute",top:"80px",fontSize:"8px",left:"10px",color:"black" }} >Email sent</span>
<span  style={{ position:"absolute",top:"125px",fontSize:"10px",left:"35px",fontWeight:"25px", color:"black"}} >26,112</span>
<span  style={{ position:"absolute",top:"145px",fontSize:"4px",left:"35px",fontWeight:"15px", color:"black"}} > previous 30 day</span>
<span  style={{ position:"absolute",top:"160px",fontSize:"8px",left:"10px", color:"black"}} >Email Recieved</span>
<span  style={{ position:"absolute",top:"205px",left:"45px",fontSize:"15px",fontWeight:"25px", color:"black"}} >0</span>
<span  style={{ position:"absolute",top:"225px",fontSize:"4px",left:"35px",fontWeight:"15px", color:"black"}} > previous 30 day</span>

</div>
 </Card>
      </div>
       </Col>
       </Row>
    </div>
  )
}

export default Campaigns;