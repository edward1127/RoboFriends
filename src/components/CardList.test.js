import React from 'react';
import{ shallow} from 'enzyme'; 
import CardList from './CardList';

it ('expect to render Card component', () => {
    const mockRobots = [{
        id:'counter',
        name: 'John,Snow',
        username: 'JohnJohn',
        email: 'john@gmail.com'
    }]
    expect(shallow(<CardList robots={mockRobots}/>).length).toMatchSnapshot();
})
