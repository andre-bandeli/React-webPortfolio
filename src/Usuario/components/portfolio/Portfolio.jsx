import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from '../../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "danca",
      title: "Dança",
    },
    {
      id: "performance",
      title: "Performance",
    },
    {
      id: "audioVisual",
      title: "Audio Visual",
    },
    {
      id: "workshops",
      title: "Workshops",
    },
    {
      id: "premios",
      title: "Prêmios",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "danca":
        setData(featuredPortfolio);
        break;
      case "performance":
        setData(webPortfolio);
        break;
      case "audioVisual":
        setData(mobilePortfolio);
        break;
      case "workshops":
        setData(designPortfolio);
        break;
      case "premios":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            <h4>{d.legenda}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}