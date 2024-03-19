import React from 'react'
import './autodate.css'
import { FaArrowUp } from "react-icons/fa";
import { LuCalculator } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";

const Autodate = () => {
  return (
    <>


    <div
        id="cardContainer"
        style={{
            position: "absolute",
            top:220,
            left:570,
            border: "1px solid black",
    }}>
        <div className="options_container">
            <div className="txt_autodate_container">
                <p className='txt_autodate'>Auto date range</p>
                <div className='tools_autodate'>
                    <LuCalculator className='icon_calc'/>
                    <p className='txt_autodate_header'>Last 3 Months</p>
                </div>
            </div>
            <div className="service_dropdown">
                <p className='txt_services'>Services</p>
                <select className='drop_down_menu_services'>
                    <option className='options_services' value="" selected disabled hidden>All</option>
                </select>
            </div>
            <div className="service_dropdown">
                <p className='txt_services'>Post</p>
                <select className='drop_down_menu_services'>
                    <option className='options_services' value="" selected disabled hidden>All</option>
                </select>
            </div>
        </div>
        <div id="scoreContainer">
                <div className="score">
                    <div className='title'>Ad Spend</div>
                        <div className="individualScore">
                            <div className="countScore"><BsCurrencyDollar  className='icon_dollar_ads' />65.37</div>
                            <div className="scoreData">
                                <FaArrowDown className='icon_arrow' />
                                <div>170%</div>
                            </div>
                            <div className="description"> vs previous 30 days </div>
                        </div>
                    </div>
                    <div className="score">
                    <div className='title'>Cost Per Thousand(CPT)</div>
                        <div className="individualScore">
                            <div className="countScore"><BsCurrencyDollar  className='icon_dollar_ads' />3.94</div>
                            <div className="scoreData">
                                <FaArrowDown  className='icon_arrow' />
                                <div>$0.45</div>
                            </div>
                            <div className="description"> vs previous 30 days </div>
                        </div>
                    </div>
                    <div className="score">
                    <div className='title'>Cost Per Click(CPC)</div>
                        <div className="individualScore">
                            <div className="countScore"><BsCurrencyDollar  className='icon_dollar_ads' />0.15</div>
                            <div className="scoreData">
                                <FaArrowDown className='icon_arrow' />
                                <div>$0.02</div>
                            </div>
                            <div className="description"> vs previous 30 days </div>
                        </div>
                    </div>
                    <div className="score">
                    <div className='title'>Click-Through Rate(CTR)</div>
                        <div className="individualScore">
                            <div className="countScore">2.89<FaPercentage  className='icon_dollar_ads' /></div>
                            <div className="scoreData">
                                <FaArrowUp className='icon_arrow' />
                                <div>7%</div>
                            </div>
                            <div className="description"> vs previous 30 days </div>
                        </div>
                    </div>
                </div>
            <div>
        </div>  
    </div>

    
    </>
  )
}

export default Autodate