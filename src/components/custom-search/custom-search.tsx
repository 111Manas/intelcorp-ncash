import "./custom-search.scss";
const SearchIcon = "/images/icons/search.svg";

type TCustomSearchBar = {
  width?: string;
  height?: string;
  display?: string;
  boxShadow?: string;
  background?: string;
  text?: string;
};

const CustomSearchBar: React.FC<TCustomSearchBar> = ({
  width,
  height,
  display,
  boxShadow,
  background,
  text = "User Search",
}) => {
  return (
    <div
      id="custom-search"
      style={{
        boxShadow: boxShadow,
        background: background,
        display: display,
        height: height,
        width: width,
      }}
    >
      <button type="submit">
        <img
          src={process.env.PUBLIC_URL + SearchIcon}
          alt="search icon"
          width="18"
          height="18"
        />
      </button>{" "}
      <input type="search" placeholder={text} />
    </div>
  );
};
export default CustomSearchBar;
