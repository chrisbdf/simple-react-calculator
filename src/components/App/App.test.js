import React from "react";
import {shallow} from "enzyme";
import assert from "assert";

import App from "./App";

// unit tests for App component
describe('App component', () => {
    describe('render', ()=> {
        it('should render App component', () => {
            const wrapper = shallow(<App />);
            assert.equal(wrapper.find('.component-calculator').length, 1);
        });
    });
})
