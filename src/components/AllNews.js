import { Component } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { getAllNews, getTopHeadlines } from "../services/NewsService";
import { NewsArticles } from "./NewsArticle";

export class AllNews extends Component {
    constructor() {
        super();
        this.state = {
            news: []
        }
    }
    async componentDidMount() {
        const response = await getAllNews('sports');
        console.log(response.data.articles);
        this.setState({ news: response.data.articles });
    }
    render() {
        return (
            <Container>
                <Container className="mt-4 text-center">
                    <Alert variant="primary">View All News</Alert>
                </Container>
                <Container className="mt-3">
                    <Row>
                        {
                            this.state.news.map((item) => {
                                return (
                                    <NewsArticles article={item}></NewsArticles>
                                )
                            })
                        }
                    </Row>

                </Container>
            </Container>
        );
    }
}