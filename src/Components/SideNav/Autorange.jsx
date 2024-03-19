import React from 'react';
import './autorange.css';
import { FaArrowUp } from "react-icons/fa";
import { LuCalculator } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";


const Autorange = () => {    
  return (
    <div
        id="cardContainer9"
        style={{
            backgroundColor:"white",
            position: "absolute",
            top:360,
            left:532,
    }}>
        <div className="options_container9">
            <div className="txt_autodate_container9">
                <p className='txt_autodate9 pl-3 pt-2'>Auto date range</p>
                <div className='tools_autodate9'>
                    <LuCalculator className='icon_calc9'/>
                    <p className='txt_autodate_header9'>Last 3 Months</p>
                </div>
            </div>
            <div className="service_dropdown9">
                <p className='txt_services9'>Services</p>
                <select className='drop_down_menu_services9'>
                    <option className='options_services9' value="" selected disabled hidden>All</option>
                </select>
            </div>
            <div className="service_dropdown9_post">
                <p className='txt_services9'>Post</p>
                <select className='drop_down_menu_services9'>
                    <option className='options_services9' value="" selected disabled hidden>All</option>
                </select>
            </div>
        </div>
        <div id="scoreContainer9">
                <div className="score9">
                    <div className='title9'>Ad Spend</div>
                        <div className="individualScore9">
                            <div className="countScore9"><BsCurrencyDollar  className='icon_dollar_ads9' />65.37</div>
                            <div className="scoreData9">
                                <FaArrowDown className='icon_arrow9' />
                                <div>170%</div>
                            </div>
                            <div className="description9"> vs previous 30 days </div>
                        </div>
                    </div>
                    <div className="score9 pl-2">
                    <div className='title9'>Cost Per Thousand(CPT)</div>
                        <div className="individualScore9">
                            <div className="countScore9"><BsCurrencyDollar  className='icon_dollar_ads' />3.94</div>
                            <div className="scoreData9">
                                <FaArrowDown  className='icon_arrow9' />
                                <div>$0.45</div>
                            </div>
                            <div className="description9"> vs previous 30 days </div>
                        </div>
                    </div>
                    <div className="score9 pl-2">
                    <div className='title9'>Cost Per Click(CPC)</div>
                        <div className="individualScore9">
                            <div className="countScore9"><BsCurrencyDollar  className='icon_dollar_ads9' />0.15</div>
                            <div className="scoreData9">
                                <FaArrowDown className='icon_arrow9' />
                                <div>$0.02</div>
                            </div>
                            <div className="description9"> vs previous 30 days </div>
                        </div>
                    </div>
                    <div className="score9 pl-2">
                    <div className='title9'>Click-Through Rate(CTR)</div>
                        <div className="individualScore9">
                            <div className="countScore9">2.89<FaPercentage  className='icon_dollar_ads9' /></div>
                            <div className="scoreData9">
                                <FaArrowUp className='icon_arrow9' />
                                <div>7%</div>
                            </div>
                            <div className="description9"> vs previous 30 days </div>
                        </div>
                    </div>
                </div>
            <div>
        </div>  
    </div>
  )
}

export default Autorange