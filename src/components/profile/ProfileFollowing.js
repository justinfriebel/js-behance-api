import React, { Component } from "react";
import { Box, Flex } from "rebass";
import { Api } from "../../Api";

class ProfileFollowing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      following: null
    };
  }

  async componentDidMount() {
    const response = await Api.get(`/${this.props.user.id}/following`);
    this.setState({ following: response.following });
  }

  render() {
    const { following } = this.state;
    return (
      <Flex mx={-2}>
        <Box width={1} px={2}>
          <h3>Following</h3>
          {!!following &&
            following.map(key => <p key={key.username}>{key.display_name}</p>)}
        </Box>
      </Flex>
    );
  }
}

export default ProfileFollowing;
