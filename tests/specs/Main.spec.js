import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

describe('FullHeader Hello', () => {
    it('should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('should return h1 tag when pass title', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });
        it('should not return h1 tag when not pass title', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });
        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal("TDD");
        });
    })
    context('subtitle', () => { 
        it('should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Curso" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });
        it('should not return h2 tag when not pass subtitle', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });
        it('should have h2 tag with the subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Curso" />);
            expect(wrapper.find('h2').props().children).to.be.equal("Curso");
        });
    })
});
