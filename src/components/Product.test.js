import React from 'react';
import { Product } from './Product';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {MemoryRouter as Router, withRouter} from 'react-router-dom'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { expect } from 'chai';
configure({ adapter: new Adapter() });



const mockItem=
    {
        "id": "a",
        "src": "fdas",
        "description":"test",
        "label":"testing",
        "price":5
    };

const mockStore = configureStore();
const initialState = {};
let store = mockStore(initialState);


describe('Product', () => {

    it('renders item', () => {


        const wrapper = shallow(<Product id={mockItem.id}
                                         src={mockItem.src}
                                         description={mockItem.description}
                                         label={mockItem.label}
                                         price={mockItem.price} />);

        const paragraph = wrapper.find('p');
        console.log(wrapper.instance().props)
        console.log(paragraph.props());
        expect(paragraph.text()).to.equal(true);

        console.log(wrapper.find('h4').get(0).render());
        expect(wrapper.find('h4').get(0)).to.equal(true);

    });

    it('calls changePage on click',() => {
        let spy1 = sinon.spy();
        const wrapper = shallow(<Products items={ mockItems } changePage={spy1}/>);
        expect(spy1.called).to.equal(false);
        wrapper.find('Button').simulate('click')
        expect(spy1.called).to.equal(true);
    })
})
// });
