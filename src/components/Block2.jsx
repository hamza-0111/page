import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";

function Block2() {
    const accountData = [
        { year: "2020", activeAccounts: 60, inactiveAccounts: 20 },
        { year: "2021", activeAccounts: 90, inactiveAccounts: 40 },
        { year: "2022", activeAccounts: 100, inactiveAccounts: 60 },
        { year: "2023", activeAccounts: 130, inactiveAccounts: 70 },
        { year: "2024", activeAccounts: 150, inactiveAccounts: 90 },
       
    ];
    
    const stakedIssuanceData = [
        { year: "2020", stakedIssuance: 10000 },
        { year: "2021", stakedIssuance: 15000 },
        { year: "2022", stakedIssuance: 20900 },
        { year: "2023", stakedIssuance: 20000 },
        { year: "2024", stakedIssuance: 30000 },
    ];

    return (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
        
           
            <div style={{ flex: 1 }}>
            <div style={{ textAlign: "center", color: "#FFF" }}>
                <h3>Total Active Accounts</h3>
                <h3>93,741</h3>
                <ResponsiveContainer width="90%" height={300}>
                    <AreaChart data={accountData}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="activeAccounts" fill="#248275" stroke="#248275" name="Active Accounts" />
                        <Area type="monotone" dataKey="inactiveAccounts" fill="#BF7328" stroke="#BF7328" name="Inactive Accounts" />
                        {/* <Label value="Total Active Accounts" position="insideTop" fill="#FFF" /> */}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            </div>

            <div style={{ flex: 1 }}>
        
                <div style={{ textAlign: "center", color: "#FFF" }}>
                <h3>Staked Issuance</h3>
                <h3>6,246,404τ</h3>

            </div>

                <ResponsiveContainer width="90%" height={300}>
                    <AreaChart data={stakedIssuanceData}>
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="stakedIssuance" fill="#535353" stroke="#535353" name="Staked Issuance" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Block2;
