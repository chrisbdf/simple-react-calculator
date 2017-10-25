import React from "react";
import {shallow} from "enzyme";
import assert from "assert";

import Button from "./Button";

// unit tests for Button component
describe('Button component', () => {
    describe('render', ()=> {
        it('should render Button component', () => {
            const wrapper = shallow(<Button />);
            assert.equal(wrapper.find('.component-button').length, 1);
        });
    });
})
