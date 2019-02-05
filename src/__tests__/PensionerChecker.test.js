import Price from '../Price'

import {shallow, mount, render} from 'enzyme';

import React from 'react';
it("Наявність prop('text')",()=>{
    const wrapper = mount( <PensionerChecker minPensionAge={21}/>)
    expect(wrapper.prop('minPensionAge')).toBeDefined();
})
