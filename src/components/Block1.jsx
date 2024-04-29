 
import React, { useEffect, useRef } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function Block1() {
  useEffect(() => {
    const script = document.createElement("script");
    // script.src = "https://s3.tradingview.com/tv.js";
    // script.async = true;

    const initTradingView = () => {
      new window.TradingView.widget({
        width: "100%",
        height: 380,
        symbol: "MEXC:TAOUSDT",
        interval: "60",
        timezone: "Europe/Lisbon",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_legend: true,
        container_id: "tradingview_179e2",
        overrides: {
          "paneProperties.background": "#131722",
          "paneProperties.vertGridProperties.color": "#363c4e",
          "paneProperties.horzGridProperties.color": "#363c4e",
          "scalesProperties.textColor": "#AAA",
          "mainSeriesProperties.candleStyle.upColor": "#14dec2",
          "mainSeriesProperties.candleStyle.downColor": "#ff9900",
          "mainSeriesProperties.candleStyle.drawWick": true,
          "mainSeriesProperties.candleStyle.drawBorder": true,
          "mainSeriesProperties.candleStyle.borderColor": "#14dec2",
          "mainSeriesProperties.candleStyle.borderUpColor": "#14dec2",
          "mainSeriesProperties.candleStyle.borderDownColor": "#ff9900",
          "mainSeriesProperties.candleStyle.wickColor": "#14dec2",
          "mainSeriesProperties.candleStyle.wickUpColor": "#14dec2",
          "mainSeriesProperties.candleStyle.wickDownColor": "#ff9900",
          "mainSeriesProperties.barStyle.upColor": "#14dec2",
          "mainSeriesProperties.barStyle.downColor": "#ff9900",
          "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
          "mainSeriesProperties.barStyle.dontDrawOpen": false,
          "mainSeriesProperties.areaStyle.color1": "#14dec2",
          "mainSeriesProperties.areaStyle.color2": "#ff9900",
          "mainSeriesProperties.areaStyle.linecolor": "#14dec2",
          "mainSeriesProperties.areaStyle.linestyle": 0,
          "mainSeriesProperties.areaStyle.linewidth": 1,
          "mainSeriesProperties.areaStyle.priceSource": "close",
          "mainSeriesProperties.areaStyle.transparency": 80
        },
        studies_overrides: {
          "volume.volume.color.0": "#14dec2",
          "volume.volume.color.1": "#ff9900",
          "volume.volume.transparency": 75
        }
      });
    };

    script.onload = initTradingView;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 }
  ];


  return (
    <section className="stats_metagraph_block">
      <div className="container">
        <div className="staking_data_block">
          <div className="staking_bittensor_block">
            <div className="staking_data_box">
              <div className="staking_data_label">
                <label>Bittensor price</label>
                <div className="tag">TAO</div>
               
              </div>
              <div className="staking_data_price">
                <div className="font-30">$601.24</div>
                <span className="down">&#9662; 24.43%</span>
              </div>
            </div>
          </div>
          <div className="staking_data_box">
            <label>Market Cap</label>
            <div className="stake_val">$3.85b</div>
          </div>
          <div className="staking_data_box">
            <label>24h Volume</label>
            <div className="stake_val">$27.97m</div>
          </div>
          <div className="staking_data_box">
            <div className="staking_data_label">
              <label>Circulating Supply</label>
              <div className="info_icon">
                <div className="info_pop">
                  <div className="info_pop_content"></div>
                </div>
              </div>
            </div>
            <div className="stake_val">6,246,404&#120707;</div>
          </div>
          <div className="staking_data_box">
            <label>Total Supply</label>
            <div className="stake_val">21,000,000&#120707;</div>
          </div>
          <div className="staking_data_box">
            <div className="staking_data_label">
              <label>Validating APR</label>
              
            </div>
            <div className="stake_val">19.39%</div>
          </div>
          <div className="staking_data_box">
            <div className="staking_data_label">
              <label>Staking APR</label>
              
            </div>
            <div className="stake_val">15.9%</div>
          </div>
        </div>
      </div>

      <div className="stack_metagraph_block">
        <div className="metagraph_block">
          <span>Trading View</span>
        </div>
        <div className="metagraph_view">
          <div id="stat_metagraph"></div>
        </div>
        <div className="trading_view" id="tradingview_179e2"></div> 
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Area type="monotone" dataKey="pv" fill="#15DEC2" stroke="#15DEC2" name=" View" />
            <Area type="monotone" dataKey="uv" fill="#B56F08" stroke="#B56F08" name="Trading View" />


          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default Block1;