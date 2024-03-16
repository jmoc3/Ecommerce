import c1 from "/public/images/c1.jpg"
import c2 from "/public/images/c2.jpg"
import c3 from "/public/images/c3.jpg"
import c4 from "/public/images/c4.jpg"

export default function HeroSlide():JSX.Element{
  return(
    <div className="containerHero absolute top-[20%] left-[10%] space-y-5 z-0 w-full h-3/5 flex flex-nowrap justify-start ">
      <input className="ratio" type="radio" name="slide" id="c1" defaultChecked/>
      <label htmlFor="c1" className="cardHero w-[4%] rounded-[2rem] bg-cover bg-center cursor-pointer overflow-hidden my-0 mx-[10px] flex items-end  " style={{backgroundImage:`url(${c1.src})`}}>
        <div className="row">
          <div className="icon w-[2.5rem] h-[2.5rem] m-[.3rem] 2xl:w-[3rem] 2xl:h-[3rem] 2xl:m-[.8rem]">1</div>
          <div className="descriptionHero">
            <h4>A lot of products</h4>
            <p className="hidden xl:block text-sm 2xl:text-base">To step out of your comfort zone and dare to change</p>
          </div>
        </div>
      </label>

      <input className="ratio" type="radio" name="slide" id="c2"/>
      <label htmlFor="c2" className="cardHero w-[4%] rounded-[2rem] bg-cover bg-center cursor-pointer overflow-hidden my-0 mx-[10px] flex items-end  " style={{backgroundImage:`url(${c2.src})`}}>
        <div className="row">
          <div className="icon w-[2.5rem] h-[2.5rem] m-[.3rem] 2xl:w-[3rem] 2xl:h-[3rem] 2xl:m-[.8rem]">2</div>
          <div className="descriptionHero ">
            <h4>Clothing of any style</h4>
            <p className="hidden xl:block text-sm 2xl:text-base">What does the cold matter if the outfit is amazing, right?</p>
          </div>
        </div>
      </label>

      <input className="ratio" type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="cardHero w-[4%] rounded-[2rem] bg-cover bg-center cursor-pointer overflow-hidden my-0 mx-[10px] flex items-end  " style={{backgroundImage:`url(${c3.src})`}}>
          <div className="row"> 
            <div className="icon w-[2.5rem] h-[2.5rem] m-[.3rem] 2xl:w-[3rem] 2xl:h-[3rem] 2xl:m-[.8rem]">3</div>
            <div className="descriptionHero">
              <h4>Beauty Products</h4>
              <p className="hidden xl:block text-sm 2xl:text-base">Because first impressions always count</p>
            </div>
          </div>
        </label>

      <input className="ratio" type="radio" name="slide" id="c4" />
      <label htmlFor="c4" className="cardHero w-[4%] rounded-[2rem] bg-cover bg-center cursor-pointer overflow-hidden my-0 mx-[10px] flex items-end  " style={{backgroundImage:`url(${c4.src})`}}>
        <div className="row">
          <div className="icon w-[2.5rem] h-[2.5rem] m-[.3rem] 2xl:w-[3rem] 2xl:h-[3rem] 2xl:m-[.8rem]">4</div>
          <div className="descriptionHero">
            <h4>Cutting-edge technology</h4>
            <p className="hidden xl:block text-sm 2xl:text-base">Modern and determined to generate the future we all need.</p>
          </div>
        </div>
      </label>
    </div>
  )
}