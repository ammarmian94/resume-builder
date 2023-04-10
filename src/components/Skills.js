import "./Resume.css";

function Skills() {
  return (
    <>
      <div className="section">
        <div className="section__title">Skills</div>
        <div className="skills">
          <div className="skills__item">
            <div className="left">
              <div className="name">Javascript</div>
            </div>
            <div className="right">
              <input id="ck1" type="checkbox" defaultChecked="true" />
              <label htmlFor="ck1" />
              <input id="ck2" type="checkbox" defaultChecked="true" />
              <label htmlFor="ck2" />
              <input id="ck3" type="checkbox" />
              <label htmlFor="ck3" />
              <input id="ck4" type="checkbox" />
              <label htmlFor="ck4" />
              <input id="ck5" type="checkbox" />
              <label htmlFor="ck5" />
            </div>
          </div>
        </div>
        <div className="skills__item">
          <div className="left">
            <div className="name">CSS</div>
          </div>
          <div className="right">
            <input id="ck1" type="checkbox" defaultChecked="true" />
            <label htmlFor="ck1" />
            <input id="ck2" type="checkbox" defaultChecked="true" />
            <label htmlFor="ck2" />
            <input id="ck3" type="checkbox" />
            <label htmlFor="ck3" />
            <input id="ck4" type="checkbox" />
            <label htmlFor="ck4" />
            <input id="ck5" type="checkbox" />
            <label htmlFor="ck5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
