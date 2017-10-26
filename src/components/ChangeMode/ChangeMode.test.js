import React from "react";
import {shallow} from "enzyme";
import assert from "assert";

import ChangeMode from "./ChangeMode";

// unit tests for ChangeMode component
describe('ChangeMode component', () => {
    describe('render', ()=> {
        it('should render ChangeMode component', () => {
            const wrapper = shallow(<ChangeMode />);
            assert.equal(wrapper.find('.component-change_mode').length, 1);
        });
    });
})
