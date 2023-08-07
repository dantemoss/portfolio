
import PropTypes from "prop-types";

const CardSkills = ({ image }) => {
    return (
        <div className="flex justify-center items-center h-80">
            <div className="card">
                <div className="card__content flex flex-col items-center justify-center">
                    <img src={image} alt="Skill Logo" width={100} className="mb-4" />
                </div>
            </div>
        </div>
    );
};

CardSkills.propTypes = {
    image: PropTypes.string.isRequired,
};

export default CardSkills;
