import React, { Component } from "react";
import styled from "styled-components";
import { Box, Flex, Card, Image, Link } from "rebass";
import { Api } from "../../Api";

class ProfileProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }

  async componentDidMount() {
    const response = await Api.get(`/${this.props.user.id}/projects`);
    this.setState({ projects: response.projects });
  }

  async componentDidUpdate(prevProps) {
    const response = await Api.get(`/${this.props.user.id}/projects`);
    if (this.props.user.id !== prevProps.user.id) {
      this.setState({ projects: response.projects });
    }
  }

  render() {
    const { projects } = this.state;

    return (
      <Flex flexWrap="wrap" mx={-4}>
        {!!projects &&
          projects.map(project => (
            <Box
              key={project.id}
              width={[1, 1 / 2, 1 / 3, 1 / 4]}
              pr={4}
              pb={4}
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card>
                  <Image
                    width={1}
                    borderRadius={8}
                    src={project.covers["202"]}
                    alt={project.name}
                  />
                  <StyledH4>{project.name}</StyledH4>
                </Card>
              </Link>
            </Box>
          ))}
      </Flex>
    );
  }
}

const StyledH4 = styled("h4")`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export default ProfileProjects;
