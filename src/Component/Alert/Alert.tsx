import { mydata } from "../../data";
import { X } from "lucide-react";
import './Alert.scss'

const Alert = () => {
  return (
    <div>
      {mydata.map((e, index) => {
        return (
          <div className={e.title} key={index}>
            <div className="alert-header">
              <div className="title">
                {e.icon}
                <h4>{e.title}</h4>
              </div>

              <X className="close" size={20} />
            </div>

            {<p>{e.description}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Alert;
