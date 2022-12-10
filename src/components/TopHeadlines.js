import { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { getTopHeadlines } from "../services/NewsService";
import { NewsArticle } from "./NewsArticle";

export function TopHeadlines(){
    const [news,setNews]=useState([]);
    useEffect(()=>{
        async function getNews(){
            const response = await getTopHeadlines();
            setNews(response.data.articles);
        }
        getNews();
    },[]);
    return (
        <Container>
            <Container className="mt-4 text-center">
                <Alert variant="success">
                    View top headlines
                </Alert>
            </Container>
            <Container>
                <Row>
                    {
                        news.map((item)=>{
                            return (
                                <NewsArticle article={item}></NewsArticle>
                            )
                        })
                    }
                </Row>
            </Container>
        </Container>
    );
}