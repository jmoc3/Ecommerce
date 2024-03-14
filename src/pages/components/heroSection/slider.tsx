export default function HeroSlide():JSX.Element{
  return(
    <div className="containerHero absolute top-[20%] left-[10%] space-y-5 z-0 h-3/5 flex flex-nowrap justify-start ">
      <input className="ratio" type="radio" name="slide" id="c1" defaultChecked/>
      <label htmlFor="c1" className="cardHero bg-[url('https://images.unsplash.com/photo-1600909385541-e705de1fc5d5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="row">
          <div className="icon">1</div>
          <div className="descriptionHero">
            <h4>A lot of products</h4>
            <p>To step out of your comfort zone and dare to change</p>
          </div>
        </div>
      </label>

      <input className="ratio" type="radio" name="slide" id="c2"/>
      <label htmlFor="c2" className="cardHero bg-[url('https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="row">
          <div className="icon">2</div>
          <div className="descriptionHero">
            <h4>Clothing of any style</h4>
            <p>What does the cold matter if the outfit is amazing, right?</p>
          </div>
        </div>
      </label>

      <input className="ratio" type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="cardHero bg-[url('https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="row">
            <div className="icon">3</div>
            <div className="descriptionHero">
              <h4>Beauty Products</h4>
              <p>Because first impressions always count</p>
            </div>
          </div>
        </label>

      <input className="ratio" type="radio" name="slide" id="c4" />
      <label htmlFor="c4" className="cardHero bg-[url('https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="row">
          <div className="icon">4</div>
          <div className="descriptionHero">
            <h4>Cutting-edge technology</h4>
            <p>Modern and determined to generate the future we all need.</p>
          </div>
        </div>
      </label>
    </div>
  )
}