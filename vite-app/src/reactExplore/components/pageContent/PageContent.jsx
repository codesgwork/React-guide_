import React from 'react';
import './pageContent.css';
import AnchorLink from './AnchorLink';
export const PageContent = () => {
  return (
    <div className='pageContent'>
      <nav>
        <li id='ContentList'>Contents List</li>
        <ul>
          <li>
            <AnchorLink href='#section1'>Section 1</AnchorLink>
          </li>
          <li>
            <AnchorLink href='#section2'>Section 2</AnchorLink>
          </li>
          <li>
            <AnchorLink href='#section3'>Section 3</AnchorLink>
          </li>
        </ul>
      </nav>

      <div id='section1'>
        <h2>Section 1</h2>
        <p>Content of section 1</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          molestias quibusdam corporis nisi beatae ab. Minima quos ratione quia
          dolore totam harum id impedit dolores facilis non nulla sunt
          doloremque iure asperiores similique, adipisci nisi atque recusandae.
          Eos est magni tempore nostrum? Fuga tenetur natus odio! Vel
          consequatur ex mollitia molestias, officia provident velit, rem earum
          et quisquam placeat reprehenderit?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          molestias quibusdam corporis nisi beatae ab. Minima quos ratione quia
          dolore totam harum id impedit dolores facilis non nulla sunt
          doloremque iure asperiores similique, adipisci nisi atque recusandae.
          Eos est magni tempore nostrum? Fuga tenetur natus odio! Vel
          consequatur ex mollitia molestias, officia provident velit, rem earum
          et quisquam placeat reprehenderit?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          molestias quibusdam corporis nisi beatae ab. Minima quos ratione quia
          dolore totam harum id impedit dolores facilis non nulla sunt
          doloremque iure asperiores similique, adipisci nisi atque recusandae.
          Eos est magni tempore nostrum? Fuga tenetur natus odio! Vel
          consequatur ex mollitia molestias, officia provident velit, rem earum
          et quisquam placeat reprehenderit?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          molestias quibusdam corporis nisi beatae ab. Minima quos ratione quia
          dolore totam harum id impedit dolores facilis non nulla sunt
          doloremque iure asperiores similique, adipisci nisi atque recusandae.
          Eos est magni tempore nostrum? Fuga tenetur natus odio! Vel
          consequatur ex mollitia molestias, officia provident velit, rem earum
          et quisquam placeat reprehenderit?
        </p>
        <li>
          <AnchorLink href='#ContentList'>Top</AnchorLink>
        </li>
      </div>

      <div id='section2'>
        <h2>Section 2</h2>
        <p>Content of section 2</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          dignissimos quae nemo voluptatem libero corrupti tempora ipsa impedit
          fugit, saepe perspiciatis quasi modi repellendus, molestias autem!
          Repellat magni obcaecati assumenda sequi autem adipisci repudiandae
          saepe aspernatur quae veritatis ex explicabo odio dolorum, dolorem
          magnam laudantium officiis rem libero itaque? Quibusdam,
          necessitatibus. Ipsam iste maiores est nam praesentium alias molestiae
          recusandae enim esse ea unde dolorem quam incidunt quaerat totam sunt
          dignissimos accusamus nobis delectus ipsum veritatis, provident,
          dolore voluptatem. Alias impedit modi distinctio perferendis quis
          eligendi facilis veniam obcaecati mollitia corrupti illum voluptates,
          explicabo eos quas iusto consequuntur! Natus, quidem!
        </p>
      </div>

      <div id='section3'>
        <h2>Section 3</h2>
        <p>Content of section 3</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          itaque ad obcaecati. Aut omnis iste, voluptatum consequatur nulla
          praesentium delectus adipisci, a illo quibusdam facere dolores
          voluptates tempora soluta rerum distinctio veniam? Maiores deleniti
          molestiae voluptatum, fuga odio in culpa doloremque inventore
          reprehenderit ratione, ipsam delectus, voluptate optio molestias
          nihil!
        </p>
      </div>
    </div>
  );
};
