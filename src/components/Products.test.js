import React from 'react';
import ReactDOM from 'react-dom';
import { Products } from './Products';
import { Product } from './Product';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {MemoryRouter as Router, withRouter} from 'react-router-dom'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { expect } from 'chai';
configure({ adapter: new Adapter() });



const mockItems=[
    {
        "id": "a",
        "src": "fdas",
        "description":"test",
        "label":"testing",
        "price":5
    },
    {
        "id": "b",
        "src": "test",
        "description":"test",
        "label":"test",
        "price":15
    }
];




const mockStore = configureStore();
const initialState = {};
let store = mockStore(initialState);


describe('Products', () => {
    it('renders items', () => {


        const wrapper = shallow(<Products items={ mockItems }/>);

        expect(wrapper.find('Connect(Product)')).to.have.length(mockItems.length);
        expect(wrapper.find('Connect(Product)').get(0).props.id).to.equal(mockItems[0].id)
        expect(wrapper.find('Connect(Product)').get(1).props.description).to.equal(mockItems[1].description)

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
