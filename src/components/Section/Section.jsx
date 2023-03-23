import PropTypes from 'prop-types';
export function Section({ title, children }) {
    return <div className="section">
        <p className={"section__header"}>{title}</p>
        {children}
    </div>
}
Section.propTypes = {
    title:PropTypes.string,
    children:PropTypes.element,
}