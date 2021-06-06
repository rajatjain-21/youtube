import "./portfolioTab.scss";

export default function PortfolioTab({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioTab active" : "portfolioTab"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
