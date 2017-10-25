import React from "react";
import {shallow} from "enzyme";
import assert from "assert";

import Display from "./Display";

// unit tests for Display component
describe('Display component', () => {
    describe('render', ()=> {
        it('should render Display component', () => {
            const wrapper = shallow(<Display />);
            assert.equal(wrapper.find('.component-calculator__display__container').length, 1);
        });
    });
})
