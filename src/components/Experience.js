import "./Resume.css";

function Experience() {
  return (
    <>
      <div className="section">
        <div className="section__title">Experience</div>
        <div className="section__list">
          <div className="section__list-item">
            <div className="left">
              <div className="name">KlowdBox</div>
              <div className="addr">San Fr, CA</div>
              <div className="duration">Jan 2011 - Feb 2015</div>
            </div>
            <div className="right">
              <div className="name">Fr developer</div>
              <div className="desc">did This and that</div>
            </div>
          </div>
          <div className="section__list-item">
            <div className="left">
              <div className="name">Akount</div>
              <div className="addr">San Monica, CA</div>
              <div className="duration">Jan 2011 - Feb 2015</div>
            </div>
            <div className="right">
              <div className="name">Fr developer</div>
              <div className="desc">did This and that</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
