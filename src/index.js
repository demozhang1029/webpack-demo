import { join } from 'lodash';

const getComponent = () => {
    const element = document.createElement('div');
    element.innerHTML = join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(getComponent());