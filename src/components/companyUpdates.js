import React from 'react';
import "./companyUpdates.css";
import Update from './update';

class CompanyUpdates extends React.Component {
  constructor() {
  super();
    this.state = {
      comp_updates: [
        {
          update_image: "",
          company_abbr: "AHGI",
          update_title: "Choosing The Best Audio Player Software",
          company_icon: "",
          company_name: "Atlas Holdings Group Inc.",
          update_time: "2 min ago",
          update_content: "Are you considering buying a compatible inkjet cartridge for your printer? There are…"
        },
        {
          update_image: "",
          company_abbr: "TNK",
          update_title: "Why Use External IT Support",
          company_icon: "",
          company_name: "Tonik Studio Inc.",
          update_time: "3 days ago",
          update_content: "Photographs are a way of preserving a moment in our lives for the rest of our lives…Guidelines For Inkjet Cartridge Refill"
        },
        {
          update_image: "",
          company_abbr: "FUN",
          update_title: "Guidelines For Inkjet Cartridge Refill",
          company_icon: "",
          company_name: "Funholding GmbH",
          update_time: "April 3, 2018",
          update_content: "Many people were hoping that if the Democrats won control of Congress they…"
        },
        {
          update_image: "",
          company_abbr: "HOT",
          update_title: "Video Games Playing With Imagination",
          company_icon: "",
          company_name: "Hottechi Sp. z o.o.",
          update_time: "March 28, 2018",
          update_content: "If you are in the market for a computer, there are a number of factors to consider…"
        },
        {
          update_image: "",
          company_abbr: "AHGI",
          update_title: "Choosing The Best Audio Player Software",
          company_icon: "",
          company_name: "Atlas Holdings Group Inc.",
          update_time: "2 min ago",
          update_content: "Are you considering buying a compatible inkjet cartridge for your printer? There are…"
        },
        {
          update_image: "",
          company_abbr: "TNK",
          update_title: "Why Use External IT Support",
          company_icon: "",
          company_name: "Tonik Studio Inc.",
          update_time: "3 days ago",
          update_content: "Photographs are a way of preserving a moment in our lives for the rest of our lives…Guidelines For Inkjet Cartridge Refill"
        },
        {
          update_image: "",
          company_abbr: "FUN",
          update_title: "Guidelines For Inkjet Cartridge Refill",
          company_icon: "",
          company_name: "Funholding GmbH",
          update_time: "April 3, 2018",
          update_content: "Many people were hoping that if the Democrats won control of Congress they…"
        },
        {
          update_image: "",
          company_abbr: "HOT",
          update_title: "Video Games Playing With Imagination",
          company_icon: "",
          company_name: "Hottechi Sp. z o.o.",
          update_time: "March 28, 2018",
          update_content: "If you are in the market for a computer, there are a number of factors to consider…"
        }
      ]
    }
  }

  render() {

    let updates = this.state.comp_updates.map(update => {
        return (
            <Update update={update} />
        )
    })

    return (
      <div className="companyUpdates box">
        <div className="updates_top box">
          <h1>Company updates</h1>
          <a href="">
            All news
          </a>
          <a href="">
            Only my companies
          </a>
        </div>
        <div className="updates_bottom box">
          <div className="cardbtm_inner box">
            {updates}
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyUpdates;
