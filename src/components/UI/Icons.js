import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const IconWrapper = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    margin: 5rem auto 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 3rem;
    color: var(--primary);
`

export const MoreIcon = () => {
    return (
        <IconWrapper>
            <StyledIcon icon={faEllipsisH} />
        </IconWrapper>
    )
}
