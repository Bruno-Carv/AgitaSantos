import React from 'react';

import { Spinner } from 'react-bootstrap';
import { any, string } from 'prop-types';

export default function ButtonSend({
    textSend = string,
    textLoading = string,
    textFinish = string,
    type = string | 'submit' | 'button',
    className = string | any,
    finish = false,
    animation = 'grow'
}) {

    return ((finish) ? (
        <button disabled className={className}>
            <Spinner
                as="span"
                animation={animation}
                size="sm"
                role="status"
                aria-hidden="true"
            />
        </button>
    )
        :
        (
            <button type={type} className={className}>
                {textSend}
            </button>
        )
    )
}