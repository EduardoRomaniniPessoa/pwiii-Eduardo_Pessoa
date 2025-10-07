function createTitle(title) {
    if (title) {
      return title;
    } else {
      return 'Default title';
    }
  }
   
  function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
  }
   
  function HomePage() {
    return (
      <div>
        <Header />
      </div>
    );
  }