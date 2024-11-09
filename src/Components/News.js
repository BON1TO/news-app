import React, { Component } from 'react';
import Newsitems from './Newsitems';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            article: [],
            page: 1,
        };
    }

    async componentDidMount() {
        await this.fetchArticles();
    }

    fetchArticles = async () => {
        const { page } = this.state;
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=26b117259f30426d8ad1056e371091f4&page=${page}&pageSize=10`;
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({ article: parsedData.articles });
    }

    nxtPg = async () => {
        await this.setState({ page: this.state.page + 1 });
        await this.fetchArticles();
    }

    prevPg = async () => {
        await this.setState({ page: this.state.page - 1 });
        await this.fetchArticles();
    }

    render() {
        return (
            <div className="container" style={{ padding: '20px' }}>
                <h1 style={{ margin: '0', padding: '20px 0 10px 0', fontStyle: 'italic' }}>HEADLINES</h1>
                <br />
                <div className="row justify-content-start">
                    {this.state.article.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <Newsitems
                                    title={element.title.slice(0, 49)}
                                    description={(element.description || "").slice(0, 50)}
                                    imgUrl={element.urlToImage || "https://about.fb.com/wp-content/uploads/2023/09/GettyImages-686732223.jpg"}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                    <br />
                    <button 
                        type="button" 
                        disabled={this.state.page <= 1} 
                        onClick={this.prevPg} 
                        className="btn btn-primary" 
                        style={{ margin: "2px" }}
                    >
                        &larr; Previous Page
                    </button>
                    <button 
                        type="button" 
                        onClick={this.nxtPg} 
                        className="btn btn-primary" 
                        style={{ margin: "2px" }}
                    >
                        Next Page &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;
