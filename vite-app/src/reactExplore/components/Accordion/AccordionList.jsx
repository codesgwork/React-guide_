import { Header } from './Header';
import './accordion.css'
import { Accordion } from './Accordion';
import { accordion } from '../../data/accordion';
export const AccordionList = () => {
  return (
    <section className='accridation-list'>
      <Header />
      <div>
        <h3 className='main-title'>Most asked questions</h3>
        <div className='main-title-underline'></div>
        {accordion.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
    </section>
  );
};
