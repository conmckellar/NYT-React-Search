import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { ArticleList, ArticleListItem } from "../components/ArticleList";

const Results = () =>
	<div>
		<Row>
            <Col size="xs-12">
              {!this.state.articles.length ? (
                <h1 className="text-center">No Articles to Display</h1>
              ) : (
                <ArticleList>
                  {this.state.articles.map(article => {
                    return (
                      <ArticleListItem
                        key={article.title}
                        title={article.title}
                        href={article.href}
                        date={article.date}
                      />
                    );
                  })}
                </ArticleList>
              )}
            </Col>
        </Row>
	</div>

export default Results;