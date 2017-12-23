import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Input from "../components/Input";
import Button from "../components/Button";

const Search = () =>
	<div>
		<Row>
            <Col size="md-12">
              <form>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="ArticleSearch"
                        value={this.state.articleSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For an Article"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
              </form>
            </Col>
        </Row>
	</div>

export default Search;