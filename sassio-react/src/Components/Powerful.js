function Powerful() {
  return (
    <div className="powerful-features">
      <div className="col-1 p-2 text-center">
        <button className="speciale-1 just-start">OUR FEATURES</button>
        <br />
        <h1 className="dark title">Powerful Features</h1>
        <br />
      </div>
      <div className="row features-info align-center">
        <div className="col features">
          <div className="row different">
            <div className="col features-img">
              <img src="/images/laptop.png" alt="Laptop" />
            </div>
            <div className="col-4">
              <h3 className="dark">Theme Made Easy</h3>
              <br />
              <p>
                Our astonishing style structure makes your customization process
                a breeze
              </p>
            </div>
          </div>
          <br />
          <div className="row different">
            <div className="col features-img">
              <img src="/images/pencil.png" alt="Pencil" />
            </div>
            <div className="col-4">
              <h3 className="dark">Powerful Design</h3>
              <br />
              <p>
                With ready-to-use content you'll deploy your implementation in
                no time
              </p>
            </div>
          </div>
          <br />
          <div className="row different">
            <div className="col features-img">
              <img src="/images/group.png" alt="Group" />
            </div>
            <div className="col-4">
              <h3 className="dark">Creative Content</h3>
              <br />
              <p>
                Repetitive styles all across the web? Nevermind that! Shine with
                unique styles
              </p>
            </div>
          </div>
        </div>
        <div className="col-1 picture">
          <img src="/images/mockup.png" className="powerful-img" alt="Mockup" />
          <img
            src="/images/pattern-bg.png"
            alt="pattern"
            className="pattern-img-power"
          />
        </div>
      </div>
    </div>
  );
}

export default Powerful;
