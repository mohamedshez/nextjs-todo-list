const Footer = () => {
  return (
    <footer className="footer-container">
      <p>MIT License 2022 - </p>
      <a rel="noreferrer" href="https://github.com/shez1461" target="_blank">
        &nbsp;Mohamed Shez
      </a>
      <style jsx>
        {`
          footer {
            flex-direction: row;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--accents-2);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
