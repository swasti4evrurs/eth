import React from 'react';
import "./myWallet.css";
import Wallet_item from './wallet_item';

class MyWallet extends React.Component {
  constructor() {
  super();
    this.state = {
      companies: [
        {
          company_logo: "logo",
          company_name: "Atlas Holdings Group Inc.",
          company_abbr: "AHGI",
          percent_value: "43.04"
        },
        {
          company_logo: "TNK",
          company_name: "Tonik Studio Inc.",
          company_abbr: "TNK",
          percent_value: "68.12"
        },
        {
          company_logo: "FUN",
          company_name: "Funholding GmbH",
          company_abbr: "FUN",
          percent_value: "94.19"
        },
        {
          company_logo: "HOT.svg",
          company_name: "Hottechi Sp. z o.o.",
          company_abbr: "HOT",
          percent_value: "12.44"
        },
        {
          company_logo: "HOT.svg",
          company_name: "Ontomedia Group GmbH",
          company_abbr: "OGB",
          percent_value: "84.98"
        },
        {
          company_logo: "HOT.svg",
          company_name: "Atlas Holdings Group Inc.",
          company_abbr: "AHGI",
          percent_value: "43.04"
        },
        {
          company_logo: "HOT.svg",
          company_name: "Tonik Studio Inc.",
          company_abbr: "TNK",
          percent_value: "68.12"
        },
        {
          company_logo: "HOT.svg",
          company_name: "Funholding GmbH",
          company_abbr: "FUN",
          percent_value: "94.19"
        },
        {
          company_logo: "HOT",
          company_name: "Hottechi Sp. z o.o.",
          company_abbr: "HOT",
          percent_value: "12.44"
        },
        {
          company_logo: "HOT",
          company_name: "Ontomedia Group GmbH",
          company_abbr: "OGB",
          percent_value: "84.98"
        }
      ]
    } 
  }

  render() {
    let wallet_items = this.state.companies.map(company => {
        return (
            <Wallet_item company={company} />
        )
    })

    return (
      <div className="myWallet box">
        <div className="wallet_top box">
          <h1>My wallet</h1>
          <a href="">
            <span>+</span>
            Invest in another company
          </a>
        </div>
        <div className="wallet_bottom box">
          <div className="cardbtm_inner box">
            {wallet_items}
          </div>
        </div>
      </div>
    )
  }
}

export default MyWallet;
