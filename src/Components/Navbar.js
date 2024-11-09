import React, { Component } from 'react';

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      selectedLanguage: 'English', // Default language
    };
  }

  // Function to handle language selection
  handleLanguageChange = (language) => {
    this.setState({ selectedLanguage: language });
    // Here you can add logic to change the content of your page based on the selected language
    console.log(`Language changed to: ${language}`);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Links</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
                  </a>
                  <ul className="dropdown-menu">
                    {/* Call handleLanguageChange when an item is clicked */}
                    <li><a className="dropdown-item" onClick={() => this.handleLanguageChange('Russian')}>Russian</a></li>
                    <li><a className="dropdown-item" onClick={() => this.handleLanguageChange('German')}>German</a></li>
                    <li><a className="dropdown-item" onClick={() => this.handleLanguageChange('French')}>French</a></li>
                    <li><a className="dropdown-item" onClick={() => this.handleLanguageChange('Spanish')}>Spanish</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" onClick={() => this.handleLanguageChange('English')}>Default (English)</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        {/* Here, you can render the content based on the selected language */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2>Selected Language: {this.state.selectedLanguage}</h2>
          {/* Render different content based on the selected language */}
          {this.state.selectedLanguage === 'Russian' && <p>Содержимое на русском языке</p>}
          {this.state.selectedLanguage === 'German' && <p>Inhalt auf Deutsch</p>}
          {this.state.selectedLanguage === 'French' && <p>Contenu en français</p>}
          {this.state.selectedLanguage === 'Spanish' && <p>Contenido en español</p>}
          {this.state.selectedLanguage === 'English' && <p>Content in English</p>}
        </div>
      </div>
    );
  }
}

export default Navbar;
