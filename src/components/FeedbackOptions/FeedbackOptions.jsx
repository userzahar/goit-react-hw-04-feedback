import PropTypes from 'prop-types';
import { ButtonStyled, FeedbackListStyled } from './Feedback.styled';
export function FeedbackOptions({ options, onLeaveFeedback }) {
    return <FeedbackListStyled className="feedback__btn-list">
        {options.map(option => {
            return (
                <li className="feedback__item" key={option}>
                    <ButtonStyled
                            className="feedback__button"
                            type="button"
                            name={option}
                            onClick={onLeaveFeedback}>
                        {option}
                    </ButtonStyled>
                </li>
            );
        })}
    </FeedbackListStyled>
}

FeedbackOptions.propTypes = {
    options:PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback:PropTypes.func,
}

