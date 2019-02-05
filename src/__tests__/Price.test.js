import Price from '../Price'

import {shallow, mount, render} from 'enzyme';

import React from 'react';
it("Ціна товару не '0'",()=>{
    const wrapper = mount( <Price/>)
    expect(wrapper.msgSpanRes.innerText).toBeGreaterThan(0);
})
