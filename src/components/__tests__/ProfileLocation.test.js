import React from "react";
import { shallow } from "enzyme";
import ProfileLocation from "../profile/ProfileLocation";
import user from "../__mocks__/user";

it("renders ProfileLocation without crashing", () => {
  shallow(<ProfileLocation user={user} />);
});
