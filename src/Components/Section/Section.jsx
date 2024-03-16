
// eslint-disable-next-line react/prop-types
const Section = ({ heading, para }) => {
    return (
        <div className="mt-6 text-center">
            <h2 className="text-5xl">{heading}</h2>
            <p>{para}</p>
        </div>
    );
};

export default Section;