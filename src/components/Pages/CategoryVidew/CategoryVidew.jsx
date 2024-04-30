import PropTypes from 'prop-types';

const CategoryVidew = ({ d }) => {



    const { name, photo, description, price } = d;



    return (
        <div>
            <div>
                <div className="card w-80 h-96 bg-base-100 shadow-xl md:p-10">
                    <figure><img src={photo}
                        className="w-[300px] h-[300px]"
                    /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <p>{description.slice(0, 20)}</p>
                        <p className="font-bold">${price}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

CategoryVidew.propTypes = {
    d: PropTypes.array
};

export default CategoryVidew;