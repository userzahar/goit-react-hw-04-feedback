import PropTypes from 'prop-types';
import { SectionStyle } from './Section.styled';
export function Section({ title, children }) {
    return <SectionStyle className="section">
        {title && <p className={"section__header"}>{title}</p>}
        {children}
    </SectionStyle>
}
Section.propTypes = {
    title:PropTypes.string,
    children:PropTypes.object,
}
