import "./Option.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IconContext } from "react-icons/lib";
interface Props {
  Icon: React.FC;
  prompt: string;
}

const Option: React.FC<Props> = ({ Icon, prompt }) => {
  return (
    <div className="option-container">
      <IconContext.Provider value={{ className: "option-type-icon" }}>
        <Icon />
      </IconContext.Provider>

      <p className="option-prompt">{prompt}</p>
      <IoMdArrowRoundForward className="option-prompt-icon" />
    </div>
  );
};

export default Option;
