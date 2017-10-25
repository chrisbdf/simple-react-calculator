import React from "react";
import {shallow} from "enzyme";
import assert from "assert";

import ButtonsList from "./ButtonsList";

// unit tests for ButtonsList component
describe('ButtonsList component', () => {
    describe('render', ()=> {
        it('should render ButtonsList component', () => {
            const wrapper = shallow(<ButtonsList />);
            assert.equal(wrapper.find('.component-buttons__container').length, 1);
        });
    });
})
