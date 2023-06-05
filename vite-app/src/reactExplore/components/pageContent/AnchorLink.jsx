import React from 'react';

class AnchorLink extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    const { href } = this.props;
    const target = document.querySelector(href);

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  render() {
    const { href, children } = this.props;

    return (
      <a href={href} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

export default AnchorLink;
