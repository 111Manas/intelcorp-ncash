const ArrowDown = "/images/icons/arrow-down.svg";

type TDropdownButton = {
  className?: string;
  btnName?: string;
};

const DropdownButton: React.FC<TDropdownButton> = ({ className, btnName }) => {
  return (
    <div className="dropdown">
      <button
        className={`btn ${className} text-light`}
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span> {btnName} </span>
        <img
          src={process.env.PUBLIC_URL + ArrowDown}
          className="img-fluid"
          alt="icon"
        />
      </button>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <a className="dropdown-item" href="#">
            <div>
              <img
                src="images/icons/icon.png"
                className="img-fluid"
                alt="icon"
              />
              <span data-bs-toggle="modal" data-bs-target="#exampleModal">
                {" "}
                Add Single{" "}
              </span>
            </div>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <div>
              <img
                src="images/icons/icon.png"
                className="img-fluid"
                alt="icon"
              />
              <span> Add Multiple </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default DropdownButton;
