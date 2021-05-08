import fetch from 'node-fetch';

import code from './button.tpl';
import './button.js';

export default {
    title: 'Components/Button',
    argTypes: {
        label: { control: 'text' }
    },
    parameters: {
        docs: {
            source: {
                code
            }
        }
    }
};

const Template = args => {
    const container = document.createElement('div');

    fetch('http://localhost/components/button/button.tpl', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(args)
    })
        .then(response => response.text())
        .then(text => {
            container.innerHTML = text;
        });

    return container;
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Hello World!'
};
