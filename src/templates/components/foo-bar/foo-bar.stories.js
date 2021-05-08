import fetch from 'node-fetch';

import code from './foo-bar.tpl';
import './foo-bar.js';

export default {
    title: 'Components/Foo Bar',
    argTypes: {
        buttonLabel: { control: 'text' },
        secondButtonLabel: { control: 'text' }
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

    fetch('http://localhost/components/foo-bar/foo-bar.tpl', {
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
    buttonLabel: 'Foo!',
    secondButtonLabel: 'Bar!'
};
